import React from 'react';
import MyInfoTopSection from './sections/MyInfoTopSection';
import TimeLineCardSection from './sections/TimeLineCardSection';
import '../../css/timeline.css';
import { getUser, getToken } from '../../shared/auth';
import axios from 'axios';

class MyInfoPage extends React.Component{

    state = ({
        userData : ''
    })

    constructor(props){
        super(props);

    }

    componentWillMount(){
        let userId = getUser();
        let token = getToken();

        let config = {
            headers : {
                'Response-Type' : 'application/json',
                'Authorization' : token
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
            <>
                <MyInfoTopSection userData = {this.state.userData}/>
                <TimeLineCardSection />
            </>
        )
    }
}

export default MyInfoPage;