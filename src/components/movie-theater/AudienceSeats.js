import React  from 'react'
import './AudienceSeats.css'
import Seat from './Seat'


const AudienceSeats = () => {
    const row = new Array(13).fill(<Seat />, 0, 13)
    console.log({row})
    return (
        <div className='AudienceSeats'>
            {row}
        </div>
    )
}

export default AudienceSeats