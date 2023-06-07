// import { useState } from "react";
import { useContext } from "react";
import useTitle from "../../../hooks/useTitle";
import { useForm } from "react-hook-form";
import { AuthContent } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";

const AddClass = () => {
  useTitle("Add a Class");

  const { user } = useContext(AuthContent);
  const name = user?.displayName || "";
  const email = user?.email || "";

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    data.price = parseFloat(parseFloat(data.price).toFixed(2));
    data.seats = parseInt(data.seats);
    data.status = "pending";

    // create a class
    fetch("http://localhost:5000/classes", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.insertedId) {
          reset();
          Swal.fire("Good job!", "Class added successfully", "success");
        }
      });
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
          <label htmlFor="instructorName" className="block mb-2">
            Instructor Name
          </label>
          <input
            type="text"
            id="instructorName"
            defaultValue={name}
            readOnly
            {...register("instructorName", { required: true })}
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label htmlFor="instructorEmail" className="block mb-2">
            Instructor Email
          </label>
          <input
            type="email"
            id="instructorEmail"
            readOnly
            defaultValue={email}
            {...register("instructorEmail", { required: true })}
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
