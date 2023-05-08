import React from "react";
import './index.css';


export const Cards = () => {
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 cards-container">
      <div className="col mb-4">
        <div className="card">
          <img className="card-img-top" src="..." alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
            Praesent rutrum nulla elit, vitae vulputate est dapibus sed. Nunc pharetra, nibh eget accumsan feugiat, magna nisi sagittis erat, non ultrices ligula arcu ut risus. Cras tincidunt dolor diam, id bibendum neque faucibus at. 
            </p>
            <div className = "btn-wrapper card-footer text-muted">
                <a href="#" className="card-btn btn btn-primary">
                    Find out More!
                </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col mb-4">
        <div className="card">
          <img className="card-img-top" src="..." alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed sodales dui, vitae molestie diam. Vivamus gravida purus vel lorem efficitur auctor. Sed pretium mi sed erat rhoncus, nec tincidunt velit ullamcorper.
            </p>
            <div className = "btn-wrapper card-footer text-muted">
                <a href="#" className="card-btn btn btn-primary">
                Find out More!
                </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col mb-4">
        <div className="card">
          <img className="card-img-top" src="..." alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed sodales dui, vitae molestie diam. Vivamus gravida purus vel lorem efficitur auctor. Sed pretium mi sed erat rhoncus, nec tincidunt velit ullamcorper.
            </p>
            <div className = "btn-wrapper card-footer text-muted">
                <a href="#" className="card-btn btn btn-primary">
                Find out More!
                </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col mb-4">
        <div className="card">
          <img className="card-img-top" src="..." alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed sodales dui, vitae molestie diam. Vivamus gravida purus vel lorem efficitur auctor. Sed pretium mi sed erat rhoncus, nec tincidunt velit ullamcorper.
            </p>
            <div className="btn-wrapper card-footer text-muted">
                <a href="#" className="card-btn btn btn-primary">
                  Find out More!
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
