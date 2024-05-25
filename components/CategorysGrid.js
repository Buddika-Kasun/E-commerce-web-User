import styled from "styled-components";
import ProductBox from "./ProductBox";
import { useState } from "react";

const StyledCategorysGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  margin-bottom: 75px;
`;

export default function CategorysGrid({products, category}) {

    return (
      <StyledCategorysGrid>
        {products?.length > 0 && products.map(product => {
            if(product.category == category._id){
                return(<ProductBox key={product._id} {...product} />);
            }
        })}
      </StyledCategorysGrid>
    );
  }