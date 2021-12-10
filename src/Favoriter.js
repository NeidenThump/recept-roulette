import * as React from 'react';
import Favorit from './Favorit';
import { v4 as uuidv4 } from 'uuid';

export default function MediaCard() {
  const favoriter = JSON.parse(window.localStorage.getItem('favoriter'));
  console.log(favoriter)
  return (
    <div>
      {favoriter.map((i, index) => (<Favorit recipe={i} nr={index} key={uuidv4()}/>))}
      <div className="spaceBottom"/>
    </div>
  );
}
