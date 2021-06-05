import React from 'react';
import Header from './compenents/Header';
import Main from './compenents/Main';
import Footer from './compenents/Footer';
import hornsData from './compenents/hornsData.json'
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectedBeast from './compenents/SelectedBeast';
import HornsForm from './compenents/HornsForm';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arrayData: hornsData,
            show: false,
            modalCard: {},
            filteredArr: hornsData
        }
    }
    onHide = () => {
        this.setState({
            show: false,
        });
    }
    displayModal = (data) => {
        this.setState({
            show: true,
            modalCard: data
        });
    }

    updateArrayData = (value) => {
        this.setState({ filteredArr: value })
    }
    render() {
        return (
            <>
                <Header />
                <HornsForm
                    updateArrayData={this.updateArrayData}
                    beastArr={this.state.arrayData}

                />
                <Main
                    beastArr={this.state.filteredArr}
                    displayModal={this.displayModal}

                />
                <SelectedBeast
                    show={this.state.show}
                    onHide={this.onHide}
                    modalCard={this.state.modalCard} />
                <Footer />
            </>
        )
    }
}
export default App;

