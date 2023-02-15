import { Cart } from "./Cart";
import { Header } from "./Header/Header";
import { ProductList } from "./ProductList/index";

import { Container, Products, CartSection } from "../styles";

export function Home({
  products2,
  addToCart,
  currentSale,
  removeItemCart,
  searchProduct,
  filteredProducts,
  setFilteredProducts,
}) {
  return (
    <div>
      <Header
        searchProduct={searchProduct}
        filteredProducts={filteredProducts}
        setFilteredProducts={setFilteredProducts}
      />
      <Container>
        <Products>
          <ProductList products2={products2} addToCart={addToCart} />
        </Products>

        <CartSection>
          <Cart currentSale={currentSale} removeItemCart={removeItemCart} />
        </CartSection>
      </Container>
    </div>
  );
}
