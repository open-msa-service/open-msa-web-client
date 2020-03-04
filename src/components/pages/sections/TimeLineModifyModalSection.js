import React from 'react';
import { MDBBadge, MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter,MDBCardBody,MDBCard,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from 'mdbreact';

class TimeLineModifyModalSection extends React.Component{

    fileObj = [];
    fileArray = [];

    state = {
        modal14: false,
        timeline : '',
        timeId : '',
        file: [],
        content : '',
        scope : 'ALL',
        isUpdated : false
    }

    constructor(props){
        super(props);

        this.toggle = this.toggle.bind(this);
        this._sendDeleteRequest = this._sendDeleteRequest.bind(this);
        this._sendModifyTimeLine = this._sendModifyTimeLine.bind(this);
        this.uploadMultipleFiles = this.uploadMultipleFiles.bind(this);
    }

      
    toggle = nr => () => {
        let modalNumber = 'modal' + nr
        this.setState({
            [modalNumber]: !this.state[modalNumber]
        });
    }

    _sendDeleteRequest = () =>{
        this.props.onDelete();
    }

    uploadMultipleFiles(e) {
        this.fileObj = [];
        this.fileArray = [];

        let files = e.target.files;

        this.setState({ file: e.target.files, isUpdated : true});

        this.fileObj.push(e.target.files)
        for (let i = 0; i < this.fileObj[0].length; i++) {
            this.fileArray.push(URL.createObjectURL(this.fileObj[0][i]))
        }
    }

    componentDidMount(){
        let tempLocation = this.props.timeLine.fileLocation;
        let tempArray = [];
        if(tempLocation!=null){
            tempArray = tempLocation.substring(0, tempLocation.length-1).split(',');
            this.fileArray = tempArray.map((src) => {
                return "/static/images/timeline/"+src;
            });
        }
        
        this.setState({
            content : this.props.timeLine.content,
            scope : this.props.timeLine.scope,
            timeline:this.props.timeLine,
            timeId : this.props.timeLine.timeId
        })
    }

    _handleChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    _sendModifyTimeLine = () =>{
        this.props.onModify(this.state);
    }

    render(){
        return(
            <>
                <MDBContainer>
                    <MDBDropdown>
                        <MDBDropdownToggle className="modify-delete" color="light">
                        <span className="modify-delete"><MDBBadge color="light">...</MDBBadge></span>                            
                        </MDBDropdownToggle>
                        <MDBDropdownMenu basic>
                            <MDBDropdownItem onClick={this.toggle(14)}>수정</MDBDropdownItem>
                            <MDBDropdownItem onClick={this._sendDeleteRequest}>삭제</MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown>
                    
                    <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered>
                    <MDBModalHeader toggle={this.toggle(14)}>게시글 수정</MDBModalHeader>
                    <MDBModalBody>
                    <MDBCard className="mb-4">
                    <MDBCardBody id="breadcrumb" className="d-flex align-items-center justify-content-between">
                        <MDBContainer>
                            <form>
                            <table>
                                <tbody>
                                <tr>
                                    <td colSpan="3">
                                        <textarea
                                                className="form-control"
                                                id="exampleFormControlTextarea1"
                                                placeholder="게시글을 작성해 보세요!"
                                                rows="4"
                                                name="content"
                                                value={this.state.content}
                                                onChange={this._handleChange}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="3">
                                        {(this.fileArray || []).map(url => (
                                            <img src={url} alt="..." className="timeline-preview"/>
                                        ))}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="file" className="form-control"
                                            accept="image/jpg, image/jpeg, image/gif, image/png"
                                            onChange={this.uploadMultipleFiles} multiple name="file"/>
                                    </td>
                                    <td>
                                        <select className="browser-default custom-select" name="scope" 
                                                    value={this.state.scope} onChange={this._handleChange}>
                                            <option value="ALL">전체공개</option>
                                            <option value="FRIEND">친구만</option>
                                        </select>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            </form>
                        </MDBContainer>            
                    </MDBCardBody>
                </MDBCard>
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn outline color="black" onClick={this.toggle(14)}>취 소</MDBBtn>
                        <MDBBtn outline color="black" onClick={this._sendModifyTimeLine}>수정완료</MDBBtn>
                    </MDBModalFooter>
                    </MDBModal>
                </MDBContainer>
            </>
        )
    }
}

export default TimeLineModifyModalSection;