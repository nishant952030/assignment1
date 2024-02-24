import React from 'react'
import "./builder.css"
function Builders() {
    const builders = [
        { id: 1, builderName: "Tools" },
        { id: 2, builderName: "AWS Builder" },
        { id: 3, builderName: "Start Build" },
        { id: 4, builderName: "Build Supplies" },
        { id: 5, builderName: "Tooling" },
        { id: 6, builderName: "BlueHosting" }
    ]
  return (
      <div className='builder'>
          {builders.map((builder) => (
              <div className='builder-name' key={builder.id}>{builder.builderName }</div>
          ))}
    </div>
  )
}

export default Builders