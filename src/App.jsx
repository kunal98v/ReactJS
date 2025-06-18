import { useEffect, useState } from "react";
import { Card } from "./components/Card";
import { Header } from "./components/Header";
import Loader from "./components/Loader";

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const fetchApi = async () => {
      const res = await fetch("https://restaurant-backend-xp1e.onrender.com/api/restaurants");
      const data = await res.json();
      const response = data?.data?.cards?.slice(3);
      setRestaurants(response);
      setFilterRestaurants(response);
    };

    fetchApi();
  }, []);

    function highRatedRestaurants() {
      let filterData = restaurants.filter((item) => {
        return item?.card?.card?.info.avgRating > 4.5;
      });
      setFilterRestaurants(filterData);
    }

  function searchRestaurants() {
    let searchRestaurants = restaurants.filter((item) => {
      return item?.card?.card?.info.name.includes(input);
    });
    setFilterRestaurants(searchRestaurants);
  }

  return restaurants.length === 0 ? (
    <Loader />
  ) : (
    <>
      <Header />
      <button
        onClick={() => {
          highRatedRestaurants();
        }}
      >
        High Rated Restaurants
      </button>
      <input
        type="text"
        onChange={(e) => {
          setInput(e.target.value);
        }}
        value={input}
      ></input>
      <button
        onClick={() => {
          searchRestaurants();
        }}
      >
        Search
      </button>
      <div className="cards-container">
        {filterRestaurants.map((item, key) => {
          const data = item?.card?.card?.info;
          return <Card key={key} data={data} />;
        })}
      </div>
    </>
  );
}
export default App;
