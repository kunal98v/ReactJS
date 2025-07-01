import { useEffect, useState } from "react";
import { Card } from "./Card";
import { Header } from "./Header";
import Loader from "./Loader";
import { Link } from "react-router-dom";
function Body() {
  
  const [restaurants, setRestaurants] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    const res = await fetch(
      "https://restaurant-backend-xp1e.onrender.com/api/restaurants"
    );
    const data = await res.json();

    const response = data.data.cards[1].groupedCard.cardGroupMap.RESTAURANT.cards;

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

  function reset() {
    setFilterRestaurants(restaurants);
  }

  return restaurants.length === 0 ? (
    <Loader />
  ) : (
    <>
      <button onClick={highRatedRestaurants}>High Rated Restaurants</button>
      <button onClick={reset}>Reset</button>
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
          const id = item?.card?.card?.info?.id
          const data = item?.card?.card?.info;
          return <Link key={key} to = {`restaurant/${id}`} ><Card  data={data} /></Link>;
        })}
      </div>
    </>
  );
}
export default Body;
