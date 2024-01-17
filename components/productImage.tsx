import {
  CartProductType,
  SelectedImgType,
} from "@/app/product/[productId]/productDetails";

interface ProductImageProps {
  cartProduct: CartProductType;
  product: any;
  handleColorSelect: (value: SelectedImgType) => void;
}
const ProductImage: React.FC<ProductImageProps> = ({
  cartProduct,
  product,
  handleColorSelect,
}) => {
  return <div></div>;
};

export default ProductImage;
