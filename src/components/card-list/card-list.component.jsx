import React from "react";
import CardItem from "../card-item/card-item.component";
import "./card-list.styles.scss";

const CardList = (props) => {
  return (
    <div className="card-list">
      {props.monosters.map((monoster) => (
        <CardItem key={monoster.id} {...monoster} />
      ))}
    </div>
  );
};

export default CardList;
