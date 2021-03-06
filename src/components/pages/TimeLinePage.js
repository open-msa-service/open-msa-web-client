import React from 'react';
import '../../css/timeline.css';
import TimeLineWriteSection from '../pages/sections/TimeLineWriteSection';
import axios from 'axios';
import {getUser, getToken} from '../../shared/auth';
import TimeLineCardSection from './sections/TimeLineCardSection';

class TimeLine extends React.Component{

    state = {
        userData : '',
        timeLine : []
    }

    constructor(props){
        super(props);

        this.sendTimelineContent = this.sendTimelineContent.bind(this);
        this._deleteTimeLine = this._deleteTimeLine.bind(this);
        this._modifyTimeLine = this._modifyTimeLine.bind(this);
    }

    componentWillMount(){
        let userId = getUser();
        let token = getToken();

        let config = {
            headers : {
                'Response-Type' : 'application/json',
            }
        }

        axios.get('/time/main/'+userId, config)
        .then((res) => {
            this.setState({
                userData : res.data.data.member,
                timeLine : res.data.data.timeline
            })
        }).catch(e => {
            alert(e.message);
            window.location = "/";
        });
    }

    sendTimelineContent = (data) =>{
        const requestData = new FormData();
        let fileNameString = [];
        for(let i=0; i < data.file.length; i++){
            requestData.append('file', data.file[i]);
            fileNameString.push(data.file[i].name);
        }

        if(data.content.length == 0){
            alert("게시물 내용을 입력해주세요.");
            return false;
        }
        
        let timeline = {
            content : data.content,
            scope : data.scope,
            userId : getUser(),
            fileNameList : fileNameString,
            profileHref : this.state.userData.profileHref,
            username : this.state.userData.username
        }

        requestData.append('timeline', JSON.stringify(timeline));
        
        axios.post("/time/write",
        requestData,
        {
            headers:{
                'Content-Type':'multipart/form-data',
            }
        }).then((res1)=>{
            alert(res1.data.message);
            window.location = "/home/timeline";
        }).catch((e)=>{
            alert("게시글 등록에 실패했습니다.");
            window.location = "/home/timeline";
        })

    }

    _deleteTimeLine = (timeId) =>{

        if(window.confirm('해당 게시물을 삭제 하시겠습니까?')){
            
            axios.delete("/time/delete/"+timeId, {
                headers:{
                    'Response-Type' : 'application/json'
                }
            })
            .then((res) => {
                alert(res.data.message);
                window.location = "/home/timeline";
            })
            .catch((e) => {
                alert(e.data.message);
                window.location = "/home/timeline";
            });

        }

    }

    
    _modifyTimeLine = (data) =>{
        const requestData = new FormData();
        let fileNameString = [];
        for(let i=0; i < data.file.length; i++){
            requestData.append('file', data.file[i]);
            fileNameString.push(data.file[i].name);
        }

        if(data.content.length == 0){
            alert("게시물 내용을 입력해주세요.");
            return false;
        }
        
        let timeline = {
            content : data.content,
            scope : data.scope,
            userId : getUser(),
            fileNameList : fileNameString,
            isUpdated : data.isUpdated,
            timeId : data.timeId,
            profileHref : this.state.userData.profileHref
        }
        
        requestData.append('timeline', JSON.stringify(timeline));

        axios.put("/time/update",
        requestData,
        {
            headers:{
                'Content-Type':'multipart/form-data',
            }
        }).then((res1)=>{
            alert(res1.data.message);
            window.location = "/home/timeline";
        }).catch((e)=>{
            alert("게시글 수정에 실패했습니다.");
            window.location = "/home/timeline";
        })
    }
    
    render(){
        return(
            <>
                <TimeLineWriteSection onCreate = {this.sendTimelineContent}/>
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

export default TimeLine;