import search from "../assets/search.svg";
import { useDispatch } from "react-redux";
import { searchByText } from "../redux/blogFilter/action";

const Search = () => {
  const dispatch = useDispatch();

  let time;
  function debounce(fn, delay) {
    return function () {
      clearTimeout(time);
      time = setTimeout(() => {
        fn();
      }, delay);
    };
  }

  // // dispatch(searchByText("asd"));

  return (
    <div class="border mt-6 border-slate-200 flex items-center w-11/12 lg:w-1/2 mx-auto bg-gray-50 h-12 px-5 rounded-lg text-sm ring-emerald-200">
      <input
        onChange={(e) => {
          debounce(function () {
            dispatch(searchByText(e.target.value));
          }, 1000)();
        }}
        class="outline-none border-none bg-gray-50 h-full w-full mr-2"
        type="search"
        name="search"
        placeholder="Search"
      />
      <img class="inline h-6 cursor-pointer" src={search} alt="Search" />
    </div>
  );
};

export default Search;
