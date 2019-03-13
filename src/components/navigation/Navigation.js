import React, { Component } from 'react'
import SigninControll from '../signin/SigninControll'
import './Navigation.css'
import UserInfo from './UserInfo'
import NavigationTab from './NavigationTab'
import userManager from '../../modules/user-manager'


class Navigation extends Component {    
    constructor(props) {
        super(props)
        this.state = {
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
                            <NavigationTab content='Genre'/>
                        }
                        {this.state.isAdmin && 
                            <NavigationTab content='Movie'/>
                        }

                        <UserInfo />
                        <SigninControll />
                    </div>
                </div>
            </nav>
        )
    }
}


export default Navigation