import { div } from "framer-motion/client";
import { useRouter } from "next/router";
import Header from "@/components/layout/Header";
import Layout from '@/components/layout/Layout'
import ProductDetailsComponent from "@/components/pages/ProductDetailsComponent";

const ProductDetail = () => {
  return (
    <div>
      <Layout>
        <ProductDetailsComponent />
      </Layout>
    </div>
  );
};
export default ProductDetail;
