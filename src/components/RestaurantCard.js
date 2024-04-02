import { CDN_URL } from "./utils/constant";

const RestaturantCard = (props) => {
    const {resData} = props;

    const {cloudinaryImageId,name, cuisines,avgRating,costForTwo,sla} = resData?.card.card.info;
    return (
        <div className="res-card">
            <img alt="res-image" src={CDN_URL+ cloudinaryImageId }></img>
            <h3>{name}</h3>
            <h4>{(cuisines).join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} minutes</h4>
        </div>
    )
}

export default RestaturantCard;