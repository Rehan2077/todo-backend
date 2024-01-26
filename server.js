import { app } from "./app.js";
import { startDB } from "./data/database.js";

startDB();

app.listen(process.env.PORT, () => {
  console.log(
    `Server is working on port:${process.env.PORT} in ${process.env.NODE_ENV} Mode`
  );
});
