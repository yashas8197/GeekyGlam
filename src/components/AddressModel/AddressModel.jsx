import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addAddress, updateAddress } from "@/utils/addressSlice";

const AddressModel = ({
  isDialogOpen,
  setIsDialogOpen,
  addressList,
  setIsEditing,
  isEditing,
  itemToEdit,
  formData,
  setFormData,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (itemToEdit) {
      setFormData(itemToEdit);
      setIsEditing(true);
    } else {
      setIsEditing(false);

      setFormData({
        street: "",
        city: "",
        state: "",
        postalCode: "",
        country: "",
      });
    }
  }, [itemToEdit]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const updatedFormData = { ...formData };
    setIsDialogOpen(false);
    if (isEditing) {
      setIsEditing(true);
      dispatch(updateAddress(updatedFormData));
    } else {
      updatedFormData.id = addressList.length + 1;
      dispatch(addAddress(updatedFormData));
    }
    setFormData({
      street: "",
      city: "",
      state: "",
      postalCode: "",
      country: "",
    });
  };
  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Address</DialogTitle>
          <DialogDescription>
            Fill in the details to add a new address.
          </DialogDescription>
        </DialogHeader>
        <form className="space-y-4" onSubmit={(e) => handleOnSubmit(e)}>
          <input
            type="text"
            name="street"
            placeholder="Street"
            aria-label="Street"
            className="input w-full"
            value={formData.street}
            onChange={handleOnChange}
            required
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            aria-label="City"
            className="input w-full"
            value={formData.city}
            onChange={handleOnChange}
            required
          />
          <input
            type="text"
            name="state"
            placeholder="State"
            aria-label="State"
            className="input w-full"
            value={formData.state}
            onChange={handleOnChange}
            required
          />
          <input
            type="number"
            name="postalCode"
            placeholder="Postal Code"
            aria-label="Postal Code"
            className="input w-full"
            value={formData.postalCode}
            onChange={handleOnChange}
            required
          />
          <input
            type="text"
            name="country"
            placeholder="Country"
            aria-label="Country"
            className="input w-full"
            value={formData.country}
            onChange={handleOnChange}
            required
          />
          <div className="flex justify-end space-x-2">
            <Button
              type="button"
              onClick={() => setIsDialogOpen(false)}
              variant="outline"
            >
              Cancel
            </Button>
            <Button type="submit">{isEditing ? "Edit" : "Add"}</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddressModel;
