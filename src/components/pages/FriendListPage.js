import React from 'react';
import axios from 'axios';
import { getUser, getToken } from '../../shared/auth';
import { MDBContainer, MDBModal, MDBModalBody, MDBModalHeader, MDBCardBody,MDBCard, MDBIcon, MDBCardHeader} from 'mdbreact';
import FriendSection from './sections/FriendSection';

class FriendListPage extends React.Component{

    state = {
        friend : [],
        requestFriend : []
    }

    constructor(props){
        super(props);

    }

    componentDidMount(){
        axios.get("/friend/allList/" + getUser(), {
            headers:{
                'Authorization' : getToken()
            }
        })
        .then((res) => {
            this.setState({
                friend : res.data.data.friend,
                requestFriend : res.data.data.requestFriend
            })
        })
        .catch((e) => {
            alert(e.data.message);
        })
    }

    render(){
        return(
            <>
                <MDBCard className="mb-4">
                    <MDBCardHeader>친구요청</MDBCardHeader>
                    <MDBCardBody id="breadcrumb" className="d-flex align-items-center justify-content-between">
                        <MDBContainer>
                            {this.state.requestFriend.map((friend, index)  =>(
                                <FriendSection parentsData = {friend} key={index} accept={true}/>
                            ))}
                        </MDBContainer>            
                    </MDBCardBody>
                </MDBCard>
                <MDBCard className="mb-4">
                    <MDBCardHeader>친구목록</MDBCardHeader>
                    <MDBCardBody id="breadcrumb" className="d-flex align-items-center justify-content-between">
                        <MDBContainer>
                            {this.state.friend.map((friend, index) => (
                                <FriendSection parentsData = {friend} key={index} accept={false}/>
                            ))}
                        </MDBContainer>
                    </MDBCardBody>
                </MDBCard>
            </>
        )
    }

}

export default FriendListPage;