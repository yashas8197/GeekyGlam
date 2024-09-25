import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addInfo } from "@/utils/checkoutSlice";
import { Link } from "react-router-dom";

const BillingAddressForm = ({ goToNextTab }) => {
  const addresses = useSelector((state) => state.address.addresses);
  const [formData, setFormData] = useState({
    fullName: "",
    street: "",
    zip: "",
    phoneNumber: "",
    email: "",
    city: "",
    state: "",
  });
  const dispatch = useDispatch();

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const validate = () => {
    let formErrors = {};

    if (!formData.fullName) formErrors.fullName = "Full name is required";
    if (!formData.street) formErrors.street = "Street is required";
    if (!formData.zip) formErrors.zip = "ZIP code is required";

    if (!formData.phoneNumber) {
      formErrors.phoneNumber = "Phone number is required";
    }
    if (formData.phoneNumber.length < 8 || formData.phoneNumber.length > 15) {
      formErrors.phoneNumber = "Phone number must be between 8 and 15 digits";
    }
    if (!formData.email) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Email address is invalid";
    }
    if (!formData.city) formErrors.city = "City is required";
    if (!formData.state) formErrors.state = "State is required";

    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      // Form is valid, submit data
      dispatch(addInfo(formData));
      setErrors({});
      goToNextTab();
      // console.log("Form Data Submitted: ", formData);
    } else {
      setErrors(formErrors);
    }
  };

  const handleUseAddress = (e) => {
    const { checked } = e.target;

    if (checked) {
      const address = addresses[0];
      setFormData({
        fullName: address.fullName || "",
        street: address.street || "",
        zip: address.postalCode || "",
        phoneNumber: address.phoneNumber || "",
        email: address.email || "",
        city: address.city || "",
        state: address.state || "",
      });
    } else {
      setFormData({
        fullName: "",
        street: "",
        zip: "",
        phoneNumber: "",
        email: "",
        city: "",
        state: "",
      });
    }
  };

  return (
    <div className="py-10">
      <p
        className="uppercase font-semibold text-sm container tracking-widest py-4"
        style={{ backgroundColor: "#F8F9FB" }}
      >
        invoice address
      </p>
      <form className="py-5" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 m-4 sm:grid-cols-2 gap-3">
          <div className="my-3">
            <div>
              <label
                className="text-gray-400 font-light text-sm w-full"
                htmlFor="fullName"
              >
                FULL NAME *
                <div>
                  <input
                    className="border border-gray-400 text-black px-2 w-full py-2"
                    placeholder="Joe Black"
                    id="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                  {errors.fullName && (
                    <p className="text-red-500">{errors.fullName}</p>
                  )}
                </div>
              </label>
            </div>

            <div className="my-3">
              <label
                className="text-gray-400 font-light text-sm w-full"
                htmlFor="street"
              >
                STREET *
                <div>
                  <input
                    className="border border-gray-400 text-black px-2 w-full py-2"
                    placeholder="123 Main St"
                    id="street"
                    type="text"
                    value={formData.street}
                    onChange={handleChange}
                    required
                  />
                  {errors.street && (
                    <p className="text-red-500">{errors.street}</p>
                  )}
                </div>
              </label>
            </div>

            <div className="my-3">
              <label
                className="text-gray-400 font-light text-sm w-full"
                htmlFor="zip"
              >
                ZIP CODE *
                <div>
                  <input
                    className="border border-gray-400 text-black px-2 w-full py-2"
                    placeholder="Postal Code"
                    id="zip"
                    type="number"
                    value={formData.zip}
                    onChange={handleChange}
                    required
                  />
                  {errors.zip && <p className="text-red-500">{errors.zip}</p>}
                </div>
              </label>
            </div>

            <div className="sm:my-3">
              <label
                className="text-gray-400 w-full font-light text-sm"
                htmlFor="phoneNumber"
              >
                PHONE NUMBER *
                <div>
                  <input
                    className="border border-gray-400 text-black px-2 w-full py-2"
                    placeholder="Phone Number"
                    id="phoneNumber"
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                  />
                  {errors.phoneNumber && (
                    <p className="text-red-500">{errors.phoneNumber}</p>
                  )}
                </div>
              </label>
            </div>

            <input
              onChange={handleUseAddress}
              type="checkbox"
              id="useExistingAddress"
            />
            <label htmlFor="useExistingAddress" className="text-sm mx-2">
              Use existing address
            </label>
          </div>

          <div>
            <div className="sm:my-3">
              <label
                className="text-gray-400 w-full font-light text-sm"
                htmlFor="email"
              >
                EMAIL ADDRESS *
                <div>
                  <input
                    className="border border-gray-400 text-black px-2 w-full py-2"
                    placeholder="joe.black@gmail.com"
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  {errors.email && (
                    <p className="text-red-500">{errors.email}</p>
                  )}
                </div>
              </label>
            </div>

            <div className="my-3">
              <label
                className="text-gray-400 w-full font-light text-sm"
                htmlFor="city"
              >
                CITY *
                <div>
                  <input
                    className="border border-gray-400 text-black px-2 w-full py-2"
                    placeholder="City"
                    id="city"
                    type="text"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />
                  {errors.city && <p className="text-red-500">{errors.city}</p>}
                </div>
              </label>
            </div>

            <div className="my-3">
              <label
                className="text-gray-400 w-full font-light text-sm"
                htmlFor="state"
              >
                STATE *
                <div>
                  <input
                    className="border border-gray-400 text-black px-2 w-full py-2"
                    placeholder="State"
                    id="state"
                    type="text"
                    value={formData.state}
                    onChange={handleChange}
                    required
                  />
                  {errors.state && (
                    <p className="text-red-500">{errors.state}</p>
                  )}
                </div>
              </label>
            </div>
          </div>
        </div>
        <div className="container flex flex-col sm:flex-row sm:justify-between items-center">
          <Link
            to="/cartlist"
            className="flex items-center hover:underline text-gray-500 float-left mt-4  cursor-pointer text-xs tracking-widest font-light uppercase py-2"
          >
            <i className="bi bi-chevron-left"></i>back
          </Link>
          <button
            className="tracking-widest text-xs uppercase py-3 px-14 font-semibold bg-slate-800  text-white border border-none hover:opacity-80"
            type="submit"
          >
            Choose Delivery Method
            <span className="text-xs">
              <i className="bi bi-chevron-right"></i>
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default BillingAddressForm;
