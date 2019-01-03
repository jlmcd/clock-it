import React from 'react'
import './PunchItem.css'
import {Link} from 'react-router-dom'

export default function PunchItem(props) {
    const {punchInfo} = props
    return (
        <div id='punch-item'>
            <h2>{punchInfo.kind}</h2>
            <h3>Date: </h3> <p>{punchInfo.date}</p>
            <h3>Day: </h3> <p>{punchInfo.day}</p>
            <h3>Time: </h3> <p>{punchInfo.time_formatted}</p>
            <Link to={`/edit/${punchInfo.id}`}><button className='button blue'>Edit</button></Link>
            <button className='button red' onClick={() => props.deleteFn(punchInfo.id)}>Delete</button>
        </div>
    )
}