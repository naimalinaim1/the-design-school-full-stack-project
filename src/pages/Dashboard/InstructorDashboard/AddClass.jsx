// import { useState } from "react";
import useTitle from "../../../hooks/useTitle";
import { useForm } from "react-hook-form";

const AddClass = () => {
  useTitle("Add a Class");

  const user = {};
  const name = user?.displayName || "";
  const email = user?.email || "";
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    data.price = parseFloat(parseFloat(data.price).toFixed(2));
    data.seats = parseInt(data.seats);
    console.log(data);
  };

  return (
    <div className="md:w-[70%] mt-10 mb-28 mx-auto shadow-xl p-12 rounded-xl">
      <h1 className="text-2xl font-bold mb-4">Product Details</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="className" className="block mb-2">
            Class Name
          </label>
          <input
            type="text"
            id="className"
            {...register("className", { required: true })}
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label htmlFor="image" className="block mb-2">
            Picture URL
          </label>
          <input
            type="text"
            id="image"
            {...register("image", { required: true })}
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
            defaultValue={name}
            readOnly
            {...register("name", { required: true })}
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
            defaultValue={email}
            readOnly
            {...register("email", { required: true })}
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
            step="any"
            {...register("price", { required: true })}
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
            {...register("seats", { required: true })}
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
