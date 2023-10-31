import { useFormik } from "formik";
import { useState, useEffect, useRef } from "react";
import * as Yup from "yup";

function CreateProduct() {
  const formData = {
    name: "",
    category: "",
    price: "",
    sale: "",
    sizeCount: {},
    total: "",
    remaining: "",
  };

  // category selection
  const [selectedCategory, setSelectedCategory] = useState(""); // State to hold the selected category
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const productSchema = Yup.object({
    name: Yup.string().required("Please enter a name."),
    category: Yup.string().required("Please select a category."),
    price: Yup.string().required("Please enter your price."),
    total: Yup.string().required("Please enter your total."),
    sale: Yup.number("Enter a number below between 0-100"),
  });

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: formData,
      validationSchema: productSchema,
      onSubmit: async (values) => {
        console.log(values);
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
                value={selectedCategory}
                onChange={handleCategoryChange}
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
                placeholder="total"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.total}
              />
              {errors.total && touched.total ? (
                <p className="text-red-500 form-error">{errors.total}</p>
              ) : null}
            </div>

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
                placeholder="remaining"
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

        <div className="mb-4">
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
            placeholder="0%"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.sale}
          />
          {errors.sale && touched.sale ? (
            <p className="text-red-500 form-error">{errors.sale}</p>
          ) : null}
        </div>

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
