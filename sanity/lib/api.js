import client from "./client";

export async function getAllProducts() {
  const query = `*[_type == "product"] {
            name, author, slug, images, categories, description, sku, currency, price
      }`;

  return await client.fetch(query);
}
