const connection = require("../database/connection");
const crypto = require("crypto");

module.exports = {
  async create(request, response) {
    const { name, email, whatsapp, city, state } = request.body;
    const id = crypto.randomBytes(4).toString("HEX");
    return await connection("ongs").insert({
      id,
      name,
      email,
      whatsapp,
      city,
      state
    });
  },
  async findAll() {
    return await connection("ongs").select("*");
  }
};
