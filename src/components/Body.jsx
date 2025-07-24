import { useEffect, useState, createContext } from "react";
import { Card } from "./Card";
import { Header } from "./Header";
import { EnhancedCard } from "./EnhancedCard";
import Loader from "./Loader";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";
import { GET_RESTAURANTS } from "../utils/constants";

function Body() {
  const [restaurants, setRestaurants] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    const res = await fetch(GET_RESTAURANTS);
    const data = await res.json();
    const response =
      data.data.cards[1].groupedCard.cardGroupMap.RESTAURANT.cards;

    setRestaurants(response);
    setFilterRestaurants(response);
  };

  function highRatedRestaurants() {
    let filterData = restaurants.filter((item) => {
      return item?.card?.card?.info.avgRating > 4.5;
    });
    setFilterRestaurants(filterData);
  }

  function searchRestaurants() {
    let searchRestaurants = restaurants.filter((item) => {
      return item?.card?.card?.info.name
        .toLowerCase()
        .includes(input.toLowerCase());
    });

    setFilterRestaurants(searchRestaurants);
  }

  function handleEnter(e) {
    if (e.key === "Enter") {
      searchRestaurants();
    }
  }

  function reset() {
    setFilterRestaurants(restaurants);
  }

  return (
    <>
      <button
        className="bg-gray-500 text-white px-4 py-2 m-2 rounded cursor-pointer"
        onClick={highRatedRestaurants}
      >
        High Rated Restaurants
      </button>
      <button
        className="bg-blue-500 text-white px-4 py-2 m-2 rounded cursor-pointer"
        onClick={reset}
      >
        Reset
      </button>
      <input
        className="border border-gray-300 px-3 py-2 m-2 rounded"
        type="text"
        onChange={(e) => {
          setInput(e.target.value);
        }}
        value={input}
        onKeyDown={handleEnter}
      ></input>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
        onClick={searchRestaurants}
      >
        Search
      </button>
      {restaurants.length === 0 ? (
        <Loader />
      ) : (
        <div className="flex flex-wrap w-full m-auto">
          {filterRestaurants.map((item, key) => {
            const id = item?.card?.card?.info?.id;
            const data = item?.card?.card?.info;
            return (
              <Link key={key} to={`restaurant/${id}`}>
                <Card data={data} />
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
}
export default Body;
