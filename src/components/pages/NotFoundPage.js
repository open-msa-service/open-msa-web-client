import React from 'react'
import { MDBCol, MDBRow } from 'mdbreact';
import logo from "../../assets/mdb-react.png";


const NotFoundPage =  () => {
  return (
    <React.Fragment>
      <div className="full">
        <MDBRow className="bad-gateway-row">
          <MDBCol md="8">
            <h2 className="h2-responsive mt-3 mb-2">조회결과가 없습니다.</h2>
            <h4>다시 조회해 주세요.</h4>
          </MDBCol>
          <MDBCol md="4">
            <img alt="Error 404" className="img-fluid" src="https://mdbootstrap.com/img/Others/grafika404-bf.png"/>
          </MDBCol>
        </MDBRow>
      </div>
    </React.Fragment>
  )
}

export default NotFoundPage;