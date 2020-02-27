import React from 'react';
import logo from "../assets/logo_2.png";
import { MDBListGroup, MDBListGroupItem, MDBIcon, MDBNavbarBrand } from 'mdbreact';
import { NavLink } from 'react-router-dom';

class TopNavigation extends React.Component{

    constructor(props){
        super(props);
    }

    render(){

        return (
            <div className="sidebar-fixed position-fixed">
                <MDBNavbarBrand href="/home" className="side-logo">
                    <img alt="MDB React Logo" className="img-fluid" src={logo}/>
                </MDBNavbarBrand>
                <MDBListGroup className="list-group-flush">
                    <NavLink to="/home/myinfo" activeClassName="activeClass">
                        <MDBListGroupItem>
                        <img
                            src="https://mdbootstrap.com/img/Photos/Avatars/img%20(17)-mini.jpg"
                            alt=""
                            className="mr-3 rounded-circle"
                        />
                        {this.props.userData.username}
                        </MDBListGroupItem>
                    </NavLink>
                    <NavLink to="/home/timeline" activeClassName="activeClass">
                        <MDBListGroupItem>
                            <MDBIcon icon="chart-pie" className="mr-3"/>
                            타 임 라 인
                        </MDBListGroupItem>
                    </NavLink>
                    <NavLink to="/home/friends" activeClassName="activeClass">
                        <MDBListGroupItem>
                            <MDBIcon icon="user-friends" className="mr-3"/>
                            친 구
                        </MDBListGroupItem>
                    </NavLink>
                    <NavLink to="/home/activelog" activeClassName="activeClass">
                        <MDBListGroupItem>
                            <MDBIcon icon="file-contract" className="mr-3"/>
                            활 동 로 그
                        </MDBListGroupItem>
                    </NavLink>
                    <NavLink to="/home/dashboard" activeClassName="activeClass">
                        <MDBListGroupItem>
                            <MDBIcon icon="chart-pie" className="mr-3"/>
                            Dashboard
                        </MDBListGroupItem>
                    </NavLink>
                    <NavLink to="/home/profile" activeClassName="activeClass">
                        <MDBListGroupItem>
                            <MDBIcon icon="user" className="mr-3"/>
                            Profile
                        </MDBListGroupItem>
                    </NavLink>
                    <NavLink to="/home/tables" activeClassName="activeClass">
                        <MDBListGroupItem>
                            <MDBIcon icon="table" className="mr-3"/>
                            Tables
                        </MDBListGroupItem>
                    </NavLink>
                    <NavLink to="/home/maps" activeClassName="activeClass">
                        <MDBListGroupItem>
                            <MDBIcon icon="map" className="mr-3"/>
                            Maps
                        </MDBListGroupItem>
                    </NavLink>
                    <NavLink to="/home/404" activeClassName="activeClass">
                        <MDBListGroupItem>
                            <MDBIcon icon="exclamation" className="mr-3"/>
                            404
                        </MDBListGroupItem>
                    </NavLink>
                </MDBListGroup>
            </div>
        );
    }
}

export default TopNavigation;