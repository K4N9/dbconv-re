import React from 'react'
import Table from './Table'
import DropBox from './DropBox'
import ReqButton from './ReqButton'

class StoreContext extends React.Component{
    constructor(props){
        super(props);
        this.state = {storenm: "", storeadr: "", phoneno: "", storesize: "s"}

        this.updateStorenm = this.updateStorenm.bind(this);
        this.updateStoreadr = this.updateStoreadr.bind(this);
        this.updatePhoneno = this.updatePhoneno.bind(this);
        this.updateStoresize = this.updateStoresize.bind(this);
    }

    updateStorenm = (event) => {
        this.setState({storenm : event.target.value});
    }

    updateStoreadr = (event) => {
        this.setState({storeadr : event.target.value});
    }

    updatePhoneno = (event) => {
        this.setState({phoneno : event.target.value});
    }

    updateStoresize = (event) => {
        this.setState({storesize : event.target.value});
    }

    reunder() {
        body = {
            transaction: this.props.query[0].transaction,
            storenm: this.state.storenm,
            storeadr: this.state.storeadr,
            phoneno: this.state.phoneno,
            storesize: this.state.storesize
        }
        return <>
            <h2>지점추가</h2>
            <li>지점이름: <input type="text" value={this.state.storenm} onChange={this.updateStorenm}/></li>
            <li>지점주소: <input type="text" value={this.state.storeadr} onChange={this.updateStoreadr}/></li>
            <li>전화번호: <input type="text" value={this.state.phoneno} onChange={this.updatePhoneno}/></li>
            <li>지점규모: <input type="text" value={this.state.storesize} onChange={this.updateStoresize}/></li>
            <ReqButton updateData={null} query={body}>Store</ReqButton>
        </>
    }

}

export default StoreContext