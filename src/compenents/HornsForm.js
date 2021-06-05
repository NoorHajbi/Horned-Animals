import React from 'react';
import { Form, Button } from 'react-bootstrap/';

class HornsForm extends React.Component {

    updateForm = (e) => {
        let filteredArr = []
        if (e != 'All') {
            filteredArr = this.props.beastArr.filter(value => {
                if (value.horns == e)
                    return value
            })
        } else
            filteredArr = this.props.beastArr; //will check to return all
        console.log('FilterArr', filteredArr)
        this.props.updateArrayData(filteredArr)
    }

    updateHornsNum = event => {
        // event.preventDefault();
        let hornsNum = event.target.value;
        this.updateForm(hornsNum)
    }
    //arrow fun to change component b y this

    render() {
        return (
            <>
                <Form >
                    <Form.Group controlId="exampleForm.SelectCustomHtmlSize">
                        <Form.Label>Select the number of horns</Form.Label>
                        <Form.Control as="select" custom name='hornsNum' onChange={this.updateHornsNum}>
                            <option value='All'>All</option>
                            <option value='1 '>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='100'>100</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
            </>
        )
    }
}

export default HornsForm;
