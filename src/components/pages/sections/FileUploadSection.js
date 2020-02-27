import React from 'react';
import { MDBCardImage, MDBIcon, MDBBtn } from "mdbreact";
import axios from 'axios';

class FileUploadSection extends React.Component{

    constructor(props){
        super(props);
        this.state={
            file:'',
            imagePreviewUrl:'',
        }

        this.handleImageChange = this.handleImageChange.bind(this);
        this.handleSubmitChange = this.handleSubmitChange.bind(this);
    }

    handleSubmitChange = (e) =>{
        // 여기서 프로필 사진 저장하자.
        const requestData = new FormData();
        requestData.append("file", this.state.file);
        axios.post(
            "/member/user/uploadFile",
            requestData,
            {headers : {
                'Content-Type' : 'multipart/form-data',
                'Authorization' : localStorage.getItem('token')
            }}
        )
        .then((res) => {
            console.log(res);
        })
        .catch((e) => {
            console.log(e);
        })
    }

    handleImageChange = (e) =>{
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () =>{
            this.setState({
                file: file,
                imagePreviewUrl : reader.result
            });
        }
        reader.readAsDataURL(file);

    }

    render(){

        return(
            <>
            <div className="profile-image-wrap">
                <MDBCardImage
                    top
                    //src={this.state.imagePreviewUrl}
                    src='/static/images/image_signin.png'
                    alt="프로필사진 이미지"
                    className="profile-image"
                />
            </div>
            <div className="input-group">
                <div className="custom-file">
                    <input
                        type="file"
                        className="custom-file-input"
                        id="inputGroupFile01"
                        aria-describedby="inputGroupFileAddon01"
                        onChange={this.handleImageChange}
                    />
                    <label className="custom-file-label" htmlFor="inputGroupFile01">
                        {this.state.file.name}
                    </label>
                </div>
            </div>
            <div>
                <MDBBtn outline color="black" className="profile-image-modify" onClick={this.handleSubmitChange}>프로필 사진 수정</MDBBtn>
            </div>
            
            </>
        )
    }
}


export default FileUploadSection;