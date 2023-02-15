import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{ 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
Button {
  cursor: pointer;
  border: 0;

}
ul, li {
  list-style: none;
}
`;

export const TopHeader = styled.header`
  width: 100vw;
  max-width: 100vw;
  height: 20vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #e0e0e0;
  @media (min-width: 426px) {
    height: 12vh;
    flex-direction: row;
    justify-content: space-between;
  }

  figure {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-family: "Inter", sans-serif;

    @media (min-width: 1023px) {
      margin: 5rem;
    }
  }
  p {
    color: #333333;
    font-weight: 900;
    font-size: 1.2rem;
  }
  span {
    color: #e60000;
    font-weight: 600;
    font-size: 1rem;
  }
`;
export const DivTopSearch = styled.div`
  display: flex;
  align-items: center;
  margin: 1.4rem;

  @media (min-width: 1023px) {
    margin: 3.6rem;
  }

  input {
    max-width: 30vw;
    height: 1rem;
    max-height: 1.2rem;

    padding: 1rem 1rem;

    border: none;
    outline: none;
    border-radius: 8px;
  }
  button {
    background-color: #27ae60;
    color: #ffffff;

    padding: 0.6rem 1rem;
    border: none;
    border-radius: 8px;
  }
`;

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-top: 10px;

  width: 100vw;
  height: 100vh;
  @media (min-width: 426px) {
    flex-direction: row;
    width: 100vw;
    margin-top: 10px;
  }
`;

export const Products = styled.section`
  width: 100vw;

  display: flex;
  @media (min-width: 426px) {
    width: 50vw;
  }
`;

export const CartSection = styled.section`
  max-width: 600px;
  width: 99vw;

  @media (min-width: 426px) {
    width: 40vw;
    position: sticky;
    top: -250px;
  }
`;

export const DivCart = styled.div`
  background-color: #f5f5f5;

  margin-top: 1.4rem;

  border-top-left-radius: 0.6rem;
  border-top-right-radius: 0.6rem;
`;
export const TitleH3 = styled.h3`
  background-color: #27ae60;
  color: #f5f5f5;

  font-family: "Inter", sans-serif;
  font-size: 1.2rem;
  font-weight: 600;

  padding: 1rem 1.4rem;

  border-top-left-radius: 0.6rem;
  border-top-right-radius: 0.6rem;
`;
export const BoxCart = styled.li`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 100%;

  margin: 0.4rem;
`;
export const CartImg = styled.img`
  background-color: #e0e0e0;
  width: 80px;
  height: 80px;
  border-radius: 1rem;
`;
export const CartDivDescription = styled.div`
  margin: 0.8rem;
`;
export const Pname = styled.p`
  color: #333333;
  font-weight: 600;
`;
export const Pcategory = styled.p`
  color: #828282;
  font-weight: 300;
`;
export const BtnCart = styled.button`
  background-color: #f5f5f5;
  color: #828282;

  margin: 1rem;
  padding: 0;
  border: none;
  border-radius: 8px;
`;

export const DivCartSum = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-top: 1px solid #828282;

  p {
    padding: 1rem;
  }
  span {
    color: #828282;
    padding: 1rem;
  }
`;
export const UlProduct = styled.ul`
  padding: 1rem;

  display: flex;

  width: 100vw;

  overflow-x: auto;
  @media (min-width: 426px) {
    flex-wrap: wrap;
    justify-content: flex-start;
    overflow-x: inherit;
  }
`;
export const LiProduct = styled.li`
  width: 300px;
  height: 346px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;

  margin: 1rem;

  border: 1px solid #e0e0e0;
  border-radius: 1rem;

  @media (min-width: 426px) {
    max-width: 182px;
    max-height: 360px;
  }
  img {
    background-color: #f5f5f5;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;

    width: 180px;
    height: 180px;

    max-width: 280px;
    max-height: 280px;
  }
`;
export const BoxProduct = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: left;

  .name {
    font-size: 1.2rem;
    font-weight: 800;
    font-family: "Inter", sans-serif;
  }

  .category {
    font-size: 12px;
    color: #828282;
  }

  .price {
    font-size: 1.2rem;
    font-weight: 600;
    color: #27ae60;
  }
  button {
    background-color: #27ae60;
    color: #ffffff;

    margin-top: 0.8rem;

    border: none;
    border-radius: 8px;

    padding: 0.4rem 0.2rem;
  }
`;
export const DivEmpty = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    font-size: 1.2rem;
    font-weight: 600;

    padding: 1rem;
    padding-top: 2rem;
  }
  span {
    font-size: 1rem;
    font-weight: 400;
    color: #333333;

    padding-bottom: 2rem;
  }
`;
