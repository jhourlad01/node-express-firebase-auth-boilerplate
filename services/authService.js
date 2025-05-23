const admin = require("../utils/firebaseAdmin");

class AuthService {
  async verifyIdToken(idToken) {
    try {
      const decodedToken = await admin.auth().verifyIdToken(idToken);
      return decodedToken;
    } catch (error) {
      throw new Error("Invalid ID token");
    }
  }
}

module.exports = new AuthService();
