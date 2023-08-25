// import { createContext } from "react";
// import { client } from "@/sanity/lib/client";
// import { groq } from "next-sanity";

// export const AppContext = createContext();

// export const getProductsAsync = async () => {
//   return client.fetch(groq`*[_type == "product"]`);
// };

// export default async function AppContextProvider({ children }) {
//   const products = await getProductsAsync();
//   return <AppContext.Provider>{children}</AppContext.Provider>;
// }
