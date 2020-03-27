import React from 'react';
import axios from 'axios';
import { getToken } from '../../shared/auth';
import FriendSection from './sections/FriendSection';
import NotFoundPage from './NotFoundPage';

class MemberSearchPage extends React.Component{

    state = {
        username : '',
        params : []
    }

    constructor(props){
        super(props);

    }

    componentDidMount(){
        
        const params = this.props.match.params.username;
        
        this.setState({
            username : params
        });
        axios.get("/member/search/" + params,
        {
            headers : {
                'Authorization' : getToken(),
                'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
                'Response-Type' : 'application/json'
            }
        }).then((res) => {
            let tempData = res.data.data;
            
            this.setState({
                params : res.data.data
            })
        }).catch((e) => {
            alert("조회에 실패했습니다.");
            console.log(e);
            window.loaction = "/home";
        })

    }

    render(){
        return(
            <>
                <div className="timeline-wrap">
                    {this.state.params.length == 0 ? (<NotFoundPage />)
                    :(
                        this.state.params.map((member, index)=>(
                            <FriendSection parentsData={member} key={index} accept={false}/>
                        ))
                    )}
                </div>
            </>
        )
    }

}


export default MemberSearchPage;