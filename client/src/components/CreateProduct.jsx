import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import axios from "axios";

function CreateProduct() {
  const formData = {
    name: "",
    category: "",
    price: "",
    sale: "",
    total: "",
    remaining: "",
    images: [],
    image: "",
    size_quantity: {
      "1S": 0,
      "1M": 0,
      "1L": 0,
      "1XL": 0,
      "2XL": 0,
      "3XL": 0,
    },
    size: "",
    quantity: 0,
  };
  const [sizeQuantity, setSizeQuantity] = useState({
    "1S": 0,
    "1M": 0,
    "1L": 0,
    "1XL": 0,
    "2XL": 0,
    "3XL": 0,
  });
  const [img, setImg] = useState([]);
  const cloudName = process.env.VITE_REACT_APP_CLOUDINARY_CLOUD_NAME;
  const preset = process.env.VITE_REACT_APP_CLOUDINARY_UPLOAD_PRESET;

  const handleAddSizeQuantityPair = () => {
    // Use values.size and values.quantity to get the most recent values
    const size = values.size;
    const quantity = values.quantity;

    setSizeQuantity((prevState) => ({
      ...prevState,
      [size]: quantity,
    }));
  };

  const uploadImage = async (file) => {
    const selectedFile = file.target.files[0];
    console.log(selectedFile);
    console.log(file);
    const formData2 = new FormData();
    formData2.append("file", selectedFile);
    formData2.append("upload_preset", preset);

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      {
        method: "POST",
        body: formData2,
      }
    );

    const data = await response.json();
    setImg([...img, data.secure_url]);
    console.log(img);
  };

  const productSchema = Yup.object({
    name: Yup.string().required("Please enter a name."),
    category: Yup.string().required("Please select a category."),
    price: Yup.string().required("Please enter your price."),
    size: Yup.string().required("Please select a size."),
    quantity: Yup.number()
      .positive("Quantity must be positive")
      .integer("Quantity must be a whole number"),
    total: Yup.string().required("Please enter your total."),
    remaining: Yup.string().required("Please enter your remaining."),
    // images: Yup.array()
    //   .of(Yup.string().url("Invalid image URL"))
    //   .required("At least one image is required"),
  });

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: formData,
      validationSchema: productSchema,
      onSubmit: async (values) => {
        values.images = img;
        values.size_quantity = sizeQuantity;
        console.log(values.images.length);
        if (values.images.length == 0) {
          console.log("values.images.length");
          alert("At least upload one Image");
        }

        try {
          const response = await axios.post(
            "http://localhost:5000/admin/products/addProduct",
            values
          );
          console.log(response);
        } catch (error) {
          console.error(error.response.data);
        }
        console.log("Form Values", values);
        console.log("Errors", errors);
        // Submit the form values here
      },
    });

  return (
    <div>
      <form
        className=" bg-white  rounded-lg border-style:none px-8  pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <h1 className="text-center font-bold text-lg text-black ">
          Create New Product
        </h1>

        {/* Name */}

        <div className="mb-4">
          <div className=" flex flex-row  gap-4">
            <div>
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                name="name"
                type="text"
                placeholder="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              {errors.name && touched.name ? (
                <p className="text-red-500 form-error">{errors.name}</p>
              ) : null}
            </div>

            {/* Price */}

            <div>
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="price"
              >
                Price
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="price"
                name="price"
                type="text"
                placeholder="price"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.price}
              />
              {errors.price && touched.price ? (
                <p className="text-red-500 form-error">{errors.price}</p>
              ) : null}
            </div>

            {/* Category */}

            <div>
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="category"
              >
                Category
              </label>
              <select
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="category"
                name="category"
                value={values.category}
                onChange={handleChange}
              >
                <option value="">Select a category</option>
                <option value="Men">Men</option>
                <option value="Women">Women</option>
                <option value="Children">Children</option>
                <option value="Home">Home</option>
              </select>
            </div>
          </div>
        </div>

        {/* Total Items */}

        <div className="mb-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="total"
              >
                Total Items
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="total"
                name="total"
                type="text"
                placeholder="0"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.total}
              />
              {errors.total && touched.total ? (
                <p className="text-red-500 form-error">{errors.total}</p>
              ) : null}
            </div>

            {/* Remaining Items */}

            <div>
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="remaining"
              >
                Remaining
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="remaining"
                name="remaining"
                type="text"
                placeholder="0"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.remaining}
              />
              {errors.remaining && touched.remaining ? (
                <p className="text-red-500 form-error">{errors.remaining}</p>
              ) : null}
            </div>
          </div>
        </div>

        {/* Sale */}

        <div className="mb-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="sale"
              >
                Sale (%)
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="sale"
                name="sale"
                type="text"
                placeholder="0"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.sale}
              />
              {errors.sale && touched.sale ? (
                <p className="text-red-500 form-error">{errors.sale}</p>
              ) : null}
            </div>

            {/* Images upload */}

            <div>
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="images"
              >
                Images for product
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="image"
                name="image"
                type="file"
                placeholder="image"
                onChange={uploadImage}
                onBlur={handleBlur}
                value={values.image}
              />
              <div className="flex flex-row">
                {img &&
                  img.map((url, index) => (
                    <img
                      key={index}
                      src={url}
                      alt=""
                      className="w-10 h-10 ml-3 mt-2"
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>

        {/* size */}

        <div className="mb-4">
          <div className=" flex flex-row  gap-4">
            <div>
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="size"
              >
                Size
              </label>
              <select
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="size"
                name="size"
                value={values.size}
                onChange={handleChange}
              >
                <option value="">Select a size</option>
                <option value="1S">S</option>
                <option value="1M">M</option>
                <option value="1L">L</option>
                <option value="1XL">XL</option>
                <option value="2XL">2XL</option>
                <option value="3XL">3XL</option>
              </select>
            </div>

            {/* Quantity */}

            <div>
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="quantity"
              >
                Quantity
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="quantity"
                name="quantity"
                type="text"
                placeholder="Quantity"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.quantity}
              />
              {errors.quantity && touched.quantity ? (
                <p className="text-red-500 form-error">{errors.quantity}</p>
              ) : null}
            </div>

            <button
              type="button"
              className="bg-black text-white px-2 py-1 rounded h-10 mt-7"
              onClick={() => handleAddSizeQuantityPair()}
            >
              Add
            </button>
          </div>
          <ul className="flex flex-row">
            {Object.entries(sizeQuantity).map(([size, quantity], index) => {
              if (quantity > 0) {
                return (
                  <li key={index} className="text-black">
                    {`${size}: ${quantity}`}
                  </li>
                );
              }
              return null;
            })}
          </ul>
        </div>

        {/* Form Submission Button */}

        <div className="flex items-center justify-center">
          <button
            className="hover:bg-green-700 shadow-md rounded-full px-6 py-3 font-semibold text-white bg-button"
            type="submit"
          >
            Add product
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateProduct;
