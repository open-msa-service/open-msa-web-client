import React from 'react';
import MyInfoTopModify from './MyInfoTopModify';
import MyInfoTopDefault from './MyInfoTopDefault';
import axios from 'axios';
import { getUser, getToken } from '../../../shared/auth';

class MyInfoTopSection extends React.Component{
    
    state = {
        modify : false
    }

    constructor(props){
        super(props);

        this._clickModify = this._clickModify.bind(this);
        this._clickCancle = this._clickCancle.bind(this);
    }

    _clickModify = () =>{
        this.setState({
            modify : true
        });
    }

    _clickCancle = () =>{
        this.setState({
            modify : false
        });
    }

    _sendUpdateUserInfo = (data) => {
        console.log(data);
        let requestData = {
            userId : getUser(),
            email : data.email,
            phoneNumber : data.phoneNumber,
            statusMessage : data.statusMessage,
            introduceMessage : data.introduceMessage
        };

        if(data.file != ''){
            // file is not null
            requestData.profileImage = data.file.name;
        }

        axios.put("/timeline/time/update", JSON.stringify(requestData),
            {
                headers:{
                    'Authorization' : getToken(),
                    'Content-Type' : 'application/json',
                    'Response-Type' : 'application/json'
                }
            }
        ).then((res) => {
            console.log(res);
            if(data.file != ''){ // 파일 업로드 수행
                
            }
        })
        .catch((e) => {
            console.log(e);
        })
    }

    render(){
        
        const isModify = this.state.modify;

        return(
            
            <>
            { isModify ?
            (<MyInfoTopModify parentsData = {this.props.userData}
                                    clickModify = {this._clickCancle} sendUpdate={this._sendUpdateUserInfo}/>)
                :
            (<MyInfoTopDefault parentsData = {this.props.userData}
                                    clickModify = {this._clickModify}/>)
            }
            </>
        )
    }

}

export default MyInfoTopSection;