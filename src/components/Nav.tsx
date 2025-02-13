import { Link } from "react-router-dom";
export function Nav() {
  return (
    <nav className="flex justify-detween item-center h-[50px] px-5 shadow-md bg-gray-500 text-white">
      <h3 className="font-bold">GitHub Search</h3>

      <span>
        <Link to="/" className="mr-2">
          Home{" "}
        </Link>
        <Link to="/fav">Favourites </Link>
      </span>
    </nav>
  );
}
