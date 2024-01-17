import Container from "@/components/container";
import HomeBanner from "@/components/homeBanner";
import ProductCard from "@/components/productCard";
import { products } from "@/utils/products";

export default function Home() {
  return (
    <div className="p-8">
      <Container>
        <div>
          <HomeBanner />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {products.map((product: any) => {
            // eslint-disable-next-line react/jsx-key
            return <ProductCard data={product} />;
          })}
        </div>
      </Container>
    </div>
  );
}
