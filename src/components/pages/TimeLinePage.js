import React from 'react';
import { MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput, MDBRow, MDBCol, MDBCardImage, MDBFormInline, MDBContainer, MDBInputGroup} from 'mdbreact';
import '../../css/timeline.css';
import TimeLineWriteSection from '../pages/sections/TimeLineWriteSection';
import axios from 'axios';
import {getUser, getToken} from '../../shared/auth';

class TimeLine extends React.Component{

    constructor(props){
        super(props);

        this.sendTimelineContent = this.sendTimelineContent.bind(this);
    }

    sendTimelineContent = (data) =>{
        const requestData = new FormData();
        let fileNameString = [];
        for(let i=0; i < data.file.length; i++){
            requestData.append('file', data.file[i]);
            fileNameString.push(data.file[i].name);
        }

        let timeline = {
            content : data.content,
            scope : data.scope,
            userId : getUser(),
            fileNameList : fileNameString
        }
        
        axios.post("/timeline/time/upload/content",
        JSON.stringify(timeline),
        {
            headers:{
                'Content-Type':'application/json',
                'Authorization' : getToken()
            }
        }).then((res1)=>{
            axios.post("/timeline/time/upload/image",
                requestData,
                {
                    headers:{
                        'Content-Type' : 'multipart/form-data',                
                        'Authorization' : getToken()
                    }
                })
            .then( (res2) => {
                alert(res1.data.message);
            })
            .catch( (e) => {
                console.log(e);
            })
        }).catch((e)=>{
            console.log(e);
        })

    }

    
    render(){
        return(
            <>
                <TimeLineWriteSection onCreate = {this.sendTimelineContent}/>

                <MDBRow>
                <MDBCol md="6" lg="4">
                    <MDBCard news className="my-5">
                    <MDBCardBody>
                        <div className="content">
                        <div className="right-side-meta">14 h</div>
                        <img
                            src="https://mdbootstrap.com/img/Photos/Avatars/img%20(17)-mini.jpg"
                            alt=""
                            className="rounded-circle avatar-img z-depth-1-half"
                        />
                        Kate
                        </div>
                    </MDBCardBody>
                    <MDBCardImage
                        top
                        src="https://mdbootstrap.com/img/Photos/Others/girl1.jpg"
                        alt=""
                    />
                    <MDBCardBody>
                        <div className="social-meta">
                        <p>Another great adventure! </p>
                        <span>
                            <MDBIcon far icon="heart" />
                            25 likes
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
                </MDBCol>
                </MDBRow>
            </>
        )
    }

}

export default TimeLine;