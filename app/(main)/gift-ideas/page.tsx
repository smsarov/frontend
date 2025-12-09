import { getProducts } from "../actions/products/getProductsAction";
import { GiftIdeaView } from "./GiftIdeasView";

export default async function GiftIdeas() {
  const products = await getProducts(32);

  return <GiftIdeaView initialProducts={products} />;
}
