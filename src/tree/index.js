import React from 'react';
import './index.css'
import data from './data.json'

function generateTree(data) {
  if (!data) return null;
  return (
    <ul>
      {Object.entries(data).map(([key, value]) => (
        <li key={key}>
          {key}
          {generateTree(value)}
        </li>
      ))}
    </ul>
  );
}


export default function Tree() {
  return (
    <div className="tree">
      mammals<br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cheetah <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;bear <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lion <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dog <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;elephant <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ape <br />
      {generateTree(data)}
    </div>
  )
}
