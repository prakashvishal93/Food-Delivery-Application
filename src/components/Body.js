import RestaturantCard from "./RestaurantCard"
import resObj from "./utils/mockData";


const Body = () => {
    return (
        <div className="body">
            <div className="filter">
              <button className="filter-btn" onClick={()=>{
                console.log("Button Clicked");
              }}>Top Rated Restaurant</button>
            </div>
            <div className="res-container">
              
          {
            resObj.map(restaurant => (<RestaturantCard key={restaurant.card.card.info.id} resData = {restaurant} />))
          }
                
            

            </div>
        </div>
    )
}

export default Body;