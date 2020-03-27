const OngService = require("../services/OngService");

module.exports = {
  async create(request, response) {
    try {
      const [id] = await OngService.create(request, response);
      return response
        .status(201)
        .json({ message: `ONG created successfully: ${id}` });
    } catch (error) {
      return response.status(400).json({ message: error });
    }
  },

  async findAll(request, response) {
    try {
      const ongs = await OngService.findAll();
      return response.status(200).json(ongs);
    } catch (error) {
      return response.status(400).json({ message: error });
    }
  }
};
