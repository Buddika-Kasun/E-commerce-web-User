import Center from "@/components/Center";
import Header from "@/components/Header";
import ProductsGrid from "@/components/ProductsGrid";
import Title from "@/components/Title";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import { Category } from "../models/Category";
import { useState } from "react";
import CategorysGrid from "../components/CategorysGrid";

export default function ProductsPage({products,categorys}) {

    return (
      <>
        <Header />
        <Center>
            {categorys?.length > 0 && categorys.map(category => (
                <>
                <Title>{category.name}</Title>
                <CategorysGrid products={products} category={category}/>
                </>
            ))} 
        </Center>
      </>
    );
  } 

  export async function getServerSideProps() {
    await mongooseConnect();
    const products = await Product.find({}, null, {sort:{'_id':-1}});
    const categorys = await Category.find();
    return {
      props:{
        products: JSON.parse(JSON.stringify(products)),
        categorys: JSON.parse(JSON.stringify(categorys)),
      }
    };
  }