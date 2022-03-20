
import { useState } from 'react';
import '../styles/style.css'
import Result from './Result';
import lists from '../Data'

function Main (){

    const [allList, setAllLists] = useState(lists);
    // const options = [true,false];

    // const [submit, setSubmit] = useState(false);
    const [item, setItem] = useState(" ");
    const [brand, setBrand] = useState(" ");
    const [units, setUnits] = useState(" ");
    const [quantity, setQuantity] = useState(0);
    const [purchased, setPurchased] = useState(false);


    function getItem(e){
        e.preventDefault();
        setItem(e.target.value);
    }
    function getBrand(e){
        e.preventDefault();
        setBrand(e.target.value);
    }
    function getUnits(e){
        e.preventDefault();
        setUnits(e.target.value);
    }
    function getQuantity(e){
        e.preventDefault();
        setQuantity(e.target.value);
    }
    // function getPurchased(e){
    //     e.preventDefault();
    //     (e.target.value != undefined) ? setPurchased(e.target.value): setPurchased(false);
    // }
    function getPurchased(e){
        e.preventDefault();
        setPurchased(e.target.value);
    }
    const onClick = (e) => {
        e.preventDefault();
        const newItem = {
            item: item,
            brand: brand,
            units: units,
            quantity: quantity,
            isPurchased: purchased,
        } 
        const newList = [...allList, newItem];
        setAllLists(newList);
        // setSubmit(true);
        setItem(" ");
        setBrand(" ");
        setUnits(" ");
        setQuantity(" ");
        setPurchased(" ");

    }
    const handleByPurchased = (e) =>{
        e.preventDefault();
        const newGroceryList = [...allList];
        // console.log(newGroceryList);
        const listByPurchased = newGroceryList.filter((ele) =>{
            return (ele.isPurchased === 'true') || (ele.isPurchased ===  true)
        })
        setAllLists(listByPurchased);
    }
    const handleByNotPurchased = (e) =>{
        e.preventDefault();
        const newList = [...allList];
        // console.log(newList);
        const listByNotPurchased = newList.filter((ele) =>{
            return ele.isPurchased === false
        })
        setAllLists(listByNotPurchased);
    }
    const handleSortAlphabetically = (e) =>{
        e.preventDefault();
        console.log('sorting - clicked')
        const newGrocerList = [...allList];
        const sortListByItem = newGrocerList.sort((a,b) =>{
            let aTemp = a.item.atoLocaleLowerCase();
            let bTemp = b.item.toLocaleLowerCase();
            if (aTemp < bTemp){
                return -1;
            }
            if(aTemp > bTemp){
                return 1;
            }
            return 0;
        })
        console.log(sortListByItem);
        setAllLists(sortListByItem);

    }
            


    return(
    <div>
        <div className="mainDiv">
            <label>Item: </label>
            <input id = "item" onChange={getItem} type="text" value={item} />
            <label>Brand: </label>
            <input id = "brand" onChange={getBrand} type="text" value = {brand} />
            <label>Units: </label><input id = "units" onChange={getUnits} type="text" value = {units} />
            <label>Quantity: </label>
            <input id = "quantity" onChange={getQuantity} type="text" value = {quantity} />
            <label>Purchased: </label>
            <select id ="purchased" onChange={getPurchased} value={purchased}>
                <option value= {true}>true</option>
                <option value= {false}>false</option>
            </select> 
            <button id = "submitBtn" onClick={onClick} type="button"> Submit</button>
        </div>
        <div><button id = "showPurchased" onClick={handleByPurchased}>Purchased</button>
            <button id = "showNotPurchased" onClick={handleByNotPurchased}>Not Purchased</button>
            <button id = "showAlphabetical" onClick = {handleSortAlphabetically}>Sort by Item</button>
        </div>
        { 
        allList.map((listElement, index) =>{
            return(
                <div>
                
                <Result 
                    item = {listElement.item}
                    brand = {listElement.brand}
                    units = {listElement.units}
                    quantity = {listElement.quantity}
                    isPurchased = {listElement.isPurchased}
                    key = {index}
                    />
                {/* <p onClick={()=>handleToggle(index,listElement.isPurchased)}>Remove</p> */}
                </div>
            )
            })}
        </div>
    )
    
    
}

export default Main;


// return(
//     <div>
//       <div className="mainDiv">
//         <label>Item: </label>
//         <input id = "item" onChange={getItem} type="text" />
//         <label>Brand: </label>
//         <input id = "brand" onChange={getBrand} type="text" />
//         <label>Units: </label>
//         <input id = "units" onChange={getUnits} type="text" />
//         <label>Quantity: </label>
//         <input id = "quantity" onChange={getQuantity} type="text" />
//         <label>Purchased: </label>
//         <select id ="purchased" onChange={getPurchased} name="select">
//             <option value= "true">true</option>
//             <option value= "false">false</option>
//         </select>
//         <button onClick={onClick} type="button"> Submit</button>
        
//       </div>
//       <div id = "result">{
//           submit ?  <Result 
//                  item = {item}
//                  brand = {brand}
//                  units = {units}
//                  quantity = {quantity}
//                  isPurchased = {purchased} /> : null }
//         </div> 
//     </div>
// )
