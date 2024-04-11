import mongoose from "mongoose";

export default defineNitroPlugin(async () => {
  const config = useRuntimeConfig();

  try {
    mongoose.connect(config.mongodbUri);
    console.log("connected to db");
  } catch (e) {
    console.error(e);
  }
});
