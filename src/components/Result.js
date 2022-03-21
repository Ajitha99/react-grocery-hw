// import lists from "../Data";

import { useState } from "react";

function Result (props){
    // states
    const [state , setState] = useState(false);

    //when purchased in list is clicked - state changes to true: when true - toggles remove button.
    const handleTogglePurchase = (e) =>{
        e.preventDefault();
        // console.log("purchase clicked");
        // console.log(props.isPurchased);
        setState(true);
            
    }
   
    return(
       <div className=" topResultDiv">
            <div className = "resultDiv"> 
                {/* {console.log("Iam in Result")} */}
                {/* {console.log(props)} */}
                <h4><span>Item:</span>{props.item}</h4>
                <h4><span>Brand:</span>{props.brand}</h4>
                <h4><span>Units:</span>{props.units}</h4>
                <h4><span>Quantity:</span> {props.quantity}</h4>
                <div><h4  onClick={handleTogglePurchase}><span>Purchased:</span>{String(props.isPurchased)}</h4>
                  {/* here, if state is true - toggling remove button and sending delete props to button */}
                    {(state)? <button id = "removeBtn" onClick={props.delete}>remove</button>: null}
                  
                </div>
            </div>  
         </div>
    )
}

export default Result;

