import React from 'react'
import ReqButton from './ReqButton'

class ContentDrop extends React.Component{
    constructor(props){
        super(props)

    }

    render(){
        return <option value={this.props.data[0]}>{this.props.data[1]}</option>
    }
}

class DropBox extends React.Component{
    constructor(props){
        super(props);

        this.state={paytype: null}

        this.updatePayinfo = this.updatePayinfo.bind(this);
    }

    updatePayinfo = (event) =>{
        if(this.props.paytype == true){
            this.setState({paytype: event.target.value});
        }
        this.props.updatePayinfo(event.target.value);
    }

    render() {

        return <>
            <select  onChange={this.updatePayinfo}>
                {(this.props.data != null) ? this.props.data.map((element) => <ContentDrop data={element} />) : null}
            </select>
        </>
    }
}


export default DropBox;