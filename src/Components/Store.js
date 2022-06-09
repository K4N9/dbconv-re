/*
import { computeHeadingLevel } from '@testing-library/react';
import React, { Component, useEffect, useState } from 'react';
import App from '../App';
import Manage, {searchManage} from './Manage';



class StoreTable extends Component {
    render() {
        return (
            <div>
                <h2>
                    지점번호: {this.props.col.storeno}<br />
                    지점이름: {this.props.col.storenm}<br />
                    지점주소: {this.props.col.storeadr}<br />
                    전화번호: {this.props.col.phoneno}<br />
                    지점규모: {this.props.col.storesize}
                </h2>
                <Manage storeno={this.res}/>
            </div>
        );
    }
}

class Store extends Component {
    state = { storeno: null, storenm: null, storeadr: null, phoneno: null, storesize: null};
    requestOption;

    setStoreno = (e) => {
        this.setState({
            storeno: e.target.value,
        })
    } 

    searchStore = () => {
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
                        storenm: res.storenm,
                        storeadr: res.storeadr,
                        phoneno: res.phoneno,
                        storesize: res.storesize
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
                <h2>지점번호로 검색</h2>
                <input onChange={this.setStoreno} />
                <button onClick={this.searchStore}>검색</button>
                <StoreTable col={this.state} />
            </div>
        );
    }

}

export default Store;
*/