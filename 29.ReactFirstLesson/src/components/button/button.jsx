import React from "react";
import "./button.css";

function Button() {
  const salamla = () => {
    console.log("salam");
    //     console.log("dfghjk");
  };

  return (
    <div>
      <button className="btn" onClick={salamla}>
        Btn
      </button>
    </div>
  );
}

export default Button;
