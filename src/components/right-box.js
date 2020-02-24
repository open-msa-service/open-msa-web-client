import React from 'react';
import Social from './social-box';
import axios from 'axios';

class RightBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userId : '',
            password : ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit = event =>{
        event.preventDefault();
        console.log(this.state);
        axios({
            url:'/login',
            method:'post',
            data:JSON.stringify(this.state)
        });
    }

    handleChange = event =>{
        event.preventDefault();
        console.log("name : " + event.target.name + " value : " + event.target.value);
        this.setState=({
            [event.target.name]:event.target.value
        });
    }

    render(){
        const {userId} = this.state.userId;
        const {password} = this.state.password;
        return(
            <form onSubmit={this.handleSubmit}>
                <div className={'rightBox'}>
                    <div className={'box'}>
                        <div className={'titleAuth'}>Log into Codewhatever</div>
                        <div className={'inputSBox'}>
                            <input className={'inputS'} name="userId" onChange={this.handleChange}
                            value={userId} type={'text'} placeholder={'아이디'} /> 
                        </div>
                        <div className={'inputSBox'}>
                            <input className={'inputS'} name="password" onChange={this.handleChange}
                            value={password} type={'password'} placeholder={'비밀번호'} /> 
                        </div>
                        <div className={'contentBox'}>
                            <div className={'checkboxBox'}>
                                <input type={'checkbox'} className={'checkbox'} />
                                <label className={'checkboxLabel'}>Remember</label>
                            </div>
                            <div className={'text1'}>아이디/비밀번호찾기</div>
                        </div>
                        <div className={'btnAuth'} onClick={this.handleSubmit}>로그인</div>
                        <div className={'text1'}>회원가입</div>
                        <div className={'borderBox'}>
                            <div className={'line'} />
                            <div className={'text2 or'}>OR</div>
                        </div>
                        <Social />
                    </div>
                </div>
            </form>
        )
    }
}

export default RightBox;