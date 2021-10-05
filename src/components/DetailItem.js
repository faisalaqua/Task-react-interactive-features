import React from "react";

function DetailItem(props) {
  return (
    <div className="detail">
      <img alt={props.detail.name} src={props.detail.image} />
      <p>{props.detail.name}</p>
      <p className="product-price">{props.detail.price} KD</p>
      <p>{props.detail.description}</p>
    </div>
  );
}

export default DetailItem;
