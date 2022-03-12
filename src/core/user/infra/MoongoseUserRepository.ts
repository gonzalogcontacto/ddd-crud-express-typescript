import mongoose from "mongoose";
//import jwt from "jsonwebtoken";
import { UserRepository } from "../domain/UserRepository";
import { UserDto } from "../domain/UserDto";

export class MongooseCourseRepository implements UserRepository {
  private model;
  private userSchema;

  constructor() {
    this.userSchema = new mongoose.Schema({
      name: { type: String },
      email: { type: String },
      password: { type: String },
    });

    this.model = mongoose.model("User", this.userSchema);
  }

  create(user: UserDto): Promise<any> {
    return this.model.create(user);
  }

  save(user: UserDto): Promise<any> {
    return this.model.create(user);
  }

  search(filter: any) {
    return new Promise(async (resolve, reject) => {
      resolve(await this.model.find(filter));
    });
  }

  delete(filter: any): Promise<any> {
    return new Promise(async (resolve, reject) => {
      resolve(await this.model.deleteOne(filter));
    });
  }

  update(filter: any): Promise<any> {
    return new Promise(async (resolve, reject) => {
      resolve(await this.model.updateOne(filter));
    });
  }
}

/*
const secret = "regeargrg";

userSchema.methods.generateAuthToken = function () {
  const user = this;
  const access = "auth";
  const token = jwt.sign({ _id: user._id }, secret);
  console.log(token);

  return this.update({
    $push: {
      tokens: token,
    },
  });
};
*/
