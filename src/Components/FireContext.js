import React from 'react'
import Table from './Table'
import DropBox from './DropBox'
import ReqButton from './ReqButton'

class FireContext extends React.Component{
    constructor(props){
        super(props);

        this.state = {data: null, empno: 1};
        this.updateData = this.updateData.bind(this);
        this.updateEmpno = this.updateEmpno.bind(this);
    }

    updateData = (response) => {
        this.setState({data : response.data});
        console.log("dropbox"+response.data);
    }

    updateEmpno = (element) => {
        this.setState({empno : element})
    }

    render() {
        let body = {
            transaction: this.props.query[1].transaction,
            employeeno: this.state.empno
        }

        return <>
            <br />
            <h2>직원해고</h2>
            <ReqButton updateData = {this.updateData} query = {this.props.query[0]}>requestFire</ReqButton>
            <DropBox data = {this.state.data} updatePayinfo = {this.updateEmpno} paytype = {false}/>
            <br /><br />
            <ReqButton updateData = {null} query = {body}>Fire</ReqButton>
            <br /><br />
        </>
    }
}

export default FireContext