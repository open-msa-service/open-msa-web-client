import React from 'react';
import {  MDBCard, MDBCardBody , MDBBtn, MDBInput, MDBIcon, MDBContainer} from "mdbreact";
import PhotoCardSection from './PhotoCardSection';
import { getUser, getToken } from '../../../shared/auth';
import TimeLineModifyModalSection from './TimeLineModifyModalSection';
import CommentModalSection from './CommentModalSection';
import axios from 'axios';



class TimeLineCardSection extends React.Component{

    state = {
        likeId : '',
        likeLength : 0,
        content : '',
    }

    constructor(props){
        super(props);

        this._sendDeleteRequest = this._sendDeleteRequest.bind(this);
        this._openModifyTimeLine = this._openModifyTimeLine.bind(this);
        this._clickLikes = this._clickLikes.bind(this);
        this._handleChange = this._handleChange.bind(this);
    }

    componentDidMount(){
        this.setState({
            likeLength : this.props.timeLine.likes.length,
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
            alert("좋아요 처리시 에러가 발생했습니다.");
        })
        
    }

    _handleChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    _writeComments = () =>{
        
        let data = {
            content : this.state.content,
            userId : getUser(),
            tempTimeId : this.props.timeLine.timeId,
            username : this.props.userData.username,
            profileHref : this.props.userData.profileHref
        }
       if(this.state.content == null || this.state.content == ''){
           alert("내용을 입력하세요!");
           return false;
       }
        axios.post("/comment/write", JSON.stringify(data), 
        {
            headers :{
                'Content-Type' : 'application/json',
                'Response-Type' : 'application/json'
            }
        }).then((res) => {
            alert(res.data.message);
            window.location = "/home/main";
        }).catch((e)=>{
            alert(e);
            window.location = "/home/main";
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
                                        {getUser() == timeline.userId ? 
                                        (<TimeLineModifyModalSection timeLine={timeline}
                                                onDelete={this._sendDeleteRequest} onModify={this._openModifyTimeLine}/>):(<></>)}
                                    </div>
                                    <img
                                        src={timeline.profileHref}
                                        alt="프로필 사진"
                                        className="profile-circle rounded-circle avatar-img z-depth-1-half"
                                    />
                                    <span className="profile-name">{timeline.username}</span>
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
                                        <CommentModalSection comments = {timeline.comments} timeline={timeline}/>
                                    </p>
                                </div>
                                <hr />
                                <MDBInput far icon="heart" hint="Add Comment..." name="content" onChange={this._handleChange}/>
                                <MDBBtn outline color="black" className="profile-image-modify"
                                    onClick={this._writeComments}>댓글작성</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBContainer>
                </div>
        )
    }

}

export default TimeLineCardSection;