import React from 'react'

import Movie from './Movie';

import Data from './moviedata.json'

export default function MovieMap() {

    let items =[];
    
    
    items=Data.map((item,index)=> <Movie key={index} titleText={item.title} typeText={item.type} btn1Text={item.btn1} desText={item.desc} btn2Text={item.btn2} bn3Text={item.btn3} />);
    
  
  return (
    <div>
      
      {items}

    </div>
  )
}
