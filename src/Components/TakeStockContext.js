import React from 'react'
import Table from './Table'
import DropBox from './DropBox'
import ReqButton from './ReqButton'


class TakeStockContext extends React.Component{
    constructor(props){
        super(props);
        this.state = {data: null, list: []};

        this.updateData = this.updateData.bind(this);
        this.updateList = this.updateList.bind(this);
    }

    updateData = (response) => {
        this.setState({data: response.data});
    }

    updateList = (element) => {
        this.setState({list: [...this.state.list, element]});
    }

    render() {
        let data = null;
        var content = this.state.list.map((element) => {return {storeno: element[0], commodityno: element[1], orderamt: element[2]}});

        let body = {
            transaction: "takeStock",
            contents: content 
        }


        return <>
            <h2>재고수령</h2>
            <ReqButton updateData = {this.updateData} query = {{transaction: "reqTakeStock"}}>requestTakeStock</ReqButton> 
            <Table data = {this.state.data} button = {2} updateList = {this.updateList}/>
            <List list = {this.state.list}/>
            <ReqButton updateData = {null}  query = {body}>TakeStock</ReqButton>
            <br /><br />
        </>
    }
}

class List extends React.Component{
    constructor(props){
        super(props);
    }

    render() {

        return <ul>
            {this.props.list.map((element) => <li>commodityno {element[1]} amt {element[2]}</li>)}
        </ul>
    }
}

export default TakeStockContext