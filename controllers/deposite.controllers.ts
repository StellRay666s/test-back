import { Request, Response } from "express";
import db from "../models";

async function getDeposite(req: Request, res: Response) {
  try {
    const data = await db.Deposite.findAll({
      attributes: [
        "id",
        "title",
        "reference",
        "status",
        "depositeStatus",
        "dateDeposite",
        "price",
      ],
    });

    return res.send(data);
  } catch (err) {
    console.log(err);
  }
}

export default { getDeposite };
