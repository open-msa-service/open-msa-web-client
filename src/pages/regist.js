import React from 'react';
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
                <RegistRight onCreate={this.sendSignUp} />
            </div>
        )
    }
    
}

export default Regist;