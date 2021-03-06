import React from 'react';
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBBtn} from "mdbreact";
import FileUploadSection from './FileUploadSection';

class MyInfoTopModify extends React.Component{

    state = {
        email : '',
        phoneNumber : '',
        statusMessage : '',
        introduceMessage : '',
        file : ''
    }

    constructor(props){
        super(props);

        this._clickCancle = this._clickCancle.bind(this);
        this._handleChange = this._handleChange.bind(this);
        this._changeImage = this._changeImage.bind(this);
        this._sendUpdateUserInfo = this._sendUpdateUserInfo.bind(this);
    }

    componentDidMount(){
        this.setState({
            email : this.props.parentsData.email,
            phoneNumber : this.props.parentsData.phoneNumber,
            statusMessage : this.props.parentsData.statusMessage,
            introduceMessage : this.props.parentsData.introduceMessage
        });
    }

    _clickCancle = () => {
        this.props.clickModify();
    }

    _handleChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    _changeImage = (files) => {
        this.setState({
            file : files
        });
    }

    isEmailValidate = (email) =>{
        const emailRegex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        return emailRegex.test(email);
    }

    isPhoneNumberValidate = (phoneNumber) => {
        const phoneRegex = /^\d{3}-\d{3,4}-\d{4}$/;
        return phoneRegex.test(phoneNumber);
    }

    _sendUpdateUserInfo = (e) =>{
        e.preventDefault();

        if(!this.isEmailValidate(this.state.email)){
            alert("이메일 형식에 맞게 입력해주세요.");
            return false;
        }
        if(!this.isPhoneNumberValidate(this.state.phoneNumber)){
            alert("핸드폰 번호는 '-' 를 포함하여 입력해주세요.");
            return false;
        }

        if(this.state.statusMessage != '' && this.state.statusMessage != null){
            if(this.state.statusMessage.length > 2000){
                alert("문자의 길이는 2000자를 넘을 수 없습니다.");
                return false;
            }    
        }

        if(this.state.introduceMessage != '' && this.state.introduceMessage != null){
            if(this.state.introduceMessage.length > 2000){
                alert("문자의 길이는 2000자를 넘을 수 없습니다.");
                return false;
            }
        }

        this.props.sendUpdate(this.state);
    }

    render(){

        return(
            <MDBCard className="my-5 px-5 pb-1 mb-4 text-center">
                <MDBCardBody>
                    <MDBRow className="text-md-left">
                        <MDBCol lg="8" md="12" className="mb-5">
                            <MDBCol md="4" lg="6" className="float-left">
                                <FileUploadSection imgSrc={this.props.parentsData.profileHref}
                                                isModify={true} changeImage={this._changeImage}/>
                            </MDBCol>
                            <MDBCol md="6" lg="6" className="float-right">
                                <h4 className="font-weight-bold mb-3">
                                    {this.props.parentsData.username}
                                </h4>
                                <h6 className="font-weight-bold grey-text mb-3">
                                    이메일 : <input type="text" value={this.state.email} name="email" onChange={this._handleChange}/>
                                </h6>
                                <h6 className="font-weight-bold grey-text mb-3">
                                    전화번호 : <input type="text" value={this.state.phoneNumber} name="phoneNumber" onChange={this._handleChange}/>
                                </h6>
                                <h6 className="font-weight-bold grey-text mb-3">
                                    상태메시지 : <input type="text" value={this.state.statusMessage} name="statusMessage"
                                        placeholder="상태메시지를 입력하세요." onChange={this._handleChange}/>
                                </h6>
                                <p className="grey-text">
                                    자기소개 : <textarea
                                                className="form-control"
                                                id="exampleFormControlTextarea1"
                                                placeholder="자신에 대해 말해보세요!"
                                                rows="4"
                                                name="introduceMessage"
                                                value={this.state.introduceMessage}
                                                onChange={this._handleChange}
                                            />
                                </p>
                            </MDBCol>
                        </MDBCol>
                    </MDBRow>
                </MDBCardBody>
                <MDBCol>
                    <MDBBtn outline color="black" className="profile-image-modify" onClick={this._sendUpdateUserInfo}>수정완료</MDBBtn>
                    <MDBBtn outline color="black" className="profile-image-modify"
                                                onClick={this._clickCancle}>취소</MDBBtn>
                </MDBCol>
            </MDBCard>
        )
    }

}

export default MyInfoTopModify;