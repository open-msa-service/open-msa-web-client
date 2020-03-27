import React from 'react';
import RightBox from '../components/right-box'
import axios from 'axios';
import {login} from '../shared/auth';
import Footer from '../components/Footer';

class SigninContainer extends React.Component{

    sendSignIn = (data) =>{
        const tempData = {
            username : data.username,
            password : data.password,
            grant_type : "password"
        }
        let requestData = "username=" + tempData.username + "&password=" + tempData.password + "&grant_type=password";
        let userId = data.username;
        
        axios({
            method:'post',
            url:'/oauth/token',
            data:requestData,
            headers : {
                'Content-Type':'application/x-www-form-urlencoded'
            },
            auth:{
                username:'msa-id',
                password:'msa-password'
            }
        }).then((res) => {
            // 로그인 성공 후 페이지 이동
            let token = res.data.access_token;
            let refresh = res.data.refresh_token;
            login(userId, token, refresh);
            window.location = "/home/main";
        }).catch(e => {
            alert(e.message);
        });
    }

    render(){
        return(
            <>
                <div className={'authBox'}>
                    <RightBox onCreate={this.sendSignIn} />
                </div>
                <Footer />
            </>
        )
    }
}

export default SigninContainer;