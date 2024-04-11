import { Product } from "~/server/models/Product";

export default defineEventHandler(async (event) => {
  const products = await Product.find();

  return { products };
});
