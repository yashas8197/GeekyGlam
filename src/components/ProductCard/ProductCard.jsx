import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div>
      <Card
        onClick={() => navigate(`/product-details/${product._id}`)}
        key={product._id}
        className="w-[18rem] cursor-pointer hover:shadow-xl "
      >
        <CardContent>
          <div className="relative overflow-hidden h-[20rem]">
            <img
              src={product.image}
              className="object-cover w-full h-full absolute bottom-0 pt-5 rounded-lg"
            />
          </div>
        </CardContent>
        <CardHeader>
          <CardTitle>{product.title}</CardTitle>
          <CardDescription>
            {product.description.substring(0, 30) + "..."}
          </CardDescription>
          <CardDescription>₹ {product.price}</CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
};

export default ProductCard;
