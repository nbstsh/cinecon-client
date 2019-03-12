import React, { Component} from 'react'
import './GenreList.css'
import GenreItemBox from './GenreItemBox'
import manager from '../../modules/genre-manager'


class GenreList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ids: []
        }
    }
    componentDidMount() {
        this.initIds()
        manager.on(manager.UPDATE_IDB_EVENT, this.initIds)
    }
    componentWillUnmount() {
        manager.off(manager.UPDATE_IDB_EVENT, this.initIds)
    }
    initIds = () => {
        manager.getIds()
            .then(ids => this.setState({ ids }))
    }
    render() {
        return (
            <div className="GenreList">
                {this.state.ids.map(id => (
                    <GenreItemBox key={id} id={id} />
                ))}
            </div>
        )
    }
}


export default GenreList