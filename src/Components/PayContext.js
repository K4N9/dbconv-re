import React from 'react'
import Table from './Table'
import DropBox from './DropBox'
import ReqButton from './ReqButton'

class PayContext extends React.Component{
    constructor(props){
        super(props);
        this.state = {data: null, list: [], storeno: "1", paytype: "201", cardno: "", payprice: null, commodity: [], data2: null}

        this.updateData = this.updateData.bind(this);
        this.updateList = this.updateList.bind(this);
        this.updateStoreno = this.updateStoreno.bind(this);
        this.updatePaytype = this.updatePaytype.bind(this);
        this.updateCardno = this.updateCardno.bind(this);
        this.updateData2 = this.updateData2.bind(this);
    }

    updateData = (response) => {
        this.setState({data : response.data});
        console.log(response);
    }

    updateData2 = (response) => {
        this.setState({data2: response.data});
        console.log(response);
    }

    updateList = (element) => {
        this.setState({list : [...this.state.list, element]});
    }

    updateStoreno = (element) => {
        this.setState({storeno : element});
    }

    updatePaytype = (element) => {
        this.setState({paytype : element});
    }

    updateCardno = (event) => {
        this.setState({cardno: event.target.value});
    }

    render() {
        let data = null;
        let data2 = null;
        let data3 = null;
        if(this.state.data != null){
            data = this.state.data[0];
            data2 = this.state.data[1];
            data3 = this.state.data[2];
        }
        const arr = (this.state.list != []) && (this.state.list.map((element)=>{return ((element.rows[3] != null) ? ((parseInt((element.rows[3]).substr(0, 3)))/100 + 1):1) * element.rows[2] * element.amount}));
        let sum = 0;
        const a = arr ? arr.map((element) => {return sum += element;}) : 0; 
        let body = {
            transaction: this.props.query[1].transaction,
            storeno: this.state.storeno,
            paytypecd: this.state.paytype,
            cardno: this.state.cardno,
            payprice: String(sum),
            commodity: this.state.list.map((element) => {return {
                commodityno: String(element.rows[1]),
                paystockamt: element.amount,
                stockdt: element.rows[6]
            };})
        };
        return  <>
                    <ReqButton updateData = {this.updateData} query = {this.props.query[0]}>requestStock</ReqButton>
                    <Table data = {data} button = {true} updateList = {this.updateList}/>
                    <DropBox updateList = {this.updateList} data = {data2} updatePayinfo = {this.updateStoreno} paytype = {false}/>
                    <DropBox updateList = {this.updateList}  data = {data3} updatePayinfo = {this.updatePaytype} paytype = {true}/>
                    <input type="text" value={this.state.cardno} onChange = {this.updateCardno}/>
                    <Receipt list = {this.state.list}/>
                    <ReqButton updateData = {this.updateData2} query = {body}>Pay</ReqButton>


                </>
    }
}


class Receipt extends React.Component{
    constructor(props){
        super(props);
    }

    

    render() {
        const contents = ((this.props.list != []) && this.props.list.map((element)=>{
            return "상품명 : " + element.rows[0] + ", 개수 : " + element.amount + ", 가격 : " + element.rows[2] * element.amount * ((element.rows[3] != null) ? ((parseInt((element.rows[3]).substr(0, 3)))/100 + 1):1);
        }));
        const arr = (this.props.list != []) && (this.props.list.map((element)=>{return ((element.rows[3] != null) ? ((parseInt((element.rows[3].substr(0, 3)))/100 + 1)) : 1)* element.rows[2] * element.amount}));
        let sum = 0;
        const a = arr ? arr.map((element) => {return sum += element;}) : 0; 
        return <ul>
                    {contents != false && contents.map((element)=><li>{element}</li>)}
                    <li>총액 : {sum}</li>
               </ul>
    }
}

export default PayContext;