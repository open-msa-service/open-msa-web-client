import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';
import '../css/App.css';
import logo from "../assets/logo_2.png";

class RightBox extends React.Component{
    state = {
        username : '',
        password : ''
    }
    
    constructor(props){
        super(props);
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = event =>{
        // 패이지 리로딩 방지
        event.preventDefault();
        
        // 상태값을 onCreate를 통하여 부모에게 전달
        this.props.onCreate(this.state);

        // 상태 초기화
        this.setState({
            username:'',
            password:''
        });
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        });
    }

    render(){
        return(
            <div className="form-wrap">
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="6" className="card-wrap">
                            <MDBCard>
                                <MDBCardBody className="mx-4">
                                    <div className="text-center">
                                        <img className="home-logo" src={logo} alt="Home Logo"/>
                                    </div>
                                    <form onSubmit={this.handleSubmit}>
                                        <MDBInput
                                        label="아 이 디"
                                        group
                                        type="text"
                                        name="username"
                                        onChange={this.handleChange}
                                        required
                                        />
                                        <MDBInput
                                        label="비 밀 번 호"
                                        group
                                        type="password"
                                        name="password"
                                        onChange={this.handleChange}
                                        containerClass="mb-0"
                                        required
                                        />
                                        <p className="font-small blue-text d-flex justify-content-end pb-3">
                                            <a href="#!" className="blue-text ml-1">
                                                비밀번호 찾기
                                            </a>
                                        </p>
                                        <div className="text-center mb-3">
                                        <MDBBtn
                                            type="submit"
                                            gradient="blue"
                                            rounded
                                            className="btn-block z-depth-1a"
                                        >
                                            로 그 인
                                        </MDBBtn>
                                        </div>
                                    </form>
                                    <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">
                                        or Sign in with:
                                    </p>
                                    <div className="row my-3 d-flex justify-content-center">
                                    <MDBBtn
                                        type="button"
                                        color="white"
                                        rounded
                                        className="mr-md-3 z-depth-1a"
                                    >
                                        <MDBIcon fab icon="facebook-f" className="blue-text text-center" />
                                    </MDBBtn>
                                    <MDBBtn
                                        type="button"
                                        color="white"
                                        rounded
                                        className="z-depth-1a"
                                    >
                                        <MDBIcon fab icon="google-plus-g" className="blue-text" />
                                    </MDBBtn>
                                    </div>
                                </MDBCardBody>
                                <MDBModalFooter className="mx-5 pt-3 mb-1">
                                    <p className="font-small grey-text d-flex justify-content-end">
                                        사용자가 아닐 경우
                                        <a href="/regist" className="blue-text ml-1">
                                            회원가입
                                        </a>
                                    </p>
                                </MDBModalFooter>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        )
    }
}

export default RightBox;