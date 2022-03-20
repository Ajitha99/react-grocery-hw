// import lists from "../Data";

import { useState } from "react";

function Result (props){
    const [state , setState] = useState(false);

    const handleTogglePurchase = (e) =>{
        e.preventDefault();
        console.log("purchase clicked");
        console.log(props.isPurchased);
        setState(true);
            
    }
   
    return(
        <div className=" topResultDiv">
            <div className = "resultDiv">
                {/* {console.log("Iam in Result")} */}
                {console.log(props)}
                <h4><span>Item:</span>{props.item}</h4>
                <h4><span>Brand:</span>{props.brand}</h4>
                <h4><span>Units:</span>{props.units}</h4>
                <h4><span>Quantity:</span> {props.quantity}</h4>
                <div><h4 onClick={handleTogglePurchase}><span>Purchased:</span>{String(props.isPurchased)}</h4>
                  
                  {(state)? <button id = "removeBtn">remove</button>: null}
                  </div>
            </div>  
        </div>
    )
}

export default Result;

<button id = "removeBtn">remove</button> 
   {/* <h4><span>Purchased: </span>{''+ props.isPurchased}</h4> */}
 {/* <h4><span>Purchased: </span>{JSON.stringify(props.isPurchased)}</h4> */}