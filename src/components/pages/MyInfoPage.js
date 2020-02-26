import React from 'react';
import {  MDBRow, MDBCol, MDBCard, MDBCardBody } from "mdbreact";
import FileUploadSection from './sections/FileUploadSection';
import '../../css/timeline.css'

class MyInfoPage extends React.Component{
    
    sendImageFile = (data) =>{
        console.log(data);
    }


    render(){
        return(
            <>
                <MDBCard className="my-5 px-5 pb-1 mb-4 text-center">
                    <MDBCardBody>
                        <MDBRow className="text-md-left">
                            <MDBCol lg="8" md="12" className="mb-5">
                                <MDBCol md="4" lg="6" className="float-left">
                                    <FileUploadSection onCreate={this.sendImageFile}/>
                                </MDBCol>
                                <MDBCol md="6" lg="6" className="float-right">
                                    <h4 className="font-weight-bold mb-3">사용자 이름</h4>
                                    <h6 className="font-weight-bold grey-text mb-3">
                                        상태 메세지
                                    </h6>
                                    <p className="grey-text">
                                        자기 소개에 관한 내용? 수정할 수 있게 뭘 해주던가 해야할듯
                                    </p>
                                </MDBCol>
                                <MDBCol md="2" lg="6" className="float-right">
                                    친구들 볼 수 있게?
                                </MDBCol>
                            </MDBCol>
                        </MDBRow>
                    </MDBCardBody>
                </MDBCard>
                <div>
                    여기에는 내가 쓴 글들이 나오면 될 듯
                </div>
            </>
        )
    }
}

export default MyInfoPage;