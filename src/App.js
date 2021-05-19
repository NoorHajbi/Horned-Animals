import React from 'react';
import Header from './compenents/Header';
import Main from './compenents/Main';
import Footer from './compenents/Footer';
import hornsData from './compenents/hornsData.json'
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectedBeast from './compenents/SelectedBeast';
//filter with num of horns
//DataArray that filter all obj
//on click woll call a fun that filter mydata array that have my beats with num of array
//then i want to render array
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arrayData: hornsData,
            show: false,
            modalCard:{},
        }
    }
    onHide = () => {
        this.setState({
            show: false,
        });
    }
    displayModal = (data) => {
            this.setState({show: true,});
            this.state.modalCard = data;
    }
    render() {
        return (
            <>
                <Header />
                <Main
                    beastArr={this.state.arrayData} displayModal={this.displayModal}
                />
                <SelectedBeast show={this.state.show} onHide={this.onHide} modalCard={this.state.modalCard} />
                <Footer />
            </>
        )
    }
}
export default App;
