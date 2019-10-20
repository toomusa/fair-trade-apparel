import React from 'react'

const Checkbox = props => {
  return (
    <div>
      <div className="checkbox">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4R7Cee9TWLQhnUJDHOPjSU_hZFWoldJcF6KliFQyflGqKPQhGkQ" className="green-check" alt="checkbox" />
        {/* <br></br> */}
        <h6>{props.label}</h6>
      </div>
    </div>
  )
}

export default Checkbox;