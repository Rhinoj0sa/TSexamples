import * as React from "react";
const ProductDisplay: React.FunctionComponent<{ title: string }> = (props) => (
  <h4> El titulo es: {props.title} </h4>
);

export default ProductDisplay;
