import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <nav
      style={{ height: "100vh" }}
      className="absolute w-52 bg-blue-700 shadow-sm shadow-black flex flex-col rounded-xl"
    >
      <Link className="nav-link active m-7 " to="/login">
        <button
          className="hover:bg-green-700 shadow-md rounded-full px-6 py-3 font-semibold text-white bg-button"
          type="click"
        >
          Dashboard
        </button>
      </Link>

      <Link className="nav-link active ml-7" to="/login">
        <button
          className="hover:bg-green-700 shadow-md rounded-full px-6 py-3 font-semibold text-white bg-button"
          type="click"
        >
          Products
        </button>
      </Link>

      <Link className="nav-link active ml-7 mt-7 " to="/login">
        <button
          className="hover:bg-green-700 shadow-md rounded-full px-6 py-3 font-semibold text-white bg-button"
          type="click"
        >
          Users
        </button>
      </Link>
    </nav>
  );
}

export default Sidebar;
