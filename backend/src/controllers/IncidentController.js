const IncidentService = require("../services/IncidentService");

module.exports = {
  async create(request, response) {
    try {
      const [id] = await IncidentService.create(request, response);
      return response
        .status(201)
        .json({ message: `Incident created successfully: ${id}` });
    } catch (error) {
      return response.status(400).json({ message: error });
    }
  },
  async findAll(request, response) {
    try {
      const incidents = await IncidentService.findAll(request, response);
      return response.status(200).json(incidents);
    } catch (error) {
      return response.status(400).json({ message: error });
    }
  },
  async findByOng(request, response) {
    try {
      const incidents = await IncidentService.findByOng(request, response);
      return response.status(200).json(incidents);
    } catch (error) {
      return response.status(400).json({ message: error });
    }
  },
  async delete(request, response) {
    try {
      await IncidentService.delete(request, response);
      return response.status(204).json();
    } catch (error) {
      return response.status(400).json({ message: error });
    }
  }
};
