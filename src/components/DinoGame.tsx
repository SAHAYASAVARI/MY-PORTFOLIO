import React, { useEffect, useRef, useState } from "react";

// Simple Dino runner game (jump over obstacles)
const GRAVITY = 0.7;
const JUMP = -12;
const OBSTACLE_SPEED = 6;
const OBSTACLE_INTERVAL = 1200;
const DINO_WIDTH = 40;
const DINO_HEIGHT = 40;
const OBSTACLE_WIDTH = 20;
const OBSTACLE_HEIGHT = 40;
const GROUND_Y = 120;

export const Widget: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    let animationId: number;
    let dinoY = GROUND_Y;
    let dinoVY = 0;
    let obstacles: { x: number }[] = [];
    let lastObstacle = Date.now();
    let localScore = 0;
    let isGameOver = false;

    const jump = () => {
      if (dinoY === GROUND_Y) dinoVY = JUMP;
    };

    const handleKey = (e: KeyboardEvent) => {
      if (e.code === "Space" || e.key === "ArrowUp") jump();
      if (!started) setStarted(true);
    };
    window.addEventListener("keydown", handleKey);

    const draw = () => {
      const ctx = canvasRef.current?.getContext("2d");
      if (!ctx) return;
      ctx.clearRect(0, 0, 400, 200);
      // Ground
      ctx.fillStyle = "#888";
      ctx.fillRect(0, GROUND_Y + DINO_HEIGHT, 400, 10);
      // Dino
      ctx.fillStyle = "#43a047";
      ctx.fillRect(40, dinoY, DINO_WIDTH, DINO_HEIGHT);
      // Obstacles
      ctx.fillStyle = "#d84315";
      obstacles.forEach((obs) => {
        ctx.fillRect(obs.x, GROUND_Y, OBSTACLE_WIDTH, OBSTACLE_HEIGHT);
      });
      // Score
      ctx.fillStyle = "#222";
      ctx.font = "16px monospace";
      ctx.fillText(`Score: ${localScore}`, 320, 30);
      if (isGameOver) {
        ctx.fillStyle = "#c62828";
        ctx.font = "24px monospace";
        ctx.fillText("Game Over!", 140, 100);
        ctx.font = "16px monospace";
        ctx.fillText("Press R to restart", 140, 130);
      }
    };

    const update = () => {
      if (!isGameOver && started) {
        dinoY += dinoVY;
        dinoVY += GRAVITY;
        if (dinoY > GROUND_Y) {
          dinoY = GROUND_Y;
          dinoVY = 0;
        }
        // Obstacles
        if (Date.now() - lastObstacle > OBSTACLE_INTERVAL) {
          obstacles.push({ x: 400 });
          lastObstacle = Date.now();
        }
        obstacles.forEach((obs) => (obs.x -= OBSTACLE_SPEED));
        obstacles = obstacles.filter((obs) => obs.x + OBSTACLE_WIDTH > 0);
        // Collision
        obstacles.forEach((obs) => {
          if (
            obs.x < 40 + DINO_WIDTH &&
            obs.x + OBSTACLE_WIDTH > 40 &&
            dinoY + DINO_HEIGHT > GROUND_Y
          ) {
            isGameOver = true;
            setGameOver(true);
            setScore(localScore);
          }
        });
        if (!isGameOver) localScore++;
      }
      draw();
      animationId = requestAnimationFrame(update);
    };
    update();

    const restart = () => {
      dinoY = GROUND_Y;
      dinoVY = 0;
      obstacles = [];
      lastObstacle = Date.now();
      localScore = 0;
      isGameOver = false;
      setGameOver(false);
      setScore(0);
      setStarted(false);
    };

    const handleR = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "r" && isGameOver) restart();
    };
    window.addEventListener("keydown", handleR);

    return () => {
      window.removeEventListener("keydown", handleKey);
      window.removeEventListener("keydown", handleR);
      cancelAnimationFrame(animationId);
    };
  }, [started]);

  return (
    <div style={{ textAlign: "center" }}>
      <h2 style={{ marginBottom: 8 }}>Dino Runner 🦖</h2>
      <canvas ref={canvasRef} width={400} height={200} style={{ border: "2px solid #888", background: "#fff" }} />
      <div style={{ marginTop: 8 }}>
        <button onClick={onClose} style={{ padding: "6px 16px", borderRadius: 6, background: "#43a047", color: "#fff", border: "none", cursor: "pointer" }}>
          Close
        </button>
      </div>
      <div style={{ fontSize: 12, color: "#888", marginTop: 4 }}>
        Press Space/Up to jump. Press R to restart.
      </div>
    </div>
  );
};
