const RestaurantCard = ({ restaurant }) => {
  //   console.log(Object.keys(restaurant).join(","));
  const { id, name, logo, location, size, type, area, description } =
    restaurant;

  return (
    <div>
      <div className="card card-side bg-base-100 shadow-sm">
        <figure className="flex-1">
          <img
            src="https://dailyasianage.com/library/1638204401_2.jpeg?v=0,1"
            alt="Movie"
          />
        </figure>
        <div className="card-body flex-2">
          <h2 className="card-title">{name}</h2>
          <p>{location}</p>
          <div className="card-actions justify-end">
            {" "}
            Hello World
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
