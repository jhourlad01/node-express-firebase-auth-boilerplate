const authService = require("../services/authService");

class AuthController {
  async login(req, res) {
    const { idToken } = req.body;
    if (!idToken) {
      return res.status(400).json({ success: false, error: "ID token required" });
    }

    try {
      const decoded = await authService.verifyIdToken(idToken);
      return res.status(200).json({ success: true, uid: decoded.uid });
    } catch (err) {
      return res.status(401).json({ success: false, error: err.message });
    }
  }
}

module.exports = new AuthController();
