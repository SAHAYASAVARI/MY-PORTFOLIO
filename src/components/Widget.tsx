// Widget component removed. Dino game deleted as requested.
    import React, { useRef, useEffect, useState } from "react";
    import './DinoGame.css';

    // Game constants
    const GAME_WIDTH = 500;
    const GAME_HEIGHT = 200;
    const DINO_WIDTH = 44;
    const DINO_HEIGHT = 44;
    const DINO_X = 50;
    const GROUND_Y = 140;
    const GRAVITY = 0.7;
    const JUMP_VELOCITY = -12;
    const OBSTACLE_WIDTH = 18;
    const OBSTACLE_HEIGHT = 38;

    export const Widget: React.FC<{ onClose?: () => void }> = ({ onClose }) => {
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
        let nextObstacleInterval = 1000 + Math.random() * 800;

        const jump = () => {
          if (dinoY === GROUND_Y) dinoVY = JUMP_VELOCITY;
        };

        const handleKey = (e: KeyboardEvent) => {
          if (e.code === "Space" || e.key === "ArrowUp") jump();
          if (!started) setStarted(true);
        };
        window.addEventListener("keydown", handleKey);

        const draw = () => {
          const ctx = canvasRef.current?.getContext("2d");
          if (!ctx) return;
          ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
          // Ground
          ctx.fillStyle = "#888";
          ctx.fillRect(0, GROUND_Y + DINO_HEIGHT, GAME_WIDTH, 10);
          // Dino
          ctx.fillStyle = "#43a047";
          ctx.fillRect(DINO_X, dinoY, DINO_WIDTH, DINO_HEIGHT);
          // Obstacles
          ctx.fillStyle = "#d84315";
          obstacles.forEach((obs) => {
            ctx.fillRect(obs.x, GROUND_Y, OBSTACLE_WIDTH, OBSTACLE_HEIGHT);
          });
          // Score
          ctx.fillStyle = "#222";
          ctx.font = "16px monospace";
          ctx.fillText(`Score: ${localScore}`, GAME_WIDTH - 120, 30);
          if (isGameOver) {
            ctx.fillStyle = "#c62828";
            ctx.font = "24px monospace";
            ctx.fillText("Game Over!", GAME_WIDTH / 2 - 70, 100);
            ctx.font = "16px monospace";
            ctx.fillText("Press R to restart", GAME_WIDTH / 2 - 70, 130);
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
            if (Date.now() - lastObstacle > nextObstacleInterval) {
              obstacles.push({ x: GAME_WIDTH });
              lastObstacle = Date.now();
              nextObstacleInterval = 1000 + Math.random() * 800;
            }
            obstacles.forEach((obs) => (obs.x -= 7));
            obstacles = obstacles.filter((obs) => obs.x + OBSTACLE_WIDTH > 0);
            // Collision
            obstacles.forEach((obs) => {
              if (
                obs.x < DINO_X + DINO_WIDTH &&
                obs.x + OBSTACLE_WIDTH > DINO_X &&
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
        <div className="dino-game-container">
          <h2 className="dino-game-title">Dino Runner 🦖</h2>
          <canvas ref={canvasRef} width={GAME_WIDTH} height={GAME_HEIGHT} className="dino-game-canvas" />
          <div className="dino-game-controls">
            <button onClick={onClose} className="dino-game-close">
              Close
            </button>
          </div>
          <div className="dino-game-instructions">
            Press Space/Up to jump. Press R to restart.
          </div>
        </div>
      );
    }
