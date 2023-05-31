import React from "react";
import './index.css';

export const Cards = () => {
  const cardData = [
    {
      title: "Card 1",
      text: "This is the content for card 1.",
      buttonLabel: "Button 1"
    },
    {
      title: "Card 2",
      text: "This is the content for card 2.",
      buttonLabel: "Button 2"
    },
    {
      title: "Card 3",
      text: "This is the content for card 3.",
      buttonLabel: "Button 3"
    },
    {
      title: "Card 4",
      text: "This is the content for card 4.",
      buttonLabel: "Button 4"
    },
  ];

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 cards-container">
      {cardData.map((card, index) => (
        <div className="col mb-4" key={index}>
          <div className="card">
            <img className="card-img-top" src="" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">{card.title}</h5>
              <p className="card-text">{card.text}</p>
              <div className="btn-wrapper card-footer text-muted">
                <a href="#" className="card-btn btn btn-primary">
                  {card.buttonLabel}
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
