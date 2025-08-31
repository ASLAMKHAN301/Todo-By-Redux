import "./index.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  addValue,
  darkMode,
  removeTodo,
} from "./features/todo/todoSlice";
import sun from "../src/images/icon-sun.svg";
import moon from "../src/images/icon-moon.svg";

export default function App() {
  const { value, todo, isDark } = useSelector((store) => store.todos);

  const dispatch = useDispatch();
  // const [value, setValue] = useState("");
  // const [input, setInput] = useState([]);

  // console.log(value);
  // console.log(todo);
  function handleAddItem(e) {
    e.preventDefault();
    dispatch(addTodo());
  }

  function handleClose(index) {
    dispatch(removeTodo(index));
  }

  function handleDark() {
    dispatch(darkMode());
  }

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("bg-slate-800");
      document.body.classList.remove("bg-gray-200");
    } else {
      document.body.classList.add("bg-gray-200");
      document.body.classList.remove("bg-slate-800");
    }
  }, [isDark]);
  return (
    <div className={`${isDark ? "bg-slate-800" : "bg-gray-200"}`}>
      <div className="flex justify-center items-center mt-20 w-full gap-16 text-white">
        <h1
          className={`font-bold text-3xl uppercase tracking-[0.5em] ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          Todo
        </h1>
        <button onClick={handleDark}>
          {isDark ? (
            <img src={sun} alt="sunImage" className="w-6 h-6" />
          ) : (
            <img src={moon} alt="moonImage" className="w-6 h-6" />
          )}
        </button>
      </div>
      {/* <button onClick={handleDark}>{isDark ? "sun" : "moon"}</button> */}
      <form
        onSubmit={handleAddItem}
        className={`flex justify-center items-center mt-12 gap-3 mb-8`}
      >
        <input
          type="text"
          className={`border border-gray-500 px-2 w-1/4  ${
            isDark
              ? "bg-slate-800 text-white border rounded-none"
              : "bg-gray-200 text-black rounded-lg "
          }`}
          placeholder="add todo item"
          value={value}
          onChange={(e) => dispatch(addValue(e.target.value))}
        />
        <button
          className={`border border-gray-500 px-1 hover:bg-green-500 ${
            isDark ? "text-white rounded-none" : "text-black rounded-lg "
          }`}
          type="submit"
        >
          Add
        </button>
      </form>
      <ul
        className={`text-blue-800 overflow-y-auto w-1/3 mx-auto max-h-64 ${
          isDark
            ? "bg-slate-800 text-white rounded-none"
            : "bg-gray-200 text-black rounded-lg"
        }`}
      >
        {todo.map((todo, i) => (
          <li
            key={i}
            className={`flex text-center px-2 py-1 gap-3 rounded-lg items-center mb-2 mx-auto border border-gray-500 hover:bg-opacity-40 transition-all duration-700
              ${isDark ? "rounded-none" : "rounded-lg"}`}
          >
            {todo}
            <button
              onClick={() => handleClose(i)}
              className="text-sm text-red-400 border border-gray-400 px-3 ml-auto hover:bg-green-300"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
