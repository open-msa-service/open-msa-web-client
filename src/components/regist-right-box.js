import React from 'react';
import Social from './social-box';
import { Router, Link } from 'react-router-dom';

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
            alert("핸드폰 번호는 \'-\'를 포함하여 입력해주세요.");
            return false;
        }

        if(!this.isPasswordValidate(this.state.password)){
            alert("비밀번호는 문자, 숫자, 특수문자를 포함하여 8~15자리를 입력해주세요.");
            return false;
        }
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
            <form onSubmit={this.handleSubmit}>
                <div className={'rightBox'}>
                    <div className={'box'}>
                        <div className={'titleAuth'}>새 계정 만들기</div>
                        <div className={'inputSBox'}>
                            <input className={'inputS'} name="userId" onChange={this.handleChange}
                            value={this.state.userId} type={'text'} placeholder={'아 이 디'} maxLength="20" required/> 
                        </div>
                        <div className={'inputSBox'}>
                            <input className={'inputS'} name="password" onChange={this.handleChange}
                            value={this.state.password} type={'password'} placeholder={'비 밀 번 호'} required /> 
                        </div>
                        <div className={'inputSBox'}>
                            <input className={'inputS'} name="username" onChange={this.handleChange}
                            value={this.state.username} type={'text'} placeholder={'이 름'} maxLength="20" required/> 
                        </div>
                        <div className={'inputSBox'}>
                            <input className={'inputS'} name="email" onChange={this.handleChange}
                            value={this.state.email} type={'email'} placeholder={'이 메 일'} required/> 
                        </div>
                        <div className={'inputSBox'}>
                            <input className={'inputS'} name="phoneNumber" onChange={this.handleChange}
                            value={this.state.phoneNumber} type={'text'} placeholder={'전 화 번 호 (\'-\'를 포함하여 입력해주세요)'} required/> 
                        </div>
                        <div className={'register-blank'}></div>
                        <input type={'submit'} className={'btnRegist'} value={'가 입 완 료'} />
                        <div className={'register-blank'}></div>
                        <div className={'btnAuth'} onClick={this.backToLogin}>뒤 로</div>
                    </div>
                </div>
            </form>
        )
    }
}

export default RegistRight;