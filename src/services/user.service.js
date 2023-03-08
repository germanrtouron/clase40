import { getApiDao } from "../models/index.js";
import { options } from "../config/config.js";
import { convertUserToDto } from "../models/dtos/user.dto.js";

const { UserManager } = await getApiDao(options.server.DB_TYPE);

export class userService {
  static async getUsers() {
    return await UserManager.getAll();
  }

  static async getUsersDTO() {
    const users = await UserManager.getAll();
    const usersDto = convertUserToDto(users);
    return usersDto;
  }

  static async getUser(id) {
    return await UserManager.getById(id);
  }

  static async saveUser(body) {
    return await UserManager.save(body);
  }

  static async deleteUser(id) {
    return await UserManager.deleteById(id);
  }
}
