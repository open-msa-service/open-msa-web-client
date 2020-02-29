import React from 'react';
import { MDBContainer, MDBCardBody, MDBCard, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import '../css/App.css';
import logo from "../assets/logo_2.png";

class RegistRight extends React.Component{
    state = {
        userId : '',
        password : '',
        username : '',
        email : '',
        phoneNumber : ''
    }
    
    constructor(props){
        super(props);
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = event =>{
        // 패이지 리로딩 방지
        event.preventDefault();

        // SignUp form validate
        if(!this.isEmailValidate(this.state.email)){
            alert("이메일 형식에 맞게 입력해주세요.");
            return false;
        }
        if(!this.isPhoneNumberValidate(this.state.phoneNumber)){
            alert("핸드폰 번호는 '-' 를 포함하여 입력해주세요.");
            return false;
        }

        /* 테스트를 위해 간편한 비밀번호 입력을 위한 주석처리
        if(!this.isPasswordValidate(this.state.password)){
            alert("비밀번호는 문자, 숫자, 특수문자를 포함하여 8~15자리를 입력해주세요.");
            return false;
        }
        */
        // 상태값을 onCreate를 통하여 부모에게 전달
        this.props.onCreate(this.state);

        // 상태 초기화
        this.setState({
            userId : '',
            password : '',
            username : '',
            email : '',
            phoneNumber : ''
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

    isPasswordValidate = (password) => {
        const passwordRegex = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
        return passwordRegex.test(password);
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        });
    }

    backToLogin = () =>{
        window.location = '/';
    }

    render(){
        return(
            <div className="form-wrap">
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="6" className="card-wrap">
                            <MDBCard>
                                <MDBCardBody className="mx-4">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="text-center">
                                        <img className="home-logo" src={logo} />
                                    </div>
                                    <div className="grey-text">
                                    <MDBInput label="아 이 디" icon="user" group type="text" onChange={this.handleChange}
                                        required name="userId" value={this.state.userId}/>
                                    <MDBInput label="비 밀 번 호" icon="lock" group type="password" required onChange={this.handleChange}
                                        name="password" value={this.state.password}/>
                                    <MDBInput label="이 름" icon="angry" group type="text" validate onChange={this.handleChange}
                                        required name="username" value={this.state.username}/>
                                    <MDBInput label="이 메 일" icon="envelope" group type="email" onChange={this.handleChange}
                                        required name="email" value={this.state.email}/>
                                    <MDBInput label="전 화 번 호" icon="phone" group type="text" onChange={this.handleChange}
                                        required name="phoneNumber" value={this.state.phoneNumber}/>
                                    </div>
                                    <div className="text-center">
                                        <MDBBtn color="primary" type="submit">가 입 완 료</MDBBtn>
                                        <MDBBtn color="primary" onClick={this.backToLogin}> 뒤 로 </MDBBtn>
                                    </div>
                                </form>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        )
    }
}

export default RegistRight;