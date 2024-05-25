import { Featured } from "@/components/Featured";
import Header from "@/components/Header";
import { Product } from "@/models/Product";
import { Settings } from "@/models/Settings";
import { mongooseConnect } from "@/lib/mongoose";
import NewProducts from "@/components/NewProducts";

export default function HomePage({featuredProduct,newProducts}){
  return(
    <div>
      <Header />
      <Featured product={featuredProduct} />
      <NewProducts products={newProducts} /> 
    </div>
  );
}

export async function getServerSideProps(){
  await mongooseConnect();
  const setting = await Settings.findOne();
  //const featuredProductId = '65f54977f6c6bface85a8010';
  const featuredProductId = setting.id;
  const featuredProduct = await Product.findById(featuredProductId);
  const newProducts = await Product.find({}, null,{sort: {'_id':-1}, limit:10});
  return {
   props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),
    },
  };
}