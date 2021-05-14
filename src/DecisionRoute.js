import React from "react";
import { Route } from "react-router";

const DecisionRoute = ({
  trueComponent,
  falseComponent,
  decisionFunc,
  ...rest
}) => {
  return (
    <Route {...rest} render={decisionFunc() ? trueComponent : falseComponent} />
  );
};

export default DecisionRoute;
