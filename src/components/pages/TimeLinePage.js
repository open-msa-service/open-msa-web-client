import React from 'react';
import { MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput, MDBRow, MDBCol, MDBCardImage } from 'mdbreact';
import '../../css/timeline.css';

class TimeLine extends React.Component{

    render(){
        return(
            <>
                <MDBCard className="mb-4">
                    <MDBCardBody id="breadcrumb" className="d-flex align-items-center justify-content-between">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon">
                                <i className="fas fa-pencil-alt prefix"></i>
                                </span>
                            </div>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div>
                            <MDBBtn size="sm" color="primary" className="my-0" type="submit"><MDBIcon icon="search" /></MDBBtn>
                        </div>
                    </MDBCardBody>
                </MDBCard>
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