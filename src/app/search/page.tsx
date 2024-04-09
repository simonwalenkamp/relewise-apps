import { ProductSearchBuilder, Searcher, UserFactory } from "@relewise/client";
import { useState } from "react";

export default function Search() {
  const [term, setTerm] = useState();

  async function searchForProduct() {
    const searcher = new Searcher("", "", { serverUrl: "" });

    const request = new ProductSearchBuilder(
      {
        currency: "",
        displayedAtLocation: "",
        language: "",
        user: UserFactory.anonymous()
      }).build();

    const result = await searcher.searchProducts(request);

    console.log(result);
  }

  return (
    <h1>Hello from search page!</h1>
  );
}
