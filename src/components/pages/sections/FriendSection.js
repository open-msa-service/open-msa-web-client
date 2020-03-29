import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol} from "mdbreact";
import axios from 'axios';
import { getUser, getToken } from '../../../shared/auth';

class FriendSection extends React.Component{
    state = {
        accept : false,
    }

    constructor(props){
        super(props);

        this.onClick = this.onClick.bind(this);
        this._visitFriend = this._visitFriend.bind(this);
        this._acceptFriend = this._acceptFriend.bind(this);
    }

    onClick = () =>{
        this.props.clickModify();
    }

    textLineBreak = (lines) => {
        return lines ?
          lines.split(/[\r\n]/).map((partial, i) =>
            partial && <span key={i}>{partial}{i !== lines.length - 1 && <br />}</span>
          )
          : lines;
    };

    _visitFriend = () =>{
        window.location = "/home/visit/" + this.props.parentsData.userId;
    }

    _acceptFriend = () =>{
        const requestData = {
            userId1 : getUser(),
            userId2 : this.props.parentsData.userId
        }

        axios.put("/friend/accept", JSON.stringify(requestData),
        {
            headers:{
                'Authorization' : getToken(),
                'Content-Type' : 'application/json'
            }
        })
        .then((res)=>{
            alert(res.data.message);
            window.location = "/home/friends";
        })
        .catch((e) => {
            alert("요청 수락에 실패했습니다.");
            window.location = "/home/friends";
        })
    }

    render(){

        const user = this.props.parentsData;
        const accept = this.props.accept;

        return(
            <div className="timeline-card">
                <MDBCol>
                    <MDBCard style={{ width: "22rem" }}>
                        <MDBCardImage className="friend-list img-fluid" src={user.profileHref} waves />
                        <MDBCardBody>
                        <MDBCardTitle>{user.username}</MDBCardTitle>
                            <MDBCardText>
                                {user.introduceMessage}
                            </MDBCardText>
                            <MDBBtn onClick={this._visitFriend}>방문하기</MDBBtn>
                            {accept ? (<MDBBtn onClick={this._acceptFriend}>요청수락</MDBBtn>):(<></>)}
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </div>
        )
    }

}

export default FriendSection;