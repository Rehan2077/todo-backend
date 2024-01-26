import mongoose from "mongoose";

export const startDB = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then((e) => console.log("Database Connected"))
    .catch((e) => console.log(e));
};
