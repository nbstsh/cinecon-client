import React, { Component } from 'react'
import SigninControll from '../signin/SigninControll'
import './Navigation.css'
import UserInfo from './UserInfo'
import NavigationTab from './NavigationTab'
import userManager from '../../modules/user-manager'
const hash = window.location.hash
console.log(hash)

class Navigation extends Component {    
    constructor(props) {
        super(props)
        this.state = {
            needShowSigninTab: hash === '#admin',
            isAdmin: false
        }
    }
    componentDidMount() {
        this.initIsAdmin()
        userManager.on(userManager.UPDATE_EVENT, this.initIsAdmin)
      }
      componentWillUnmount() {
          userManager.off(userManager.UPDATE_EVENT, this.initIsAdmin)
      }
      initIsAdmin = () => {
          this.setState({ isAdmin: userManager.isAdminUser() })
      }
    render() {
        return (
            <nav className="Navigation">
                <div className="wrap">
                    <div className="left">
                        <h2 className="title">Cinecoya Bookshelf</h2>
                    </div>
                    <div className="right">
                        {this.state.isAdmin && 
                            <NavigationTab 
                                content='Genre'
                                handleClick={this.props.handleClickGenre} />
                        }
                        {this.state.isAdmin && 
                            <NavigationTab 
                                content='Movie'
                                handleClick={this.props.handleClickMovie} />
                        }

                        <UserInfo />

                        {this.state.needShowSigninTab && 
                            <SigninControll />
                        }
                    </div>
                </div>
            </nav>
        )
    }
}


export default Navigation