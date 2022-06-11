import React from 'react'
import Table from './Table'
import ReqButton from './ReqButton'

class PayContext extends React.Component{
    constructor(props){
        super(props);
        this.state = {data: null, list: [], storeno : null}

        this.updateData = this.updateData.bind(this);
        this.updateList = this.updateList.bind(this);
    }

    updateData = (response) => {
        this.setState({data : response.data});
    }

    updateList = (element) => {
        this.setState({list : [...this.state.list, element]});
    }

    render() {
        return  <>
                    <ReqButton updateData = {this.updateData} query = {this.props.query[0]}>requestStock</ReqButton>
                    <Table data = {this.state.data} button = {true} updateList = {this.updateList}/>
                    <Receipt list = {this.state.list}/>
                    <ReqButton updateData = {null} query = {this.props.query[1]}>pay</ReqButton>
                </>
    }
}

class Receipt extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        const contents = ((this.props.list != []) && this.props.list.map((element)=>{
            return "상품명 : " + element.rows[0] + ", 개수 : " + element.amount + ", 가격 : " + element.rows[2] * element.amount;
        }));
        const arr = (this.props.list != []) && (this.props.list.map((element)=>{return element.rows[2] * element.amount;}));
        let sum = 0;
        const a = arr ? arr.map((element) => {return sum += element;}) : 0; 
        return <ul>
                    {contents != false && contents.map((element)=><li>{element}</li>)}
                    <li>총액 : {sum}</li>
               </ul>
    }
}

export default PayContext;