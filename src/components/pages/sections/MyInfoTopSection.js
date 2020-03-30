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
        this._sendUpdateUserInfo = this._sendUpdateUserInfo.bind(this);
        this._sendFriendRequest = this._sendFriendRequest.bind(this);
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
        const formData = new FormData();
        let files = data.file;
        let proHref = '';
        if(files != ''){
            proHref = files.name;
            formData.append('file', files);
        }else{
            proHref = this.props.userData.profileHref;
        }

        let requestData = {
            userId : getUser(),
            email : data.email,
            phoneNumber : data.phoneNumber,
            statusMessage : data.statusMessage,
            introduceMessage : data.introduceMessage,
            profileHref : proHref
        };
        formData.append('member', JSON.stringify(requestData));

        axios.put("/member/update",formData,
            {
                headers:{
                    'Content-Type' : 'multipart/form-data',
                    'Response-Type' : 'application/json'
                }
            })
            .then((res) => {
                alert(res.data.message);
                window.location = "/home/myinfo";
            })
            .catch((e)=>{
                alert(e.message);
                window.location = "/home/myinfo";
            })
    }

    _sendFriendRequest = (data) =>{
        
        axios.post("/friend/request", JSON.stringify(data),
        {
            headers:{
                'Content-Type' : 'application/json',
            }
        })
        .then((res) =>{
            alert(res.data.message);
            window.location = "/home/visit/" + this.props.userData.userId;
        })
        .catch((e) => {
            alert(e.data.message);
        })

    }

    render(){
        const isFriend = this.props.isFriend;
        const isModify = this.state.modify;

        return(
            
            <>
            { isModify ?
            (<MyInfoTopModify parentsData = {this.props.userData}
                                    clickModify = {this._clickCancle} sendUpdate={this._sendUpdateUserInfo}/>)
                :
            (<MyInfoTopDefault parentsData = {this.props.userData}
                                    clickModify = {this._clickModify} isFriend={isFriend} sendFriend={this._sendFriendRequest}/>)
            }
            </>
        )
    }

}

export default MyInfoTopSection;