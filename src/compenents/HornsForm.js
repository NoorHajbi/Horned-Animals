import React from 'react';
import { Form, Button } from 'react-bootstrap/';
import Main from './Main';

class HornsForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hornsNum: 'All',
            arrayForm: this.props.beastArray,
            //maybe i will create a new data variable that takes beast for all and move it to main
            // name:'',
        }
    }
    handleSubmit = (e) => { //for enter submit
        e.preventDefault();
        if (this.state.hornsNum != 'All') {
          let filteredArr = this.props.arrayForm.filter(value => {
            return value.horns;
          });
          this.setState(filteredArr);
        }
        else { this.setState(this.state.arrayForm); //will check to return all
         }
        // this.setState({
        //     show: true
        // })
        // console.log(this.state.name)
    }
    // handleChange = (e) => {
    //     this.setState({
    //         name:e.target.value
    //     })
    // }
    // updateAge = event => this.setState({age:event.target.value});
    // updateLikeCats = event => this.setState({likeCats:event.target.checked});
    updatehornsNum = event => this.setState({ hornsNum: event.target.value }); //arrow fun to change component b y this

    // handleClose = () =>{
    //     this.setState({
    //         show:false
    //     })
    // }
    render() {
        return (
            <>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="exampleForm.SelectCustomHtmlSize">
                        <Form.Label>Select the number of horns</Form.Label>
                        <Form.Control as="select" custom name='hornsNum' onChange={this.updateFavLang}>
                            <option value='All'>All</option>
                            <option value='1 '>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='100'>100</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
                <Main
                    hornsNum={this.state.hornsNum}
                />
            </>
        )
    }
}

export default HornsForm;