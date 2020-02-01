import React from "react";

const Services = () => {
  return (
    <div className=" container services">
      <div className="row">
        <div className="col-md-4 card servicesItem">
          <img src="http://i.picsum.photos/id/41/300/180.jpg" alt="" />
          <div className="card-body">
            <p className="servicesText">
              Donec leo, vivamus fermentum nibh in augue praesent a lacus at
              urna congue rutrum wisi maecenas ligula.
            </p>
            <button className="btn btn-primary btn lg servicesButton">
              READ MORE
            </button>
          </div>
        </div>
        <div className="col-md-4 card servicesItem">
          <img src="http://i.picsum.photos/id/41/300/180.jpg" alt="" />
          <div className="card-body">
            <p className="servicesText">
              Donec leo, vivamus fermentum nibh in augue praesent a lacus at
              urna congue rutrum wisi maecenas ligula.
            </p>
            <button className="btn btn-primary btn lg servicesButton">
              READ MORE
            </button>
          </div>
        </div>
        <div className="col-md-4 card servicesItem">
          <img src="http://i.picsum.photos/id/41/300/180.jpg" alt="" />
          <div className="card-body">
            <p className="servicesText">
              Donec leo, vivamus fermentum nibh in augue praesent a lacus at
              urna congue rutrum wisi maecenas ligula.
            </p>
            <button className="btn btn-primary btn lg servicesButton">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
