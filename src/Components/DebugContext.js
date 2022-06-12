import React from 'react'
import Table from './Table'
import ReqButton from './ReqButton'
import DropBox from './DropBox'

class DebugContext extends React.Component{
    constructor(props){
        super(props);
        this.state = {tableName: null, tableData : null, tableNo : null}

        this.updateData = this.updateData.bind(this);
        this.updateTableNo = this.updateTableNo.bind(this);
    }

    updateData = (response) => {
        this.setState({tableName : response.data[0],
                    tableData : response.data[1]});
    }

    updateTableNo = (event) => {
        this.setState({tableNo : event});
    }

    render() {
        let tableData = (this.state.tableNo != null) ? this.state.tableData[this.state.tableNo] : null; 
        return  <>
                    <ReqButton updateData = {this.updateData} query = {{transaction: "reqDebug"}}>getTable</ReqButton>
                    <DropBox data = {this.state.tableName} updatePayinfo = {this.updateTableNo}></DropBox>
                    <Table data = {tableData} button = {false}/>
                </>
    }
}

export default DebugContext;