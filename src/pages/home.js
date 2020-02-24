import React from 'react';
import LeftBox from '../components/left-box'
import RightBox from '../components/right-box'
import '../css/App.css';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

class SigninContainer extends React.Component{

    sendSignIn = (data) =>{
        
        let requestData = JSON.stringify(data);
        console.log(requestData);
        
        axios({
            method:'post',
            url:'/formlogin',
            data:requestData,
            responseType:"application/json"
        }).then((res) => {
            // 로그인 성공 후 페이지 이동
            window.location = "/home";
        }).catch(e => {
            alert(e.response.data.message);
        });
    }

    render(){
        return(
            <div className={'authBox'}>
                <LeftBox />
                <RightBox onCreate={this.sendSignIn} />
            </div>
        )
    }
}

export default SigninContainer;