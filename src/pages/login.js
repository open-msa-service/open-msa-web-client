import React from 'react';
import RightBox from '../components/right-box'
import axios from 'axios';
import {login} from '../shared/auth';
import Footer from '../components/Footer';

class SigninContainer extends React.Component{

    sendSignIn = (data) =>{
        
        let requestData = JSON.stringify(data);
        let userId = data.userid;
        
        axios({
            method:'post',
            url:'/formlogin',
            data:requestData,
            responseType:"application/json"
        }).then((res) => {
            // 로그인 성공 후 페이지 이동
            let token = res.headers.authorization;
            login(userId, token);
            window.location = "/home/main";
        }).catch(e => {
            alert(e.response.data.message);
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