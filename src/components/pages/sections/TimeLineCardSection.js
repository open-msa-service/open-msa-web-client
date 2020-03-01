import React from 'react';import {  MDBRow, MDBCol, MDBCard, MDBCardBody , MDBCardImage, MDBInput, MDBIcon} from "mdbreact";



class TimeLineCardSection extends React.Component{
    
    render(){
        return(
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
        )
    }

}

export default TimeLineCardSection;