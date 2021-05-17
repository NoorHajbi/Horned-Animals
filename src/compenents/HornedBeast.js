import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOfVotes: 0,
        }
    }

    addVote = () => {
        this.setState({
            numberOfVotes: this.state.numberOfVotes + 1,
        })
    }

    render() {
        return (
            <div className='beast'>
                {/* <h2>{this.props.title}</h2>
                <img onClick={this.addVote} src={this.props.img_url} alt={this.props.title} title={this.props.title} />
                <p>❤️: {this.state.numberOfVotes}</p>
                <p> {this.props.description} </p> */}
                <Card style={{ width: '30rem' }}>
                    <Card.Img onClick={this.addVote} variant="top" src={this.props.img_url} alt={this.props.title} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            {this.props.description}
                        </Card.Text>
                    </Card.Body>
                    <Button variant="primary"> ❤️ {this.state.numberOfVotes}</Button>
                </Card>
            </div>
        )
    }
}

export default HornedBeast;