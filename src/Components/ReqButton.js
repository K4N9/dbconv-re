import axios from 'axios'
import React from 'react'

class ReqButton extends React.Component{
    constructor(props){
        super(props);

        this.handleReq = this.handleReq.bind(this);
    }

    handleReq = async () => {
        const response = await axios.post(
            'http://119.192.46.84:80/',
            this.props.query
        );
        if(this.props.updateData != null)
            this.props.updateData(response);
    }

    render(){

        return <button onClick = {this.handleReq}>{this.props.children}</button>
    }
}

export default ReqButton;