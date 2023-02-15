import { BoxProduct, LiProduct, UlProduct } from "../../styles";
export function ProductList({ products2, addToCart }) {
  return (
    <UlProduct>
      {products2.map((product) => (
        <LiProduct key={product.id}>
          <img src={product.img} alt={product.name}></img>
          <BoxProduct>
            <p className="name">{product.name}</p>
            <span className="category">{product.category}</span>
            <span className="price">R$ {product.price}</span>
            <button id={product.id} onClick={(e) => addToCart(e)}>
              Adicionar
            </button>
          </BoxProduct>
        </LiProduct>
      ))}
    </UlProduct>
  );
}
