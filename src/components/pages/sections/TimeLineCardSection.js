import React from 'react';
import {  MDBCard, MDBCardBody , MDBBadge, MDBInput, MDBIcon, MDBContainer} from "mdbreact";
import PhotoCardSection from './PhotoCardSection';
import { getUser, getToken } from '../../../shared/auth';
import TimeLineModifyModalSection from './TimeLineModifyModalSection';
import axios from 'axios';



class TimeLineCardSection extends React.Component{

    state = {
        likeId : '',
        likeLength : 0
    }

    constructor(props){
        super(props);

        this._sendDeleteRequest = this._sendDeleteRequest.bind(this);
        this._openModifyTimeLine = this._openModifyTimeLine.bind(this);
        this._clickLikes = this._clickLikes.bind(this);
    }

    componentDidMount(){
        this.setState({
            likeLength : this.props.timeLine.likes.length
        })
    }

    textLineBreak = (lines) => {
        return lines ?
          lines.split(/[\r\n]/).map((partial, i) =>
            partial && <span key={i}>{partial}{i !== lines.length - 1 && <br />}</span>
          )
          : lines;
      };

    _sendDeleteRequest = () => {
        const timeId = this.props.timeLine.timeId;
        
        this.props.onDelete(timeId);

    }

    _openModifyTimeLine = (data) => {
        this.props.onModify(data);
    }

    _clickLikes = () =>{
        
        let likeId = this.state.likeId;
        
        const clickData = {
            likeId : likeId,
            tempTimeId : this.props.timeLine.timeId,
            userId : getUser()
        }

        const requestData = JSON.stringify(clickData);

        axios.post("/timeline/time/like", requestData, 
        {
            headers:{
                'Content-Type':'application/json',
                'Authorization' : getToken(),
                'Response-Type':'application/json'
            }
        }).then((res) => {
            
            const likeArray = res.data.data;
            
            this.setState({
                likeLength : likeArray.like.length
            })
            if(likeArray.like.length != 0){
                this.setState({
                    likeId : likeArray.like[0].likeId
                })  
            }else{
                this.setState({
                    likeId : ''
                })
            }
            
        }).catch((e) => {
            console.log(e);
        })
        
    }

    render(){
        
        const member = this.props.userData;
        const timeline = this.props.timeLine;

        return(
                <div className="timeline-card">
                    <MDBContainer className="d-flex">
                        <MDBCard news className="my-5">
                            <MDBCardBody>
                                <div className="content">
                                <div className="right-side-meta">{timeline.updateTime}
                                    {getUser() == member.userId ? 
                                    (<TimeLineModifyModalSection timeLine={timeline}
                                            onDelete={this._sendDeleteRequest} onModify={this._openModifyTimeLine}/>):(<></>)}
                                </div>
                                <img
                                    src={member.profileHref}
                                    alt="프로필 사진"
                                    className="profile-circle rounded-circle avatar-img z-depth-1-half"
                                />
                                    <span className="profile-name">{member.username}</span>
                                </div>
                            </MDBCardBody>
                            
                            {timeline.fileLocation != null ? (<PhotoCardSection imgSrc = {timeline.fileLocation}/>) : (<></>)}

                            <MDBCardBody>
                                <div className="social-meta">
                                    <p>{this.textLineBreak(timeline.content)}</p>
                                <span>
                                    <MDBIcon far icon="heart" onClick={this._clickLikes}/>&nbsp;
                                    {this.state.likeLength} likes
                                </span>
                                <p>
                                    <MDBIcon icon="comment" />
                                    13 comments
                                </p>
                                </div>
                                <hr />
                                <MDBInput far icon="heart" hint="Add Comment..." />
                            </MDBCardBody>
                        </MDBCard>
                    </MDBContainer>
                </div>
        )
    }

}

export default TimeLineCardSection;