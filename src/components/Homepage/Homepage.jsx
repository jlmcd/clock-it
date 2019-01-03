import React, { Component } from 'react'
import Axios from 'axios';
import PunchItem from './PunchItem/PunchItem'
import {Link} from 'react-router-dom'

export default class Homepage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            punches: []
        }
            this.getPunches = this.getPunches.bind(this)
            this.deletePunch = this.deletePunch.bind(this)
    }

    componentDidMount() {
        this.getPunches()
    }
    
    componentDidUpdate(prevProps, prevState) {
        if (prevState.punches.length !== this.state.punches.length) {
            this.getPunches()
        }
    }

    getPunches() {
        Axios.get('/api/punches')
        .then(res => {
            this.setState({ punches: res.data })
        })
    }

    deletePunch(id) {
        Axios.delete(`/api/punch/${id}`)
            .then(res => {
                this.getPunches()
            })
    }

    render() {
        return (
            <div>
                <h1>My Punches</h1>
                {this.state.punches.map(punch => (
                    <PunchItem
                        key={punch.id}
                        punchInfo={punch}
                        deleteFn={this.deletePunch}
                    />
                ))}
                <Link to='/new'><button className='button blue big'>New Punch</button></Link>
            </div>
        )
    }
}