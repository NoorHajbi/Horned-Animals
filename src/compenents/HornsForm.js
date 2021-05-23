import React from 'react';
import { Form, Button } from 'react-bootstrap/';
import Main from './Main';

class HornsForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hornsNum: 'All',
            // beastFiltered: this.props.beastArray,

            //maybe i will create a new data variable that takes beast for all and move it to main
        }
    }
    handleSubmit = (e) => { //for enter submit
        e.preventDefault();
        let filteredArr =[];
        if (this.state.hornsNum != 'All') {
           filteredArr = this.props.beastArray.filter(value => {
            if (value.horns == this.state.hornsNum)
            return  value;
          });
        }else
        filteredArr= this.props.beastArray; //will check to return all
        
        // this.setState({
        //     beastFiltered:filteredArr,
        // })
        this.props.updateArrayData(filteredArr)
    }
    updatehornsNum = event => this.setState({ hornsNum: event.target.value }); //arrow fun to change component b y this

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