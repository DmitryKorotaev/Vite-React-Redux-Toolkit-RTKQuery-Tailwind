import { useEffect, useState } from "react";
import { useSearchUsersQuery } from "../store/github/github.api";
import { useDebounce } from "../hooks/debounce";

export function HomePage() {
  const [search, setSearch] = useState("");
  const debounsed = useDebounce(search);
  const { isError } = useSearchUsersQuery("vladilen");
  // console.log(data, "data");
  useEffect(() => {
    console.log(search, "Search");
  }, [debounsed]);

  return (
    <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
      {isError && (
        <p className="text-center text-red-600">Something went wrong...</p>
      )}
      <div className="relative w-[560]">
        <input
          type="text"
          className="border py-2 px-4 w-full h-[42px] mb-2"
          placeholder="Search for Github username..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="absolute top-[42px] left-0 right-0 max-h-[200px] shadow-md bg-white">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
          quidem.
        </div>
      </div>
    </div>
  );
}
