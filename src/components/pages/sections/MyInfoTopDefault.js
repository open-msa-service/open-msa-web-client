import React from 'react';
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBBtn} from "mdbreact";
import FileUploadSection from './FileUploadSection';
import { getUser } from '../../../shared/auth';

class MyInfoTopDefault extends React.Component{

    constructor(props){
        super(props);

        this.onClick = this.onClick.bind(this);
        this._sendFriendRequest = this._sendFriendRequest.bind(this);
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
      

    _sendFriendRequest = () =>{
        // userId1이 userId2에 요청
        const request = {
            userId1 : getUser(),
            userId2 : this.props.parentsData.userId
        }

        this.props.sendFriend(request);
    }

    render(){

        const isFriend = this.props.isFriend;

        return(
            <MDBCard className="my-5 px-5 pb-1 mb-4 text-center">
                <MDBCardBody>
                    <MDBRow className="text-md-left">
                        <MDBCol lg="8" md="12" className="mb-5">
                            <MDBCol md="4" lg="6" className="float-left">
                                <FileUploadSection imgSrc={this.props.parentsData.profileHref}/>
                                {isFriend ? (<></>) : 
                                (<MDBBtn color="primary" onClick={this._sendFriendRequest} >친구요청</MDBBtn>)}
                            </MDBCol>
                            <MDBCol md="6" lg="6" className="float-right">
                                <h4 className="font-weight-bold mb-3">
                                    {this.props.parentsData.username}
                                </h4>
                                <h6 className="font-weight-bold grey-text mb-3">
                                    {this.props.parentsData.email}
                                </h6>
                                <h6 className="font-weight-bold grey-text mb-3">
                                    {this.props.parentsData.phoneNumber}
                                </h6>
                                <h6 className="font-weight-bold grey-text mb-3">
                                    {this.props.parentsData.statusMessage}
                                </h6>
                                <p className="grey-text">
                                    {this.textLineBreak(this.props.parentsData.introduceMessage)}
                                </p>
                            </MDBCol>
                        </MDBCol>
                    </MDBRow>
                </MDBCardBody>
                {getUser() == this.props.parentsData.userId ? 
                (<MDBCol>
                    <MDBBtn outline color="black" className="profile-image-modify"
                                    onClick={this.onClick}>프로필 수정</MDBBtn>
                </MDBCol>) : (<></>)}
            </MDBCard>
        )
    }

}

export default MyInfoTopDefault;