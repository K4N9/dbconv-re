import React from 'react'
import Table from './Table'
import DropBox from './DropBox'
import ReqButton from './ReqButton'

class RefundContext extends React.Component{
    constructor(props){
        super(props);
        this.state = {payno: null, data: null, list: []};

        this.updatePayno = this.updatePayno.bind(this);
        this.updateData = this.updateData.bind(this);
        this.updateData2 = this.updateData2.bind(this);
        
    }

    updatePayno = (event) => {
        this.setState({payno: event.target.value})
    }

    updateData = (response) => {
        this.setState({data: response.data});
        console.log(response.data);
    }

    updateData2 = (response) => {
        this.setState({data2: response.data});
        console.log(response);
    }


    render(){
        let data = null;
        let data2 = null;
        if(this.state.data != null){
            data = this.state.data[0].rows;
            data2 = this.state.data[1].rows;
        }

        let body = {
            transaction: this.props.query[0].transaction,
            payno: this.state.payno
        }

        let body2 = {
            transaction: this.props.query[1].transaction,
            payno: this.state.payno
        }

        return <>
            <h2>환불</h2>
            <input type="text" onChange={this.updatePayno}/>
            <ReqButton updateData = {this.updateData} query = {body}>requestPay</ReqButton>
            {/* data = {(metaData, rows) -> PAY_TB, (metaData, rows) -> PAY_STOCK_TB}? */}
            <Refund data = {data} data2 = {data2}/>
            <ReqButton updateData = {null} query = {body2}>Refund</ReqButton>
        </>
    }
}

class Refund extends React.Component{
    constructor(props){
        super(props);
    
    }

    render() {
        const content =((this.props.data != null) && this.props.data.map((element) => {
            return "결제번호 : " + element[0] + ", 지점번호 : " + element[1] + ((element[2] != null)? "카드번호 : " + element[2]: "카드번호 : ")
            + ", 결제금액 : " + element[3] + ", 결제일자 : " + (element[4]).substr(0, 10);
        }))
        const contents = ((this.props.data2 != null) && this.props.data2.map((element) => {
            return "결제수량 : " + element[1] + ", 물품번호 : " + element[2] + ", 유통기한 : " + (element[3]).substr(0, 10);
        }));
        return <ul>
            {content != false && content.map((element) => <li>{element}</li>)}
            {contents != false && contents.map((element) => <li>{element}</li>)}
        </ul>
    }
}

export default RefundContext;