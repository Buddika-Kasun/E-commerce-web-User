import styled from "styled-components";
import Center from "@/components/Center";
import ProductsGrid from "./ProductsGrid";

const Title = styled.h2`
  font-size: 2rem;
  margin:30px 0 20px;
  font-weight: normal;
`;

export default function NewProducts({products}) {
  return (
    <Center>
      <h2>New Arrivals</h2>
      <ProductsGrid products={products} />
    </Center>
  );
}