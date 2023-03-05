"use strict";
import { BOOLEAN } from "sequelize";
import { Model } from "sequelize";

interface DepositeModel {
  title: string;
  reference: string;
  status: boolean;
  depositeStatus: boolean;
  dateDeposite: string;
  price: number;
}
module.exports = (sequelize: any, DataTypes: any) => {
  class Deposite extends Model<DepositeModel> implements DepositeModel {
    title!: string;
    reference!: string;
    status!: boolean;
    depositeStatus!: boolean;
    dateDeposite!: string;
    price!: number;

    static associate(models: any) {}
  }
  Deposite.init(
    {
      title: { type: DataTypes.STRING },
      reference: { type: DataTypes.STRING },
      status: { type: DataTypes.BOOLEAN },
      depositeStatus: { type: DataTypes.BOOLEAN },
      dateDeposite: { type: DataTypes.STRING },
      price: { type: DataTypes.INTEGER },
    },
    {
      sequelize,
      modelName: "Deposite",
    }
  );
  return Deposite;
};
