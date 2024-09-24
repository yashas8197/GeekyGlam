import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import ProductInfoSection from "../ProductInfoSection/ProductInfoSection";

const ProductDeatilModal = ({ isDialogOpen, setIsDialogOpen, product }) => {
  const fashion = false;

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogContent
        aria-describedby="product-description"
        className="md:max-w-md lg:max-w-4xl p-4 md:p-6 max-h-screen overflow-y-auto"
      >
        <DialogHeader>
          <DialogTitle>{product.title}</DialogTitle>
        </DialogHeader>
        <ProductInfoSection
          product={product}
          fashion={fashion}
          isModal={true}
        />
      </DialogContent>
    </Dialog>
  );
};

export default ProductDeatilModal;
