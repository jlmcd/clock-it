import React, {Component} from 'react'
import Axios from 'axios'
import {Link} from 'react-router-dom'

export default class EditPunch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: '',
            day: '',
            time: '',
            kind: ''
        }
    }

    componentDidMount() {
        Axios.get(`/api/punch/${this.props.match.params.id}`)
            .then(res => {
                const {date, day, kind, time} = res.data[0]
                this.setState({
                    date, day, kind, time
                })
            })
    }

    handleChange(prop, evt) {
        this.setState({
            [prop]: evt.target.value
        })
    }

    updatePunch() {
        Axios.put(`/api/punch/${this.props.match.params.id}`, this.state)
    }

    render() {
        return (
            <div>
                <h1>Edit Punch</h1>
                <div id='new-punch'>
                    <div id='date'>
                        <h2>Date: </h2>
                        <input
                            type='date'
                            value={this.state.date}
                            onChange={e => this.handleChange('date', e)}
                        />
                    </div>
                    <div id='day'>
                        <h2>Day: </h2>
                        <select value={this.state.day} name="day" onChange={e => this.handleChange('day', e)}>
                            <option value="Monday">Monday</option>
                            <option value="Tuesday">Tuesday</option>
                            <option value="Wednesday">Wednesday</option>
                            <option value="Thursday">Thursday</option>
                            <option value="Friday">Friday</option>
                            <option value="Saturday">Saturday</option>
                            <option value="Sunday">Sunday</option>
                        </select>
                    </div>
                    <br />
                    <div id='time'>
                        <h2>Time: </h2>
                        <input type="time" value={this.state.time} onChange={e => this.handleChange('time', e)} />
                    </div>
                    <div id='type'>
                        <h2>Punch Type: </h2>
                        <select value={this.state.kind} name="type" onChange={e => this.handleChange('kind', e)}>
                            <option value="in">In</option>
                            <option value="out">Out</option>
                        </select>
                    </div>
                    <div id='buttons'>
                        <Link to='/'>
                            <button className='blue button' onClick={() => this.updatePunch()}>Save Punch</button>
                        </Link>
                        <Link to='/'>
                            <button className='red button'>Cancel</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}