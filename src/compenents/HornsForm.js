import React from 'react';
import { Form, Button } from 'react-bootstrap/';
import FormInfo from './FormInfo';

class HornsForm extends React.Component {
    constructor(props) {
        super(props);
        // this.state{
            // name:'',
        // }
    }
    handleSubmit = (e) => { //for enter submit
        e.preventDefault(); 
        // this.setState({
        //     show: true
        // })
        // console.log(this.state.name)
    }
    handleChange = (e) => { 
    }
    render(){
        return(
            <>
            </>
        )
    }
}