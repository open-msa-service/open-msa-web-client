import React from 'react';
import '../css/App.css';
import LeftBox from '../components/left-box';
import RegistRight from '../components/regist-right-box';
import axios from 'axios';

class Regist extends React.Component{

    sendSignUp = (data) => {
        let config ={
            headers:{
                'Content-Type':'application/json'
            }
        }
        let requestData = JSON.stringify(data);
        console.log(requestData);
        
        axios.post('/user/signup',
            requestData, config
        ).then((res) => {
            alert(res.data.message);
            window.location = '/'
        }).catch(e => {
            alert(e.response.data.message);
        });
    }

    render(){
        return(
            <div className={'authBox'}>
                <LeftBox />
                <RegistRight onCreate={this.sendSignUp} />
            </div>
        )
    }
    
}

export default Regist;