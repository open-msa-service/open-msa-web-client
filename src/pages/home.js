import React from 'react';
import Routes from '../components/Routes';
import TopNavigation from '../components/topNavigation';
import SideNavigation from '../components/sideNavigation';
import Footer from '../components/Footer';
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
                'Authorization':token
            }
        }
        
        axios.get('/member/user/info/userId/'+userId, config)
        .then((res) => {
            this.setState({
                userData:res.data.data.member
            })
        }).catch(e => {
            console.log(e);
            window.location = "/";
        });
    }

    render(){
        return(
            <div className="flexible-content">
                <TopNavigation />
                <SideNavigation userData = {this.state.userData}/>
                    <main id="content" className="p-5">
                        <Routes userData = {this.state.userData}/>
                    </main>
                <Footer />
            </div>
        )
    }

}

export default Home;