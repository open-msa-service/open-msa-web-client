import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBIcon, MDBFormInline, MDBBtn } from 'mdbreact';
import {getUser, getToken} from '../shared/auth';


class TopNavigation extends Component {
    state = {
        collapse: false,
        username : ''
    }

    constructor(props){
        super(props);

        this._handleChange = this._handleChange.bind(this);
        this._findMemberSubmit = this._findMemberSubmit.bind(this);
        this._keyPressEvent = this._keyPressEvent.bind(this);
    }

    onClick = () => {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    _handleChange = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    _findMemberSubmit = () =>{
        if(this.state.username.length == 0){
            alert("친구 이름을 입력하세요.");
            return false;
        }
        window.location = "/home/search/"+this.state.username;
        
    }

    _keyPressEvent = (e) =>{
        if(e.charCode === 13){
            this._findMemberSubmit();
        }
    }

    toggle = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    logout = () => {
        if(window.confirm("로그아웃 하시겠습니까?")){
            localStorage.removeItem(getUser());
            localStorage.removeItem(getToken());

            window.location = "/";
        }
    }

    render() {
        return (
            <MDBNavbar className="flexible-navbar" light expand="md" scrolling>
                <MDBNavbarBrand href="/home/main">
                    <strong>GC</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick = { this.onClick } />
                <MDBCollapse isOpen = { this.state.collapse } navbar>
                    <MDBNavbarNav center>
                    <div className="md-form m-0">
                        <input className="nav-search" type="search" name="username" placeholder="  친구검색" aria-label="Search"
                                    onChange={this._handleChange} onKeyPress={this._keyPressEvent}/>
                        <MDBBtn size="sm" color="primary" className="my-0" type="submit" onClick={this._findMemberSubmit}><MDBIcon icon="search" /></MDBBtn>
                    </div>
                    </MDBNavbarNav>
                    <MDBNavbarNav right>
                        <MDBNavItem>
                            <a className="nav-link navbar-link" rel="noopener noreferrer" target="_blank" href="/home"><MDBIcon icon="user" /></a>   
                        </MDBNavItem>
                        <MDBNavItem>
                            <a className="nav-link navbar-link" rel="noopener noreferrer" target="_blank" href="/home"><MDBIcon icon="bell" /></a>
                        </MDBNavItem>
                        <MDBNavItem>
                            <a className="nav-link navbar-link"><MDBIcon icon="sign-out-alt" onClick={this.logout} /></a>
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
        );
    }
}

export default TopNavigation;