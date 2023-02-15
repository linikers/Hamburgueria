import { DivTopSearch, TopHeader } from "../../styles";

export function Header({
  searchProduct,
  filteredProducts,
  setFilteredProducts,
}) {
  return (
    <TopHeader>
      <figure>
        <p>Burger</p>
        <span>Kenzie</span>
      </figure>
      <DivTopSearch>
        <input
          type="text"
          value={filteredProducts}
          onChange={(e) => setFilteredProducts(e.target.value)}
        />
        <button id="btnSearch" onClick={searchProduct}>
          Pesquisar
        </button>
      </DivTopSearch>
    </TopHeader>
  );
}
