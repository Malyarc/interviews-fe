import React from 'react';
import './index.css'
import data from './data.json'

export default function Tree() {
  return (
    <div className="tree">
      <ul>
        <li>mammals
          <ul>
            <li>cheetah</li>
            <li>bear
              <ul>
                <li>lion</li>
                <li>dog
                  <ul>
                    <li>elephant</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>ape</li>
          </ul>
        </li>
      </ul>
    </div>
  )
}
