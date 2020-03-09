import React from 'react';
import MyInfoTopSection from './sections/MyInfoTopSection';
import TimeLineCardSection from './sections/TimeLineCardSection';
import axios from 'axios';
import { getToken, getUser } from '../../shared/auth';



class MemberVisitPage extends React.Component{

    state = ({
        userData : '',
        timeLine : [],
        isFriend : false
    })

    constructor(props){
        super(props);
    }

    componentDidMount(){
        // userId1 : my Id,  userId2 : search Id
        // /member/friend/timeline/{userId1}/{userId2}
        const params = this.props.match.params.userId;

        let config = {
            headers : {
                'Response-Type' : 'application/json',
                'Authorization' : getToken()
            }
        }

        axios.get('/member/user/friend/timeline/'+getUser()+"/"+params, config)
        .then((res) => {
            const tempTimeline = res.data.data.timeline;
            const timeLineArray = JSON.parse(tempTimeline);
            const isFriend = res.data.data.isFriend;
            
            console.log("Visit page data : ");
            console.log(res.data.data);

            this.setState({
                userData : res.data.data.member,
                timeLine : timeLineArray,
                isFriend : isFriend
            })
        }).catch(e => {
            alert(e.message);
            window.location = "/";
        });
    }


    render(){
        return(
            <>
                <MyInfoTopSection userData = {this.state.userData} isFriend={this.state.isFriend}/>
                <div className="timeline-wrap">
                {
                    this.state.timeLine.map((timeline, index) => (
                        <TimeLineCardSection timeLine={timeline} key={index}
                            userData={this.state.userData} onDelete={this._deleteTimeLine} onModify={this._modifyTimeLine} />
                    ))
                }
                </div>
            </>
        )
    }

}



export default MemberVisitPage;