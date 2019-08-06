import React from 'react'

const Logo = ({ size, color, margin }) => {
  return (
    <div style={{ display: 'flex', margin }}>
      <svg viewBox='0 0 794 429' width={size} height={size}>
        <g>
          <path fill={color} d='M392 257l-65 130c-19 33-22 42-28 42-8 0-11-8-24-34l-64-137h60l42 95 46-96h33zM590 256l-65 131c-19 33-22 42-28 42-8 0-11-8-24-34l-65-139h60l43 97 47-97h32zM646 141l37-74c17-38 27-47 36-52 12-7 27-7 32-7s8-1 8-4-4-4-12-4l-51 2-65-2c-10 0-14 1-14 4s3 4 7 4c7 0 17 0 25 2 7 3 8 8 8 13s-2 13-5 21l-42 97h36zM449 141l36-74c18-38 27-47 36-52 13-7 27-7 32-7s8-1 8-4-4-4-12-4l-51 2-65-2c-10 0-14 1-14 4s3 4 7 4c7 0 17 0 25 2 7 3 9 8 9 13s-3 13-6 21l-40 93-31-69c-9-22-17-39-17-46 0-4 1-9 8-11 6-3 18-3 25-3 5 0 7-1 7-4s-6-4-18-4l-61 2-78-2c-10 0-17 1-17 4 0 2 2 4 6 4s15 0 25 2c23 6 33 12 47 43l42 88h97zM219 143l-33-75c-10-22-18-39-18-46 0-4 1-9 8-11 6-3 18-3 25-3 5 0 7-1 7-4s-6-4-18-4l-61 2-77-2C41 0 34 1 34 4c0 2 2 4 6 4s15 0 25 2c23 6 33 12 47 43l43 90h64zM497 169h-7v27h2q6 0 9-4t3-12h2v35h-2q0-6-2-9-2-4-5-5l-7-1v18l1 7 1 2 5 1h3q10 0 15-5 6-4 8-13h2l-3 21h-57v-1h2l5-1 2-3v-50-5q0-2-2-3l-5-1h-2v-2h55v20h-1l-4-11q-3-3-8-4l-10-1zm35-4h19v57l1 6 4 2v1h-24v-1l4-2 1-6v-47l-1-7-4-1v-2zm68 42h-26q1 9 5 14 4 4 8 4l6-1 5-6 2 1q-4 7-9 11-4 3-10 3-10 0-15-8-5-6-5-16 0-11 7-18 6-7 14-7 7 0 12 6t6 17zm-26-3h14l-1-11-3-5h-3l-4 2q-3 4-3 12v2zm68 16l2 1q-3 6-8 9t-10 3q-9 0-15-7-5-7-5-17 0-9 5-16 6-9 16-9 7 0 11 4 5 3 5 8 0 3-2 4l-4 2q-3 0-5-2t-3-7l-1-4-3-1-4 2q-2 4-2 12l2 12q2 6 6 9 2 2 6 2l4-1q3-1 5-4zm24-51h2v17h11v5h-11v33l1 2h2q3 0 6-4l2 1q-4 9-13 9-5 0-8-2-3-3-3-6l-1-9v-24h-6v-2l11-9 7-11zm17 17h19v10q4-7 8-9 3-3 6-3t5 2l1 5-1 5-4 2q-3 0-4-2l-3-2h-1l-3 1-3 5-1 10v17l2 2 4 1v1h-25v-1l4-2 1-7v-26-5l-2-2h-3v-2zm55-22l6 2q2 2 2 5t-2 5q-3 3-6 3t-5-3q-2-2-2-5t2-5q2-2 5-2zm-12 22h19v36l1 6 5 2v1h-25v-1l4-2 1-6v-27l-1-6-4-1v-2zm66 34l2 1q-3 6-8 9t-10 3q-10 0-15-7t-5-17q0-9 4-16 7-9 17-9 7 0 11 4 4 3 4 8l-1 4q-2 2-5 2t-4-2q-2-2-3-7l-1-4-3-1-4 2q-2 4-2 12l2 12q2 6 5 9 3 2 7 2l4-1 5-4zM81 165h17v2l-3 1-2 3-3 7-21 55h-2l-16-43-18 43h-2L9 179l-5-10q-1-2-4-2v-2h29v2l-5 1-1 2 2 8 13 32 11-25-3-7-3-7-3-3-5-1v-2h32v2h-5l-1 2-1 1 2 7 12 32 11-29 2-6 1-3q0-2-2-3l-5-1v-2zm22 0h18v27l7-6q3-2 7-2t7 3q3 2 4 6l1 11v17l1 7 4 2v1h-23v-1l3-2 1-7v-20-7l-2-2-2-1-4 1-4 5v24l1 7 4 2v1h-23v-1l4-2v-53-6q-1-2-4-2v-2zm77 19q6 0 11 3t8 9q2 6 2 13 0 9-5 16-6 8-16 8-11 0-16-8-6-7-6-16 0-10 6-17 6-8 16-8zm0 4q-3 0-4 2-2 2-3 7v25l3 6 4 1 3-1 3-5 1-18-1-12-3-4-3-1zm27-23h19v57l1 6 4 2v1h-24v-1l4-2 1-6v-47l-1-7-4-1v-2zm68 42h-25q0 9 4 14 4 4 8 4l6-1 5-6 2 1q-4 7-9 11-4 3-10 3-10 0-15-8-5-6-5-16 0-11 7-18 6-7 14-7 7 0 12 6t6 17zm-26-3h14l-1-11-3-5h-3l-4 2q-3 4-3 12v2zm58-20h2l1 16h-2q-3-7-6-9-3-3-6-3l-4 1-1 3 1 3 9 7 9 8q2 3 2 8l-2 7q-2 4-5 6t-8 2l-8-2-2-1q-2 0-3 3h-2l-1-17h2q2 7 6 10t7 3l4-1 2-4-2-4-6-5q-8-5-10-8-3-4-3-9t3-9q4-5 11-5 4 0 7 2l2 1h2l1-3zm37 41q-8 7-15 7-4 0-6-3-3-2-3-6 0-5 5-9 4-5 19-12v-4-7l-2-2-4-1-5 1-1 3 1 2 2 4-2 4q-2 2-5 2t-5-2l-2-4q0-4 3-7l8-5 10-2q7 0 10 3 4 3 5 6l1 9v22l1 1 1 1 3-2 1 1q-2 4-5 5l-6 2q-4 0-6-2l-3-5zm0-4v-15q-6 3-8 7l-2 6 1 3 4 2q2 0 5-3zm24-56h19v57l1 6 5 2v1h-25v-1l4-2 1-6v-47l-1-7-4-1v-2zm68 42h-25q0 9 4 14 4 4 9 4l5-1 5-6 2 1q-4 7-9 11-4 3-10 3-10 0-15-8-5-6-5-16 0-11 7-18 6-7 14-7 7 0 12 6t6 17zm-26-3h14l-1-11-3-5h-3l-4 2q-3 4-3 12v2z'
          />
          <path stroke={color} strokeLinecap='square' strokeMiterlimit='3' strokeWidth='8'
            d='M22 142h752M22 259h753' />
        </g>
      </svg>
    </div>
  )
}

export default Logo
