import React from 'react';
import { MDBCardImage } from "mdbreact";

class FileUploadSection extends React.Component{

    constructor(props){
        super(props);
        this.state={
            file:'',
            imagePreviewUrl:'',
        }

        this.handleImageChange = this.handleImageChange.bind(this);
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
        
        this.props.onCreate(this.state);
    }

    render(){

        return(
            <>
            <div className="profile-image-wrap">
                <MDBCardImage
                    top
                    src={this.state.imagePreviewUrl}
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
                <div className="previewText">프로필 사진을 수정해보세요!</div>
            </div>
            
            </>
        )
    }
}


export default FileUploadSection;