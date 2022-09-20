import Surreal from "surrealdb.js";
import { SomethingElse } from "./somethingElse.js";

console.log(SomethingElse.name);

async function run() {
  const DB = new Surreal("http://127.0.0.1:8000/rpc");

  await DB.signin({
    user: "root",
    pass: "root",
  });

  await DB.use("test", "test");

  const result = await DB.update("member:john", {
    username: "John",
    age: 28,
  });

  console.log(result);
}

run();
