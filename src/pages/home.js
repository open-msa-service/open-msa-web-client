import React from 'react';
import Routes from '../components/Routes';
import TopNavigation from '../components/topNavigation';
import SideNavigation from '../components/sideNavigation';
import axios from 'axios';
import {getUser, getToken} from '../shared/auth'


class Home extends React.Component{

    state = ({
        userData : ''
    });

    constructor(props){
        super(props);
    }

    componentWillMount(){
        let userId = getUser();
        let token = getToken();

        let config ={
            headers:{
                'Response-Type':'application/json',
            }
        }
        
        axios.get('/member/'+userId, config)
        .then((res) => {
            this.setState({
                userData:res.data.data
            })
        }).catch(e => {
            debugger
            window.location = "/";
        });
    }

    render(){
        return(
            <>
                <div className="wrapper">
                    <div className="flexible-content">
                        <TopNavigation />
                        <SideNavigation userData = {this.state.userData}/>
                            <main id="content" className="p-5">
                                <Routes userData = {this.state.userData}/>
                            </main>
                    </div>
                </div>
            </>
        )
    }

}

export default Home;