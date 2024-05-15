import React, { useReducer } from "react";
import { constants } from "../constants/type";

const RGBSET = () => {
  const initialState = { red: 0, green: 0, blue: 0 };

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case constants.INCREMENT_RED:
        return {
          ...state,
          red: state.red < 255 ? state.red + 1 : state.red,
        };
      case constants.DECREMENT_RED:
        return {
          ...state,
          red: state.red > 0 ? state.red - 1 : state.red,
        };
      case constants.INCREMENT_BLUE:
        return {
          ...state,
          blue: state.blue < 255 ? state.blue + 1 : state.blue,
        };
      case constants.DECREMENT_BLUE:
        return {
          ...state,
          blue: state.blue > 0 ? state.blue - 1 : state.blue,
        };
      case constants.INCREMENT_GREEN:
        return {
          ...state,
          green: state.green < 255 ? state.green + 1 : state.green,
        };
      case constants.DECREMENT_GREEN:
        return {
          ...state,
          green: state.green > 0 ? state.green - 1 : state.green,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const { red, green, blue } = state;
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <div
        className="rounded-2xl m-10 w-[700px] h-[350px] bg-slate-300"
        style={{ backgroundColor: `rgb(${red}, ${green}, ${blue})` }}
      ></div>
      <div className="flex gap-5">
        <div className="shadow-2xl p-4 rounded-lg">
          <p
            className="p-2 text-2xl font-semibold"
            style={{ color: `rgb(${red}, 0, 0)` }}
          >
            red: {red}
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => {
                dispatch({ type: constants.INCREMENT_RED });
              }}
              className="rounded-lg outline-none text-white font-semibold hover:bg-blue-700 border px-4 py-3 bg-blue-600"
            >
              red +1
            </button>
            <button
              onClick={() => {
                dispatch({ type: constants.DECREMENT_RED });
              }}
              className="rounded-lg outline-none text-white font-semibold hover:bg-red-700 border px-4 py-3 bg-red-600"
            >
              red -1
            </button>
          </div>
        </div>
        <div className="shadow-2xl p-4 rounded-lg">
          <p
            className="p-2 text-2xl font-semibold"
            style={{ color: `rgb(0, ${green}, 0)` }}
          >
            green: {green}
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => {
                dispatch({ type: constants.INCREMENT_GREEN });
              }}
              className="rounded-lg outline-none text-white font-semibold hover:bg-blue-700 border px-4 py-3 bg-blue-600"
            >
              green +1
            </button>
            <button
              onClick={() => {
                dispatch({ type: constants.DECREMENT_GREEN });
              }}
              className="rounded-lg outline-none text-white font-semibold hover:bg-red-700 border px-4 py-3 bg-red-600"
            >
              green -1
            </button>
          </div>
        </div>
        <div className="shadow-2xl p-4 rounded-lg">
          <p
            className="p-2 text-2xl font-semibold"
            style={{ color: `rgb(0, 0, ${blue})` }}
          >
            blue: {blue}
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => {
                dispatch({ type: constants.INCREMENT_BLUE });
              }}
              className="rounded-lg outline-none text-white font-semibold hover:bg-blue-700 border px-4 py-3 bg-blue-600"
            >
              blue +1
            </button>
            <button
              onClick={() => {
                dispatch({ type: constants.DECREMENT_BLUE });
              }}
              className="rounded-lg outline-none text-white font-semibold hover:bg-red-700 border px-4 py-3 bg-red-600"
            >
              blue -1
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RGBSET;
