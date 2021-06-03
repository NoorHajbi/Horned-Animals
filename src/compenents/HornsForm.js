import React from 'react';
import { Form, Button } from 'react-bootstrap/';
import Main from './Main';

class HornsForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hornsNum: 'All',
            beastFiltered: this.props.beastArray,
        }
    }

    handleSubmit = (e) => { //for enter submit
        // e.preventDefault();
        this.props.updateForm(this.state.hornsNum)

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