import React from 'react'

export const TransctionList = () => {
  return (
    <div>
      <h3>History</h3>
      <ul id="list" class="list">
        <li class="minus">
          Cash <span>-R400</span><button class="delete-btn">X</button>
        </li>
      </ul>
      
    </div>
  )
}
