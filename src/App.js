import React from "react";
import productsData from "./productsData"
import Product from "./components/Product";

function App() {
  const productComponents = productsData.map(product => <Product key={product.id} product={product}/>)

  return(
    <div className="products">
      {productComponents}
    </div>
  );
}

export default App;
