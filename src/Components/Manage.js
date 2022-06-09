/*
import React, { Component, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from '../App';
import Store from './Store';

<script id="s1">
    for(var i in props.length)
</script>
class ManageTable extends Component {
    print = () => {
        for(var i in len){
            
        }
    }
    render() {
        return (
            <div>
                <h2>
                    처리일자: <script>
                        </script>{this.props.col.managedt}<br />
                    직원번호: {this.props.col.empno}<br />
                    지점번호: {this.props.col.storeno}<br />
                    직급코드: {this.props.col.positioncd}<br />
                    출근시간: {this.props.col.gotm}<br />
                    퇴근시간: {this.props.col.leavetm}
                </h2>
            </div>
        );
    }
}

class Manage extends Component {
    constructor(props){
        super(props);
        this.len = Object.keys(props).length;
        this.state = { managedt: [null], empno: [null], storeno: [props.storeno], positioncd: [null], gotm: [null], leavetm: [null]};
    }

    searchManage = () => {
        try {
            
            this.requestOption = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(this.state),
            };
            fetch("http://119.192.46.84:80/", this.requestOption)
                .then((res) => res.json())
                .then((res) => {
                    this.setState({
                        managedt: res.managedt,
                        empno: res.empno,
                        positioncd: res.positioncd,
                        gotm: res.gotm,
                        leavetm: res.reavetm
                    })
                });
        }
        catch {
            console.log('fetch error')
            return 1;
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.searchManage}>인사정보 보기</button>
                <ManageTable col={this.state} />
            </div>
        );
    }


}


export default Manage;
*/