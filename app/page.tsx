import Container from "@/components/container";
import HomeBanner from "@/components/homeBanner";
import { products } from "@/utils/products";
import { truncateText } from "@/utils/truncateText";

export default function Home() {
  return (
    <div className="p-8">
      <Container>
        <div>
          <HomeBanner />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
          {products.map((product: any) => {
            return <div>{truncateText(product.name)} </div>;
          })}
        </div>
      </Container>
    </div>
  );
}
