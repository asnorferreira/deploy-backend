import { app } from "./server.js";
import { config } from "dotenv";

config();

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
  console.log(process.env.ASNOR);
});
