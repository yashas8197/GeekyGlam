import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import { deleteAddress } from "@/utils/addressSlice";
import { useDispatch, useSelector } from "react-redux";
import AddressModel from "@/components/AddressModel/AddressModel";
import { useLocation } from "react-router-dom";
import { fetchOrders } from "@/utils/orderSlice";

const Profile = () => {
  const location = useLocation();

  const { orders, status, error } = useSelector((state) => state.orders);
  const searchParams = new URLSearchParams(location.search);
  const dispatch = useDispatch();
  const addressList = useSelector((state) => state.address.addresses);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [itemToEdit, setItemToEdit] = useState(null);
  const defaultTab = searchParams.get("tab") || "profileInfo";
  const [formData, setFormData] = useState({
    street: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
  });

  useEffect(() => {
    dispatch(fetchOrders());
  }, []);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
    setIsEditing(false);
    setFormData({
      street: "",
      city: "",
      state: "",
      postalCode: "",
      country: "",
    });
  };

  const handleEditBtn = (data) => {
    setIsDialogOpen(true);
    setItemToEdit(data);
  };

  const handleDeleteBtn = (id) => {
    dispatch(deleteAddress(id));
  };

  return (
    <Tabs defaultValue={defaultTab} className="w-3/4 container my-52">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="profileInfo">Profile Information</TabsTrigger>
        <TabsTrigger value="address">Address</TabsTrigger>
        <TabsTrigger value="history">Order History</TabsTrigger>
      </TabsList>

      <TabsContent value="profileInfo">
        <Card>
          <CardHeader>
            <CardDescription className="text-center text-2xl">
              <span>
                <span className="block">Name: John Doe</span>
                <span className="block">Email: Johndoe@gmail.com</span>
              </span>
            </CardDescription>
          </CardHeader>
        </Card>
      </TabsContent>

      <TabsContent value="address">
        <Card>
          <CardHeader className="text-center">
            <CardTitle>Address</CardTitle>
            <CardDescription>
              Manage your addresses here. You can add, edit, or delete
              addresses.
            </CardDescription>
          </CardHeader>
          <div className="py-10 text-center">
            <Button onClick={handleOpenDialog}>
              <Plus />
              Add Address
            </Button>
          </div>
        </Card>
        <ul className="space-y-4">
          {addressList.map((address) => (
            <li key={address.id}>
              <Card className="p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold">{address.street}</h2>
                  <div className="text-gray-600">
                    <p>
                      <strong>City:</strong> {address.city}
                    </p>
                    <p>
                      <strong>State:</strong> {address.state}
                    </p>
                    <p>
                      <strong>Postal Code:</strong> {address.postalCode}
                    </p>
                    <p>
                      <strong>Country:</strong> {address.country}
                    </p>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Button
                      variant="checkoutButton"
                      className="px-4 py-2 rounded-lg"
                      onClick={() => handleEditBtn(address)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="destructive"
                      className="px-4 py-2 rounded-lg"
                      onClick={() => handleDeleteBtn(address.id)}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </Card>
            </li>
          ))}
        </ul>
      </TabsContent>

      <TabsContent value="history">
        <Card className="max-w-4xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle>Order History</CardTitle>
            {orders.length === 0 ? (
              <CardDescription>No order to display</CardDescription>
            ) : (
              <CardDescription>You have {orders.length} orders</CardDescription>
            )}
          </CardHeader>

          {orders.length > 0 && (
            <div className="p-4 space-y-4">
              {orders.map((item) => (
                <div key={item._id} className="border p-4 rounded-lg shadow-sm">
                  <div className="flex space-x-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-24 h-40 object-cover"
                    />
                    <div className="flex-grow">
                      <h2 className="font-semibold text-lg">{item.title}</h2>
                      <p className="text-sm text-gray-500">
                        {item.description}
                      </p>
                      <div className="mt-2">
                        <p>
                          <span className="font-medium">Category: </span>
                          {item.category}
                        </p>
                        <p>
                          <span className="font-medium">Size: </span>
                          {item.size}
                        </p>
                        <p>
                          <span className="font-medium">Quantity: </span>
                          {item.quantity}
                        </p>
                        <p>
                          <span className="font-medium">Price: </span>₹
                          {item.price}
                        </p>
                        <p>
                          <span className="font-medium">Total: </span>₹
                          {item.price * item.quantity}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <p className="text-gray-400 text-sm">
                      Ordered on {new Date(item.createdAt).toLocaleDateString()}
                    </p>
                    <p className="text-sm font-medium text-gray-600">
                      Delivery time: {item.delivery_time} days
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Card>
      </TabsContent>

      <AddressModel
        isDialogOpen={isDialogOpen}
        setIsDialogOpen={setIsDialogOpen}
        addressList={addressList}
        itemToEdit={itemToEdit}
        setIsEditing={setIsEditing}
        isEditing={isEditing}
        setFormData={setFormData}
        formData={formData}
      />
    </Tabs>
  );
};

export default Profile;
