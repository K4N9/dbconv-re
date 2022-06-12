import React from 'react'
import Table from './Table'
import DropBox from './DropBox'
import ReqButton from './ReqButton'

class OrderContext extends React.Component{
    constructor(props){
        super(props);
        this.state = {tableData : null, listData : [], storeName: null, storeNo: 1}

        this.updateTableData = this.updateTableData.bind(this);
        this.updateListData = this.updateListData.bind(this);
        this.updateStoreNo = this.updateStoreNo.bind(this);
    }

    updateTableData = (response)=>{
        this.setState({tableData: response.data[0],
                       storeName: response.data[1]});
    }

    updateListData = (content)=>{
        this.setState({listData: [...this.state.listData, content]});
    }

    updateStoreNo = (value)=>{
        this.setState({storeNo: value});
    }

    render() {
        let list = (this.state.listData != []) ? this.state.listData.map((element)=>{return {commodityno : element.rows[0], orderamt:element.amount}}):[];
        let query = {
            transaction : "makeOrder", storeno: this.state.storeNo,
            list : list
        }
        return <> 
                    <h2>재고주문</h2>
                   <ReqButton query = {{transaction : "reqMakeOrder"}} updateData = {this.updateTableData}>reqCommodity</ReqButton>
                   <Table data = {this.state.tableData} button = {true} updateList = {this.updateListData}/>
                   <OrderList listData = {this.state.listData}></OrderList>
                   <DropBox data = {this.state.storeName} updatePayinfo = {this.updateStoreNo}></DropBox>
                   <ReqButton query = {query}>sendOrder</ReqButton> 
               </>
    }
}

class OrderList extends React.Component{
    render() {
        if(this.props.listData == [])
            return;
        const content = this.props.listData.map((element)=>{
            return "상품명 : " + element.rows[1] + ", 개수 : " + element.amount;
        })
        return <ul>
                   {content.map((element)=><li>{element}</li>)}
               </ul>

    }

}

export default OrderContext;