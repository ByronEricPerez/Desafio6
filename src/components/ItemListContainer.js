import { useState } from "react/cjs/react.development";
import Item from "./Item";
import ItemList from "./ItemList";

/* const ItemListContainer = ({greeting}) => {
    return (
        //<div>{greeting}</div>
        <div className = "Contador">
            <ItemCount />
        </div>
    );
} */



const promesa = new Promise( (resolve, reject) > {
    setTimeout(() > {
        if (ItemList){
        {ItemList.length > 0 ? (
            ItemList.map((item,index) => (
            <Item
                key={index}
                id={item.id}
                title={item.title}
                pictureUrl={item.pictureUrl}
                price={item.price}
                
            />  
            ))
    ) : (
    )}
    },3000
});
}

export default ItemListContainer;