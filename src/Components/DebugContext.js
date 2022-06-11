import React from 'react'
import Table from './Table'
import ReqButton from './ReqButton'

class DebugContext extends React.Component{
    constructor(props){
        super(props);
        this.state = {data: null}

        this.updateData = this.updateData.bind(this);
    }

    updateData = (response) => {
        this.setState({data : response.data});
    }

    render() {
        return  <>
                    <ReqButton updateData = {this.updateData} query = {this.props.query[0]}>requestStock</ReqButton>
                    <Table data = {this.state.data} button = {false} updateList = {this.updateList}/>
                </>
    }
}

export default DebugContext;