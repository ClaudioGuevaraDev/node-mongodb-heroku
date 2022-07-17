import { connect } from "mongoose";

(async () => {
  try {
    await connect(
      "mongodb+srv://chicha:claudio123@node-mongodb-heroku.n97zj.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log(`Database connected`);
  } catch (error) {
    console.error("Error to connect the database: ", error);
  }
})();
