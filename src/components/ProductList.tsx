import { useEffect, useState } from "react";

export default function ProductList({ category }: { category: string }) {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log(`Fetching products for category: ${category}`);
    setProducts(["Clothing", "Household"]);
  }, [category]);
  return <div>ProductList</div>;
}
