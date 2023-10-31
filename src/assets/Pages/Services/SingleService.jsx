const SingleService = ({service}) => {

    const {title, img, price, description} = service

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src = {img}
          alt={title}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description.slice(0 , 100)}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
