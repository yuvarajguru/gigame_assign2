import * as actionTypes from "./types";
import axios from "axios";

export const fetchData = ()=>async dispatch=>{

  const values = await axios.get('https://davids-restaurant.herokuapp.com/categories.json');
  console.log(values)
  dispatch( {
    type:'data',
    data:values.data
  });
  
}
export const getMenus = (data)=>async dispatch=>{

  const values = await axios.get(`https://davids-restaurant.herokuapp.com/menu_items.json?category=${data}`);
  console.log(values)
  dispatch( {
    type:'menuitems',
    data:values.data.menu_items
  });
  
}