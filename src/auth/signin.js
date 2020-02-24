import React from 'react';
import LeftBox from '../components/left-box'
import RightBox from '../components/right-box'
import '../css/App.css';

class SigninContainer extends React.Component{
    
    
    render(){
        return(
            <div className={'authBox'}>
                <LeftBox />
                <RightBox />
            </div>
        )
    }
}

export default SigninContainer;