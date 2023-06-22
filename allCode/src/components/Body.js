import RestaurantCard from '../components/RestaurantCard'
import { useState } from "react";
import resList from "../utils/mockData"


const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestraunt] = useState(resList);
  const [search,setSearch]=useState("");
  
  const handleChange=(event)=>{
    setSearch(event.target.value)
  }

  return (
    <div className="body">
      <div className='search-input'>
        <input className='search' value={search} onChange={handleChange}/>
      </div>

      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestraunt(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;