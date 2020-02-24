import React from 'react';
import '../css/App.css';
import LeftBox from '../components/left-box';
import RegistRight from '../components/regist-right-box';


class Regist extends React.Component{

    sendSignUp = (data) => {
        console.log(data);
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