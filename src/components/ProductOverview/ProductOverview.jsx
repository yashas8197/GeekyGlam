import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { reviewPost } from "@/utils/productDetailsSlice";

const tableProducts = [
  {
    id: "CLO123",
    name: "Classic Blue Jeans",
    size: "32",
    weight: "500 g",
    price: "₹6,299",
  },
  {
    id: "CLO124",
    name: "Casual White Shirt",
    size: "M",
    weight: "250 g",
    price: "₹1,299",
  },
  {
    id: "CLO125",
    name: "Leather Jacket",
    size: "L",
    weight: "800 g",
    price: "₹11,999",
  },
  {
    id: "CLO126",
    name: "Red Summer Dress",
    size: "S",
    weight: "200 g",
    price: "₹2,999",
  },
  {
    id: "CLO127",
    name: "Black Sweatpants",
    size: "L",
    weight: "400 g",
    price: "₹1,999",
  },
];

const ProductOverview = ({ product }) => {
  const [formData, setFormData] = useState({
    name: "",
    ratings: 0,
    reviews: "",
    avatarPhoto: "https://via.placeholder.com/150?text=Avatar",
  });
  const dispatch = useDispatch();

  if (!product) return;

  const getStars = (rating) => {
    const numberOfStars = Math.floor(rating);
    const stars = Array.from({ length: numberOfStars }).map((_, index) => (
      <span key={index} className="text-lg">
        ⭐️
      </span>
    ));
    return stars;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(reviewPost({ review: formData, productId: product._id }));
    setFormData({
      name: "",
      ratings: 0,
      reviews: "",
      avatarPhoto: "https://via.placeholder.com/150?text=Avatar",
    });
  };
  return (
    <div>
      <Tabs defaultValue="description" className="w-full">
        <TabsList className="w-1/2 m-0 py-10">
          <TabsTrigger value="description">DESCRIPTION</TabsTrigger>
          <TabsTrigger value="info">ADDITIONAL INFORMATION</TabsTrigger>
          <TabsTrigger value="reviews">REVIEWS</TabsTrigger>
        </TabsList>
        <hr className="m-0" />
        <TabsContent
          value="description"
          className="w-full text-gray-400 text-sm"
        >
          <p className="py-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
            sint, deserunt, necessitatibus optio autem et voluptatibus maxime
            quam nisi culpa neque officia recusandae, cupiditate praesentium
            voluptate quae iusto nobis error blanditiis omnis in tempore porro
            aut? Expedita odio est perferendis maiores nostrum recusandae
            reiciendis dicta quidem facilis esse. Consequatur officia architecto
            velit reiciendis id quas similique dignissimos eveniet.
          </p>
          <p className="py-3">
            Porro eveniet vero aspernatur reprehenderit esse molestiae obcaecati
            corrupti necessitatibus quis labore quasi sint sit et, ratione odit
            officiis adipisci maxime, inventore iure? Quas magni, blanditiis
            asperiores laborum facere, exercitationem nostrum eligendi sapiente
            incidunt nam sit rem saepe sunt, ex impedit illum! corrupti
            necessitatibus quis labore quasi sint sit et, ratione odit officiis
            adipisci maxime, inventore iure? Quas magni, blanditiis asperiores
            laborum facere, exercitationem nostrum eligendi sapiente incidunt
            nam sit rem saepe sunt, ex impedit illum!
          </p>
        </TabsContent>
        <TabsContent value="info">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Product ID</TableHead>
                <TableHead>Product Name</TableHead>
                <TableHead>Size</TableHead>
                <TableHead>Weight</TableHead>
                <TableHead className="text-right">Price</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tableProducts.map((product) => (
                <TableRow key={product.id}>
                  <TableCell className="font-medium">{product.id}</TableCell>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.size}</TableCell>
                  <TableCell>{product.weight}</TableCell>
                  <TableCell className="text-right">{product.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>
        <TabsContent value="reviews" className="w-3/4">
          <div className="container py-6">
            {product?.reviewsList?.length > 0 ? (
              product.reviewsList.map((review, i) => (
                <div key={i} className="flex items-center justify-around">
                  <div className="w-1/6">
                    <img
                      className="rounded-full"
                      src={review.avatarPhoto}
                      alt="avatar"
                      loading="lazy"
                    />
                    <p className="mx-6 text-gray-400 py-4">{review.date}</p>
                  </div>
                  <div className="w-3/4">
                    <h4 className="font-bold">{review.name}</h4>
                    <span>{getStars(review.ratings)}</span>

                    <p className="text-gray-400 py-4">{review.reviews}</p>

                    <hr />
                  </div>
                </div>
              ))
            ) : (
              <p>No reviews yet.</p>
            )}
            <div className="my-9">
              <h1 className="text-lg font-bold">LEAVE A REVIEW</h1>

              <form className="py-5" onSubmit={handleOnSubmit}>
                <div className="my-3 flex justify-between">
                  <label className="text-gray-400 w-3/4" htmlFor="yourName">
                    YOUR NAME *
                    <div>
                      <input
                        className="border border-gray-400 text-black px-2 w-3/4 py-2"
                        placeholder="   Enter Your Name"
                        id="yourName"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                  </label>

                  <div className="w-1/4">
                    <select
                      name="ratings"
                      className="border border-black"
                      value={formData.ratings}
                      onChange={handleChange}
                    >
                      <option value={5}>★★★★★ (5/5)</option>
                      <option value={4}>★★★★☆ (4/5)</option>
                      <option value={3}>★★★☆☆ (3/5)</option>
                      <option value={2}>★★☆☆☆ (2/5)</option>
                      <option value={1}>★☆☆☆☆ (1/5)</option>
                    </select>
                  </div>
                </div>

                {/*  <div className="my-7">
                  <label className="text-gray-400" htmlFor="yourEmail">
                    YOUR EMAIL *
                  </label>
                  <div>
                    <input
                      className="border border-gray-400 w-3/4 py-2"
                      placeholder="   Enter Your Email"
                      id="yourEmail"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div> */}

                <div className="my-7">
                  <label className="text-gray-400" htmlFor="review">
                    REVIEW TEXT *
                  </label>
                  <div>
                    <textarea
                      name="reviews"
                      className="border border-gray-400 w-3/4 py-2 px-2"
                      placeholder="   Enter Your review"
                      id="review"
                      type="text"
                      rows={4}
                      value={formData.reviews}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  className="border border-black py-2 px-4 hover:text-white hover:bg-slate-900"
                >
                  POST REVIEW
                </button>
              </form>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProductOverview;
