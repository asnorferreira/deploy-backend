import knex from "../config/conect.js";

export const getList = async (req, res) => {
  try {
    const car = await knex("carros").select("*");
    return res.status(200).json(car);
  } catch (error) {
    console.error("Error ao listar carros: ", error);
    return res.status(500).json(message.error);
  }
};
