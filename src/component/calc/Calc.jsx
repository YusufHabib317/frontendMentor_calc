import "./calc.css";
import { useState } from "react";

const Calc = () => {
  const [result, setResult] = useState("");
  //   const [themeNum, setThemeNum] = useState({
  //     themeOne: "theme",
  //     themeTwo: "theme-light",
  //     themeThree: "theme-purple ",
  //   });
  const [themeNumber, setThemeNumber] = useState(0);
  const toggleTheme = () => {
    setThemeNumber((prev) => prev + 1);
    if (themeNumber > 1) setThemeNumber(0);
  };
  console.log(themeNumber);
  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const handlereset = () => {
    setResult("");
  };

  const handleEq = () => {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult("err");
    }
  };
  const handleDel = () => {
    setResult(result.slice(0, -1));
  };
  return (
    <div
      className={`relative w-full h-screen ${
        themeNumber === 1
          ? "theme-light"
          : themeNumber === 2
          ? "theme-purple"
          : ""
      }`}
    >
      <div className="absolute w-full h-full bg-skin-base flex justify-center items-center">
        <div className="min-w-[20rem] flex flex-col justify-center items-center">
          {/* head */}
          <div className="bg-transparent flex justify-between items-center min-w-[25rem]">
            <p className="font-bold text-skin-numb_show text-[1.3rem]">calc</p>
            <div className="text-[0.6rem] flex flex-row justify-between items-center space-x-5 font-bold">
              <p className="text-skin-numb_show text-[0.5rem] theme">THEME</p>
              <div className="flex flex-col justify-center items-center space-y-2">
                <div className="text-skin-numb_show flex flex-row justify-center items-center space-x-3">
                  <p>1</p>
                  <p>2</p>
                  <p>3</p>
                </div>
                <div
                  className="relative bg-skin-calc w-14 h-5 rounded-3xl wrapCircle cursor-pointer"
                  onClick={toggleTheme}
                >
                  <div
                    className={`absolute w-3 h-3 rounded-full bg-skin-eq top-0 cursor-pointer
                    ${
                      themeNumber === 0
                        ? "l_0"
                        : themeNumber === 1
                        ? "l_1"
                        : "l_2"
                    }
                    `}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          {/* result */}
          <div className="min-w-[25rem] min-h-[5rem]  my-5">
            <input
              className="w-full h-full bg-skin-show text-skin-numb_show rounded-lg font-bold p-5 text-[26px]"
              value={result}
              placeholder="0"
            />
          </div>
          {/* button */}
          <div className="p-5 container_calculatot min-w-[25rem] bg-skin-calc rounded-lg">
            <button
              onClick={handleClick}
              name="7"
              className="bg-skin-button text-skin-numb text-[30px] hover:bg-opacity-80 shadow-l shadow-skin-numb"
            >
              7
            </button>
            <button
              onClick={handleClick}
              name="8"
              className="bg-skin-button text-skin-numb text-[30px] hover:bg-opacity-80 shadow-l shadow-skin-numb"
            >
              8
            </button>
            <button
              onClick={handleClick}
              name="9"
              className="bg-skin-button text-skin-numb text-[30px] hover:bg-opacity-80 shadow-l shadow-skin-numb"
            >
              9
            </button>
            <button
              onClick={handleDel}
              className="bg-skin-del_button text-skin-del_reset text-[20px] hover:bg-opacity-80 shadow-l shadow-skin-numb"
            >
              DEL
            </button>
            <button
              onClick={handleClick}
              name="4"
              className="bg-skin-button text-skin-numb text-[25px]  hover:bg-opacity-80 shadow-l shadow-skin-numb"
            >
              4
            </button>
            <button
              onClick={handleClick}
              name="5"
              className="bg-skin-button text-skin-numb text-[25px]  hover:bg-opacity-80 shadow-l shadow-skin-numb"
            >
              5
            </button>
            <button
              onClick={handleClick}
              name="6"
              className="bg-skin-button text-skin-numb text-[25px]  hover:bg-opacity-80 shadow-l shadow-skin-numb"
            >
              6
            </button>
            <button
              onClick={handleClick}
              name="+"
              className="bg-skin-button text-skin-numb text-[25px] hover:bg-opacity-80 shadow-l shadow-skin-numb"
            >
              +
            </button>
            <button
              onClick={handleClick}
              name="1"
              className="bg-skin-button text-skin-numb text-[25px]  hover:bg-opacity-80 shadow-l shadow-skin-numb"
            >
              1
            </button>
            <button
              onClick={handleClick}
              name="2"
              className="bg-skin-button text-skin-numb text-[25px]  hover:bg-opacity-80 shadow-l shadow-skin-numb"
            >
              2
            </button>
            <button
              onClick={handleClick}
              name="3"
              className="bg-skin-button text-skin-numb text-[25px] hover:bg-opacity-80 shadow-l shadow-skin-numb"
            >
              3
            </button>
            <button
              onClick={handleClick}
              name="-"
              className="bg-skin-button text-skin-numb text-[25px] hover:bg-opacity-80 shadow-l shadow-skin-numb"
            >
              &ndash;
            </button>
            <button
              onClick={handleClick}
              name="."
              className="bg-skin-button text-skin-numb text-[25px]  hover:bg-opacity-80 shadow-l shadow-skin-numb"
            >
              .
            </button>
            <button
              onClick={handleClick}
              name="0"
              className="bg-skin-button text-skin-numb text-[25px]  hover:bg-opacity-80 shadow-l shadow-skin-numb"
            >
              0
            </button>
            <button
              onClick={handleClick}
              name="/"
              className="bg-skin-button text-skin-numb text-[25px]  hover:bg-opacity-80 shadow-l shadow-skin-numb"
            >
              &divide;
            </button>
            <button
              onClick={handleClick}
              name="*"
              className="bg-skin-button text-skin-numb text-[25px] hover:bg-opacity-80 shadow-l shadow-skin-numb"
            >
              &times;
            </button>
            <button
              onClick={handlereset}
              id="reset"
              className="bg-skin-del_button text-skin-del_reset text-[20px] tracking-wide hover:bg-opacity-80 shadow-l shadow-skin-numb"
            >
              RESET
            </button>
            <button
              onClick={handleEq}
              id="eq"
              className="bg-skin-eq text-skin-eq text-[20px] hover:bg-opacity-80 shadow-l shadow-skin-eq"
            >
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calc;
