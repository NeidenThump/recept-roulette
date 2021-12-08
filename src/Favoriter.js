import * as React from 'react';
import Favorit from './Favorit';

export default function MediaCard() {
  let nr = JSON.parse(window.localStorage.getItem('nr'));
  console.log(nr)
  const est = Array.from(Array(nr).keys())
  var tse = est.map(function(item){
    return item+1;
 
 })
  console.log(tse);

  return (
    tse.map((i, index) => (<Favorit nr={i} {...console.log(i)} key={index}/>))
  );
}
