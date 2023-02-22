import React from "react";

import './card-list.styles.css'

export const CardList = props => {
  console.log(props);
  return <h1 className="card-list">{props.children}</h1>
}