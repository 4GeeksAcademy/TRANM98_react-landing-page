import React from "react";
import './index.css';


export const Cards = () => {
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
      <div className="col mb-4">
        <div className="card">
          <img className="card-img-top" src="..." alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up
              the bulk of the card's content.
            </p>
            <div className = "btn-wrapper card-footer text-muted">
                <a href="#" className="card-btn btn btn-primary">
                    Go somewhere
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
              Some quick example text to build on the card title and make up
              the bulk of the card's content.
            </p>
            <div className = "btn-wrapper card-footer text-muted">
                <a href="#" className="card-btn btn btn-primary">
                    Go somewhere
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
              Some quick example text to build on the card title and make up
              the bulk of the card's content.
            </p>
            <div className = "btn-wrapper card-footer text-muted">
                <a href="#" className="card-btn btn btn-primary">
                    Go somewhere
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
              Some quick example text to build on the card title and make up
              the bulk of the card's content.
            </p>
            <div className="btn-wrapper card-footer text-muted">
                <a href="#" className="card-btn btn btn-primary">
                    Go somewhere
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
