import React from 'react';

class Social extends React.Component{

    render(){
        return(
            <div className={'socialMediaBox'}>
                <div className={'icAuth google'} />
                <div className={'icAuth facebook'} />
                <div className={'icAuth twitter'} />
            </div>
        )
    }

}

export default Social;