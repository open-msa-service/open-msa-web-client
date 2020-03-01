import React from 'react';
import { MDBCardImage } from "mdbreact";
import axios from 'axios';

class FileUploadSection extends React.Component{

    constructor(props){
        super(props);
        this.state={
            file:'',
            imagePreviewUrl:'',
        }

        this.handleImageChange = this.handleImageChange.bind(this);
    }

    componentWillMount(){
        this.setState({
            imagePreviewUrl:this.props.imgSrc
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
        
        this.props.changeImage(file);
    }

    render(){
        const isModify = this.props.isModify;

        return(
            <>
            <div className="profile-image-wrap">
                {isModify ? (<MDBCardImage
                    top
                    src={this.state.imagePreviewUrl}
                    alt="프로필사진 이미지"
                    className="profile-image"
                />) : (<MDBCardImage
                    top
                    src={this.props.imgSrc}
                    alt="프로필사진 이미지"
                    className="profile-image"
                />)}
            </div>
            {isModify ? (<div className="input-group">
                <div className="custom-file">
                    <input
                        type="file"
                        className="custom-file-input"
                        id="inputGroupFile01"
                        aria-describedby="inputGroupFileAddon01"
                        onChange={this.handleImageChange}
                        accept="image/jpg, image/jpeg, image/gif, image/png"
                    />
                    <label className="custom-file-label" htmlFor="inputGroupFile01">
                        {this.state.file.name}
                    </label>
                </div>
            </div>)
            : (<></>)}
            </>
        )
    }
}


export default FileUploadSection;