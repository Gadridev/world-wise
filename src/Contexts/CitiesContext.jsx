import { useEffect, createContext, useContext, useReducer } from "react";
const CitiesContext = createContext();
const initialState = {
  cities: [],
  isLoading: false,
  CurrentCity: {},
  error: "",
};
function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };
    case "cities/loaded":
      return { ...state, isLoading: false, cities: action.payload };
    case "city/getCity":
      return { ...state, isLoading: false, CurrentCity: action.payload };
    case "cities/created":
      return {
        ...state,
        isLoading: false,
        cities: [...state.cities, action.payload],
        currentCity: action.payload,
      };
    case "cities/deleted":
      return {
        ...state,
        isLoading: false,
        cities: state.cities.filter((city) => city.id !== action.payload),
      };
    case "rejected":
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
}

function CitiesProvider({ children }) {
  const [{ cities, isLoading, CurrentCity }, dispatch] = useReducer(
    reducer,
    initialState
  );
  console.log(CurrentCity);

  // const [cities, SetCities] = useState([]);
  // const [isLoading, Setisloading] = useState(false);
  // const [CurrentCity, SetCurrentCity] = useState({});
  useEffect(function () {
    async function fetchCities() {
      dispatch({ type: "loading" });
      try {
        const res = await fetch(`http://localhost:8000/cities`);
        const data = await res.json();
        dispatch({ type: "cities/loaded", payload: data });
      } catch {
        dispatch({
          type: "rejected",
          payload: "there is Error fetching cities",
        });
      }
    }
    fetchCities();
  }, []);
  async function getCity(id) {
    console.log(id, CurrentCity.id);
    if (Number(id) === CurrentCity.id) return;
    try {
      dispatch({ type: "loading" });
      const res = await fetch(`http://localhost:8000/cities/${id}`);
      const data = await res.json();
      dispatch({ type: "city/getCity", payload: data });
    } catch {
      dispatch({ type: "rejected", payload: "there is Error fetching cities" });
    }
  }
  async function CreateCity(newCity) {
    dispatch({ type: "loading" });
    try {
      const res = await fetch(`http://localhost:8000/cities`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: { "content-type": "application/json" },
      });
      const data = await res.json();
      dispatch({ type: "cities/created", payload: data });
      // SetCities((cities) => [...cities, data]);
    } catch {
      dispatch({ type: "rejected", payload: "there is Error fetching cities" });
    }
  }
  async function DeleteCities(id) {
    dispatch({ type: "loading" });
    try {
      await fetch(`http://localhost:8000/cities/${id}`, {
        method: "DELETE",
      });
      dispatch({ type: "cities/deleted", payload: id });
    } catch {
      dispatch({ type: "rejected", payload: "there is Error Deleting cities" });
    }
  }
  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        CurrentCity,
        getCity,
        CreateCity,
        DeleteCities,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}
function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined) {
    throw new Error("CitiesContext was used outside of the CitiesProvider");
  }
  return context;
}
export { CitiesProvider, useCities };
