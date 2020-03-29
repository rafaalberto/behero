const SessionService = require("../services/ProfileService");

module.exports = {
  async login(request, response) {
    try {
      const login = await SessionService.login(request, response);
      return response.status(200).json(login);
    } catch (error) {
      return response.status(400).json({ message: error });
    }
  }
};
