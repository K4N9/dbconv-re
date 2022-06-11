import React, {Component, useEffect, useState} from 'react';
import axios from 'axios';
import { render } from '@testing-library/react';
import { useSearchParams } from 'react-router-dom';

/*
요청
{
  "transaction": "lookUpAll",
  "tableName": "COMMODITY_TB",
  "col": "COMMODITY_NO, COMMODITY_NM, COMMODITY_PRICE"
}
응답
{
  ["COMMODITY_NO", "COMMODITY_NM",...],
  [001, "삼다수", 1000]
}
*/
function stockMember() {
    var commoditydt;
    var commoditynm;
    var commodityprice;
    var eventno;
}

var stockMembers = [];

function stockMem(){
    var no;
    var commoditydt;
    var commoditynm;
    var commodityprice;
    var eventno;
}

function createNumber(){
    return <input type="number" min="0" />
}

function createButton(){
    return <button onClick={() => {}}></button>
}



class STOCK extends Component{
    toggle = false;
    state = {"transaction": "requestStock", "t": this.toggle};
    requestOption;
    stockMember = [];
    tb = document.getElementById("tb");
    result = [];
    lookUpCommodity = () => {
        try{
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
            .then(((res) => {
                //console.log(res)
                for(var i = 0; i < res.length; i++){
                    this.stockMember[i] = new stockMem();
                    this.stockMember[i].no = i;
                    this.stockMember[i].commoditydt = res[i].commoditydt;
                    this.stockMember[i].commoditynm = res[i].commoditynm;
                    this.stockMember[i].commodityprice = res[i].commodityprice;
                    this.stockMember[i].eventno = res[i].eventno;
                    this.result.push(<tr>
                        <th>{this.stockMember[i].commoditydt}</th>
                        <th>{this.stockMember[i].commoditynm}</th>
                        <th>{this.stockMember[i].commodityprice}</th>
                        <th>{this.stockMember[i].eventno}</th>
                        <th><input type="number" id="number" min="0" /></th>
                        <th><button >담기</button></th>
                    </tr>)

                    console.log(this.result)
                }
                //console.log(this.stockMember[0].commoditydt+"sadafasd")
                this.setState({
                    "t": !this.toggle
                })}))
            .then(() => {this.toggle = !this.toggle;});
            
        }
        catch{
            console.log('fetch error')
            return -1;
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.lookUpCommodity}>상품조회</button>
                <table data-sort="str" border="1px">
                    <thead>
                        <tr>
                            <th>유통기한</th>
                            <th>상품이름</th>
                            <th>상품가격</th>
                            <th>이벤트번호</th>
                            <th>상품수량</th>
                            <th>상품담기</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.result}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>
                            <button >결제하기</button>
                                
                            </th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        );
    }
}

export default STOCK;