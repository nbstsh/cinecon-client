import React  from 'react'
import './AudienceSeats.css'
import Seat from './Seat'

const SEATS_NUM = 14
const ROWS_NUM = 7
const AUDIENCE_SEATS_Y_LENGTH = 50 / 20 // 50 = parent height
const AUDIENCE_SEATS_Z_LENGTH = 100 - 30 // 100 = max z length

const AudienceSeats = () => {
    const row = new Array(SEATS_NUM).fill(<Seat />, 0, SEATS_NUM)
    const rowArray = new Array(ROWS_NUM).fill([...row], 0, ROWS_NUM)

    const zDiff = AUDIENCE_SEATS_Z_LENGTH / ROWS_NUM
    const yDiff = AUDIENCE_SEATS_Y_LENGTH / ROWS_NUM  

    let zDistance = 15;
    let yDistance = 0;

    const rows = rowArray.map(row => {
        const style = {
            transform: `translate3d(0, ${yDistance}vw, ${zDistance}vw)`
        }
        zDistance -= zDiff
        yDistance += yDiff
        return (
            <div className='SeatsRow' style={style}>
                {row}
            </div>
        )
    })

    return (
        <div className='AudienceSeats'>
            {rows}
        </div>
    )
}

export default AudienceSeats