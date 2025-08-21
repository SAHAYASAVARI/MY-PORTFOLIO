const functions = require("firebase-functions");
const fetch = require("node-fetch");

exports.verifyRecaptcha = functions.https.onRequest(async (req, res) => {
  const token = req.body.token;

  if (!token) {
    return res.status(400).send({ success: false, message: "No token provided" });
  }

  // 🔑 Your keys
  const apiKey = "AIzaSyAvffhWkpbIhQz5HDeRAFFVag9PuT1tEgM"; // Firebase auto-created API key
  const siteKey = "6LeRrIwrAAAAAM_GgcdtCENdXDgz0gT46sjRW63f"; // Your reCAPTCHA site key
  const projectId = "my-portfolio-fss"; // Firebase/Google Cloud project ID

  try {
    const response = await fetch(
      `https://recaptchaenterprise.googleapis.com/v1/projects/${projectId}/assessments?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          event: {
            token: token,
            siteKey: siteKey,
            expectedAction: "submit"
          }
        })
      }
    );

    const data = await response.json();

    if (data.tokenProperties && data.tokenProperties.valid) {
      return res.send({
        success: true,
        message: "Human verified ✅",
        score: data.riskAnalysis?.score || 0.0
      });
    } else {
      return res.status(400).send({
        success: false,
        message: "Verification failed ❌",
        details: data
      });
    }
  } catch (err) {
    return res.status(500).send({
      success: false,
      message: "Server error",
      error: err.message
    });
  }
});
