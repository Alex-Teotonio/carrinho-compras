import React, {useEffect, useState} from "react";
import { api } from "../../services/api";
import {
  MdDelete,
  MdAddCircleOutline,
  MdRemoveCircleOutline,
} from 'react-icons/md';


import { Mensagem } from "../Mensagem";

import { formatPrice } from "../../utils/format";
import { ProductList , Total, Button, Desconto, Divider, DividerImg, DividerText} from "./styles";

export function Home() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('/items');
      setCart(response.data);

    }

    loadProducts();
  }, []);

  function handleRemoveProduct(productId) {
  }
  const total =
    cart.reduce((sumTotal, product) => {
      return (product.price/100) * product.quantity + sumTotal;
    }, 0)
  return (
    <>
      <h1>
        <strong>Meu carrinho</strong>
      </h1>
      <ProductList>{
          cart.map(product => (
            <li key = {product.uniqueId}>
                <Divider>
                <DividerImg>
                  <img src={product.imageUrl}/>
                </DividerImg>

                <DividerText>
                  <strong>{product.name}</strong>
                  <Desconto>{formatPrice((product.price/100))}</Desconto>
                  <span>{formatPrice(product.sellingPrice/100)}</span>
                </DividerText>
                </Divider>
            </li>
          ))
         }

            <Total>
              <span>TOTAL</span>
              <strong>{formatPrice(total)}</strong>
            </Total>
            {
              total > 10 && <Mensagem/>
            
            }
            <Button>
              <button type="button" >
                  <span>FINALIZAR COMPRA</span>
              </button>
            </Button>
      </ProductList>
    </>
  );
}