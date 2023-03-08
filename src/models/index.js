import { userModel } from "./mongoModels/user.model.js";
import { productModel } from "./mongoModels/product.model.js";
import { options } from "../config/config.js";
import { MyMongoClient } from "./clients/dbClientMongo.js";

export async function getApiDao(dbType) {
  let ProductManager;
  let UserManager;
  switch (dbType) {
    case "mysql":
      const { ProductMysqlDao } = await import(
        "./daos/products/productMysqlDao.js"
      );
      const { UserMysqlDao } = await import("./daos/users/userMysqlDao.js");
      ProductManager = new ProductMysqlDao(options.sqlite, "products");
      UserManager = new UserMysqlDao(options.sqlite, "users");
      break;
    case "mongo":
      const { ProductMongoDao } = await import(
        "./daos/products/productMongoDao.js"
      );
      const { UserMongoDao } = await import("./daos/users/userMongoDao.js");
      const myClient = new MyMongoClient();
      await myClient.connect(options.mongo.url);
      ProductManager = new ProductMongoDao(productModel);
      UserManager = new UserMongoDao(userModel);
      break;
    default:
      break;
  }
  return { UserManager, ProductManager };
}
