import * as React from 'react';
import Favorit from './Favorit';

export default function MediaCard() {
  let nr = JSON.parse(window.localStorage.getItem('nr'));
  const est = Array.from(Array(nr).keys())
  var tse = est.map(function(item){
    return item+1;
 })
  return (
    <div>
      {tse.map((i, index) => (<Favorit nr={i} key={index}/>))}
      <div className="spaceBottom"/>
    </div>
  );
}
