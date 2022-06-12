import React from 'react'
import Table from './Table'
import DropBox from './DropBox'
import ReqButton from './ReqButton'

class FireContext extends React.Component{
    constructor(props){
        super(props);

        this.state = {data: null, storeno: "1", empnm: "", empno: ""};
        this.updataData = this.updataData.bind(this);
        this.updateStoreno = this.updateStoreno.bind(this);
        this.updateEmpnm = this.updateEmpnm.bind(this);
        this.updateEmpno = this.updateEmpno.bind(this);
    }

    updataData = (response) => {
        this.setState({data : response.data});
    }

    updateStoreno = (element) => {
        this.setState({data : element});
    }

    updateEmpnm = (event) => {
        this.setState({empnm : event.target.value})
    }

    updateEmpno = (event) => {
        this.setState({empno : event.target.value})
    }

    render() {
        let data = null;

        if(this.state.data != null){
            data = this.state.data[0];
        }

        body = {
            transaction: this.props.query[0].transaction,
            employeenm: this.state.empnm
        }

        body2 = {
            transaction: this.props.query[1].transaction,
            employeenm: this.state.empnm,
            employeeno: this.state.empno
        }

        return <>
            <h2>직원해고</h2>
            <li>직원이름: <input type="text" value = {this.state.empnm} onChange = {this.updateEmpnm}/></li>
            <ReqButton updataData = {this.updataData} query = {body}>requestFire</ReqButton>
            {/* (metaData, rows) -> EMPLOYEE_TB */}
            <Table data = {data} button = {false} updateList = {null}/>
            <li>직원번호: <input type="text" value = {this.state.empno} onChange = {this.updateEmpno}/></li>
            <ReqButton updateData = {null} query = {body2}>Fire</ReqButton>
        </>
    }
}

export default FireContext