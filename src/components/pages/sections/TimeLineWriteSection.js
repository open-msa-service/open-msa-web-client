import React from 'react';
import { MDBCard, MDBCardBody, MDBBtn, MDBContainer} from 'mdbreact';


class TimeLineWriteSection extends React.Component{

    fileObj = [];
    fileArray = [];

    constructor(props) {
        super(props)
        this.state = {
            file: [],
            content : '',
            scope : 'ALL'
        }
        this.uploadMultipleFiles = this.uploadMultipleFiles.bind(this)
        this.uploadFiles = this.uploadFiles.bind(this)
    }

    _handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    uploadMultipleFiles(e) {
        this.fileObj = [];
        this.fileArray = [];

        let files = e.target.files;

        this.setState({ file: e.target.files});

        this.fileObj.push(e.target.files)
        for (let i = 0; i < this.fileObj[0].length; i++) {
            this.fileArray.push(URL.createObjectURL(this.fileObj[0][i]))
        }
        
    }

    uploadFiles(e) {
        e.preventDefault()
        this.props.onCreate(this.state);
    }
    render(){

        return(
            <MDBCard className="mb-4">
                    <MDBCardBody id="breadcrumb" className="d-flex align-items-center justify-content-between">
                        <MDBContainer>
                            <form>
                            <table>
                                <tbody>
                                <tr>
                                    <th>
                                        <label>게시글 만들기</label>
                                    </th>
                                </tr>
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
                                        <select className="browser-default custom-select" name="scope" value={this.state.value} onChange={this._handleChange}>
                                            <option value="ALL">전 체 공 개</option>
                                            <option value="FRIEND">친 구 만</option>
                                        </select>
                                    </td>
                                    <td>
                                        <MDBBtn outline color="black" className="profile-image-modify" onClick={this.uploadFiles}>게시글 등록</MDBBtn>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            </form>
                        </MDBContainer>            
                    </MDBCardBody>
                </MDBCard>
        )
    }
}

export default TimeLineWriteSection;