import { useState } from "react";
import useTitle from "../../../hooks/useTitle";

const AddClass = () => {
  useTitle("Add a Class");

  const user = {};
  const name = user?.displayName || "";
  const email = user?.email || "";

  const [formData, setFormData] = useState({
    name,
    email,
    image: "",
    price: "",
    seats: "",
    status: "pending",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="md:w-[70%] mt-10 mb-28 mx-auto shadow-xl p-4 rounded-xl">
      <h1 className="text-2xl font-bold mb-4">Product Details</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="image" className="block mb-2">
            Picture URL
          </label>
          <input
            type="text"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label htmlFor="name" className="block mb-2">
            Instructor Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2">
            Instructor Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label htmlFor="price" className="block mb-2">
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label htmlFor="seats" className="block mb-2">
            Seats
          </label>
          <input
            type="number"
            id="seats"
            name="seats"
            value={formData.seats}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <input className="btn btn-block" type="submit" value="Add Class" />
        </div>
      </form>
    </div>
  );
};

export default AddClass;
