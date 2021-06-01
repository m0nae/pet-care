import { User } from "../../typings/models/user";
const db = require("../../models");
const { Pet, Medication } = db;

export default class ModelAssociations {
  private static createUsersAssociations() {
    User.hasMany(Medication);
  }

  private static createMedicationsAssociations() {
    Medication.belongsTo(User);
  }

  private static createPetsAssociations() {
    // create pet associations here
  }

  static createAll() {
    this.createPetsAssociations();
    this.createMedicationsAssociations();
    this.createUsersAssociations();
  }
}
