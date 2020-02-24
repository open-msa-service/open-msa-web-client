import React from 'react';

class LeftBox extends React.Component{

    render(){
        return(
            <div className={'leftBox'}>
                    <div className={'bgGreen'} />
                    <div className={'imageAuth'} />
                    <div className={'imageText bold style1'}>Codewhatever</div>
                    <div className={'imageText style2'}>Build your business online</div>
            </div>
        )
    }
}


export default LeftBox;