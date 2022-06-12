import React from 'react'
import DropBox from './DropBox'
import ReqButton from './ReqButton'

class ReqruitContext extends React.Component{
    constructor(props){
        super(props);
        // (입력값 : 직원이름, 직원주소, 전화번호, 주민등록번호, 지점이름->번호, 출근시간, 퇴근시간, 직원시급, 직급이름->코드)
        this.state = {data: null, storeno: "1", positioncd: "103", empnm: "", empadr: "", phoneno: "", personalno: "",
                      gotm: "", leavetm: "", empwage: "10000"};
    
        this.updateData = this.updateData.bind(this);
        this.updateStoreno = this.updateStoreno.bind(this);
        this.updatePositioncd = this.updatePositioncd.bind(this);
        this.updateEmpnm = this.updateEmpnm.bind(this);
        this.updateEmpadr = this.updateEmpadr.bind(this);
        this.updatePhoneno = this.updatePhoneno.bind(this);
        this.updatePersonalno = this.updatePersonalno.bind(this);
        this.updateGotm = this.updateGotm.bind(this);
        this.updateLeavetm = this.updateLeavetm.bind(this);
        this.updateEmpwage = this.updateEmpwage.bind(this);
    }

    updateData = (response) => {
        this.setState({data : response.data});
        console.log(response.data + "reqruit log");
    }

    updateStoreno = (element) => {
        this.setState({storeno : element});
    }

    updatePositioncd = (element) => {
        this.setState({positioncd : element});
    }

    updateEmpnm = (element) => {
        this.setState({empnm : element});
    }

    updateEmpadr = (element) => {
        this.setState({empadr : element});
    }

    updatePhoneno = (element) => {
        this.setState({phoneno : element});
    }

    updatePersonalno = (element) => {
        this.setState({personalno : element});
    }

    updateGotm = (element) => {
        this.setState({gotm : element});
    }

    updateLeavetm = (element) => {
        this.setState({leavetm : element});
    }

    updateEmpwage = (element) => {
        this.setState({empwage : element});
    }


    render() {
        let data = null;
        let data2 = null;
        if(this.state.data != null){
            data = this.state.data[0];
            data2 = this.state.data[1];
        }

        let body = {
            transaction : this.props.query[1].transaction,
            storeno : this.state.storeno,
            positioncd : this.state.positioncd,
            employeenm : this.state.empnm,
            employeeadr : this.state.empadr,
            phoneno : this.state.phoneno,
            personalno : this.state.personalno,
            gotm : this.state.gotm,
            leavetm : this.state.leavetm,
            employeewage : this.state.empwage,
        }

        return <>
            <h2>직원채용</h2>
            <ReqButton updateData = {this.updateData} query = {this.props.query[0]}>requestReqruit</ReqButton>
            <DropBox data={data} updatePayinfo = {this.updateStoreno} paytype = {false}/>
            <DropBox data={data2} updatePayinfo = {this.updatePositioncd} paytype = {false}/>
            <h3>인적사항</h3>
            <EmpInfo updateEmpnm = {this.updateEmpnm} updateEmpadr = {this.updateEmpadr} updatePhoneno = {this.updatePhoneno} updatePersonalno = {this.updatePersonalno}
                     updateGotm = {this.updateGotm} updateLeavetm = {this.updateLeavetm} updateEmpwage = {this.updateEmpwage} value = {this.state}/>
            <ReqButton updateDAte = {null} query = {body}>Reqruit</ReqButton>          
        </>
    }

}

class EmpInfo extends React.Component{
    constructor(props){
        super(props);
    }

    updateEmpnm = (event) => {
        this.props.updateEmpnm(event.target.value);
    }

    updateEmpadr = (event) => {
        this.props.updateEmpadr(event.target.value);
    }

    updatePhoneno = (event) => {
        this.props.updatePhoneno(event.target.value);
    }

    updatePersonalno = (event) => {
        this.props.updatePersonalno(event.target.value);
    }

    updateGotm = (event) => {
        this.props.updateGotm(event.target.value);
    }

    updateLeavetm = (event) => {
        this.props.updateLeavetm(event.target.value);
    }

    updateEmpwage = (event) => {
        this.props.updateEmpwage(event.target.value);
    }

    render() {

        return <ul>
            <li>직원이름: <input type="text" value={this.props.empnm} onChange={this.updateEmpnm} /></li>
            <li>직원주소: <input type="text" value={this.props.empadr} onChange={this.updateEmpadr} /></li>
            <li>전화번호: <input type="text" value={this.props.phoneno} onChange={this.updatePhoneno} /></li>
            <li>주민등록번호: <input type="text" value={this.props.personalno} onChange={this.updatePersonalno} /></li>
            <li>출근시간: <input type="text" value={this.props.gotm} onChange={this.updateGotm}/></li>
            <li>퇴근시간: <input type="text" value={this.props.leavetm} onChange={this.updateLeavetm}/></li>
            <li>직원시급: <input type="text" value={this.props.empwage} onChange={this.updateEmpwage}/></li>
        </ul>
    }
}

export default ReqruitContext;