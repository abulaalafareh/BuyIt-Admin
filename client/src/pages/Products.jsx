import CreateProduct from "../components/CreateProduct";

function Products() {
  return (
    <div className=" relative ml-52 text-white">
      <div className="flex flex-row mt-20 ml-52  ">
        <button className="bg-blue-700 rounded-sm p-2 ml-2">
          Create Product
        </button>
        <button className="bg-blue-700 rounded-sm p-2 ml-2">
          Create Product
        </button>
        <button className="bg-blue-700 rounded-sm p-2 ml-2">
          Create Product
        </button>
        <button className="bg-blue-700 rounded-sm p-2 ml-2">
          Create Product
        </button>
      </div>
      <div className="w-2/3 ml-32  bg-blue-300 rounded-xl  ">
        <CreateProduct />
      </div>
    </div>
  );
}

export default Products;
