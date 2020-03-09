import React from 'react';
import { MDBContainer, MDBModal, MDBModalBody, MDBModalHeader, MDBCardBody,MDBCard, MDBIcon, MDBCardHeader} from 'mdbreact';
import CommentListSection from './CommentListSection';

class CommentModalSection extends React.Component{

    state = {
        modal14 : false,
        comments : [],
        timeline : '',
    }

    constructor(props){
        super(props);

        this.toggle = this.toggle.bind(this);
    }

    componentDidMount(){
        this.setState({
            comments : this.props.comments,
            timeline : this.props.timeline
        })
    }

    toggle = nr => () => {
        let modalNumber = 'modal' + nr
        this.setState({
            [modalNumber]: !this.state[modalNumber]
        });
    }

    render(){
        return(
            <>
                <MDBIcon icon="comment" onClick={this.toggle(14)}>&nbsp;
                            {this.state.comments.length} comments</MDBIcon>
                <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered>
                    <MDBModalHeader toggle={this.toggle(14)}></MDBModalHeader>
                    <MDBModalBody>
                        <MDBCard className="mb-4">
                            <MDBCardBody id="breadcrumb" className="d-flex align-items-center justify-content-between">
                                <MDBContainer>
                                    {this.state.timeline.content}
                                </MDBContainer>            
                            </MDBCardBody>
                        </MDBCard>
                        <MDBCard className="mb-4">
                            <MDBCardHeader>댓글</MDBCardHeader>
                            <MDBCardBody id="breadcrumb" className="d-flex align-items-center justify-content-between">
                                <MDBContainer>
                                    {this.state.comments.map((comment, index) => (
                                        <CommentListSection key={index} comment={comment}/>
                                    ))}
                                </MDBContainer>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBModalBody>
                </MDBModal>
            </>
        )
    }
}


export default CommentModalSection;