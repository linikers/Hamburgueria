import {
  CartDivDescription,
  BoxCart,
  CartImg,
  DivCart,
  TitleH3,
  Pname,
  Pcategory,
  BtnCart,
  DivCartSum,
  DivEmpty,
} from "../../styles";

export function Cart({ currentSale, removeItemCart }) {
  let total = currentSale.reduce((contador, atual) => {
    return contador + atual.price;
  }, 0);

  return (
    <DivCart>
      <TitleH3>Carrinho de compras</TitleH3>

      <ul>
        {currentSale.length ? (
          currentSale.map((product) => (
            <BoxCart key={product.id}>
              <CartImg src={product.img} alt={product.name} />

              <CartDivDescription>
                <Pname>{product.name}</Pname>
                <Pcategory>{product.category}</Pcategory>
              </CartDivDescription>
              <BtnCart onClick={() => removeItemCart(product.id)}>
                Remover
              </BtnCart>
            </BoxCart>
          ))
        ) : (
          <DivEmpty>
            <p>Sua sacola está vazia</p> <span>Adicione itens</span>
          </DivEmpty>
        )}
      </ul>
      {currentSale.length ? (
        <DivCartSum>
          <p>Total</p>
          <span>R$ {total.toFixed(2)}</span>
        </DivCartSum>
      ) : (
        <></>
      )}
    </DivCart>
  );
}
