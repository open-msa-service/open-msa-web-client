import React from 'react';
import Routes from '../components/Routes';
import TopNavigation from '../components/topNavigation';
import SideNavigation from '../components/sideNavigation';
import Footer from '../components/Footer';
import axios from 'axios';
import {getUser, getToken} from '../shared/auth'


class Home extends React.Component{

    constructor(props){
        super(props);
        
    }

    componentDidMount(){
        let userId = getUser();
        let token = getToken();

        console.log("userId : " + userId);
        console.log("token : " + token);

        let config ={
            headers:{
                'Response-Type':'application/json',
                'Authorization':token
            }
        }
        
        axios.get('/member/user/info/userId/'+userId, config)
        .then((res) => {
            console.log(res);
        }).catch(e => {
            console.log(e);
        });
    }

    render(){
        return(
            <div className="flexible-content">
                <TopNavigation />
                <SideNavigation />
                    <main id="content" className="p-5">
                        <Routes />
                    </main>
                <Footer />
            </div>
        )
    }

}

export default Home;