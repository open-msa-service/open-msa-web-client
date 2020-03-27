import React from 'react';
import RegistRight from '../components/regist-right-box';
import axios from 'axios';
import Footer from '../components/Footer';


class Regist extends React.Component{

    sendSignUp = (data) => {
        let config ={
            headers:{
                'Content-Type':'application/json'
            }
        }
        let requestData = JSON.stringify(data);
        
        axios.post('/register',
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
            <>
                <div className={'authBox'}>
                    <RegistRight onCreate={this.sendSignUp} />
                </div>
                <Footer />
            </>
        )
    }
    
}

export default Regist;