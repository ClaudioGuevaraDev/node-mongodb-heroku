import { connect } from "mongoose";
import { MONGODB_URI } from "./config";

(async () => {
  try {
    await connect(MONGODB_URI);
    console.log(`Database connected`);
  } catch (error) {
    console.error("Error to connect the database: ", error);
  }
})();
