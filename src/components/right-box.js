import React from 'react';
import Social from './social-box';
import { Router, Link } from 'react-router-dom';

class RightBox extends React.Component{
    state = {
        userid : '',
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
            userid:'',
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
            <form onSubmit={this.handleSubmit}>
                <div className={'rightBox'}>
                    <div className={'box'}>
                        <div className={'titleAuth'}>L O G O</div>
                        <div className={'inputSBox'}>
                            <input className={'inputS'} name="userid" onChange={this.handleChange}
                            value={this.state.userid} type={'text'} placeholder={'아 이 디'} /> 
                        </div>
                        <div className={'inputSBox'}>
                            <input className={'inputS'} name="password" onChange={this.handleChange}
                            value={this.state.password} type={'password'} placeholder={'비 밀 번 호'} /> 
                        </div>
                        <div className={'contentBox'}>
                            <div className={'checkboxBox'}>
                                <input type={'checkbox'} className={'checkbox'} />
                                <label className={'checkboxLabel'}>Remember</label>
                            </div>
                            <div className={'text1'}>아이디/비밀번호찾기</div>
                        </div>
                        <div className={'btnAuth'} onClick={this.handleSubmit}>로 그 인</div>
                        <Link to="/regist" className={'text1'}>회원가입</Link>
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