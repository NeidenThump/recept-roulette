import * as React from 'react';
import Favorit from './Favorit';
import { v4 as uuidv4 } from 'uuid';

export default function MediaCard() {
  let favoriter = JSON.parse(window.localStorage.getItem('favoriter'));
  return (
    <div>
      {favoriter.map((i, index) => (<Favorit recipe={JSON.parse(i)} nr={index} key={uuidv4()}/>))}
      <div className="spaceBottom"/>
    </div>
  );
}
