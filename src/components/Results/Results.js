import React from "react";
import Result from "./Result/Result";

const Results = () => {
  return (
    <div>
      <Result
        companyName="Company 1"
        match="95"
        crit1="6"
        crit2="7"
        crit3="8"
      />
      <Result
        companyName="Company 2"
        match="74"
        crit1="2"
        crit2="7"
        crit3="8"
      />

      <Result
        companyName="Company 3"
        match="23"
        crit1="1"
        crit2="8"
        crit3="10"
      />

      <Result
        companyName="Company 4"
        match="54"
        crit1="4"
        crit2="8"
        crit3="1"
      />
    </div>
  );
};

export default Results;
