import * as React from 'react';
import Favorit from './Favorit';

export default function MediaCard() {
  let favoriter = JSON.parse(window.localStorage.getItem('favoriter'));
  return (
    <div>
      {favoriter.map((i, index) => (<Favorit recipe={JSON.parse(i)} key={index}/>))}
      <div className="spaceBottom"/>
    </div>
  );
}
