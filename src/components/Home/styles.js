import styled from 'styled-components';

export const ProductList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 20px;

    img {
      align-self: center;
      max-width: 100px;
    }

    > strong {
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin-top: 5px;
    }

    > span {
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
    }

  }
`;

export const Total = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    color: #999;
    font-weight: bold;
  }

  strong {
    font-size: 28px;
    margin-left: 5px;
  }
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  button {
    background: #7159c1;
    color: #fff;
    border: 0;
    border-radius: 4px;
    padding: 12px 20px;
    font-weight: bold;
    text-transform: uppercase;
    transition: background 0.2s;
    width: 240px;
  }
`;

export const Desconto = styled.span`
  font-size: 1rem;
  color: gray;
`;



export const Divider = styled.div`
display:flex;
flex-direction: row;
width: 300px;

`;

  

export const DividerImg = styled.div`
display: flex;
flex-direction: row;

button {
  height: 25px;
}
`;


export const DividerText = styled.div`
display: flex;
flex-direction: column;

`;