import { createContext, useEffect, useReducer } from "react";

const INIT_STATE = {
  city: undefined,
  dates: JSON.parse(localStorage.getItem("dates")) || [],
  option: JSON.parse(localStorage.getItem("options")) || {
    adult: undefined,
    children: undefined,
    room: undefined,
  },
};
export const SearchContext = createContext(INIT_STATE);

const SearchReducer = (state, action) => {
  switch (action.type) {
    case "NEW_SEARCH":
      return action.payload;
    case "RESET_SEARCH":
      return INIT_STATE;
    default:
      return state;
  }
};

export const SearchContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SearchReducer, INIT_STATE);

  useEffect(() => {
    localStorage.setItem("dates", JSON.stringify(state.dates));
  }, [state.dates]);

  useEffect(() => {
    localStorage.setItem("option", JSON.stringify(state.option));
  }, [state.option]);

  return (
    <SearchContext.Provider
      value={{
        city: state.city,
        dates: state.dates,
        option: state.option,
        dispatch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
