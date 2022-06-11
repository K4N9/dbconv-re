import React from 'react'

class Table extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return  <>
                    <table border = '1px'>
                        <thead>
                            {this.props.data != null ? <HeaderRow data = {this.props.data.metaData}></HeaderRow> : null}
                        </thead>
                        <tbody>
                            {(this.props.data != null && this.props.button == false) ? this.props.data.rows.map((element) => <ContentRow data = {element}/>) : null}
                            {(this.props.data != null && this.props.button == true) ? this.props.data.rows.map((element) => <ButtonRow data = {element} updateList = {this.props.updateList}/>) : null}
                        </tbody>
                    </table>
                </>
    }
}
 
class ContentRow extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return  <tr key = {this.props.data[0]}>
                     {this.props.data.map((element) => <td>{element}</td>)}
                </tr>
    }
}

class ButtonRow extends React.Component{
    constructor(props){
        super(props);

        this.state = {amount : 0}
        this.setAmount = this.setAmount.bind(this);
        this.updateList = this.updateList.bind(this);
    }

    setAmount = (event) => {
        if(event.target.value >= 0)
            this.setState({amount : event.target.value});
    }

    updateList = () => {
        this.props.updateList({rows : this.props.data, amount : this.state.amount});
    }

    render() {
        return  <tr key = {this.props.data[0]}>
                     {this.props.data.map((element) => <td>{element}</td>)}
                     <PutInButton amount = {this.state.amount} setAmount = {this.setAmount} updateList = {this.updateList}></PutInButton>
                </tr>
    }
}

class PutInButton extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return <>
                   <td><input type = "number" value = {this.props.amount} onChange = {this.props.setAmount}></input></td>
                   <td><button onClick = {this.props.updateList}>입력</button></td>
               </>
    }
}

class HeaderRow extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return <tr>
                   {this.props.data.map((element)=><th>{element.name}</th>)}
               </tr>
    }
}

export default Table;