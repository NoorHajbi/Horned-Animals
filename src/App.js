import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './compenents/Header';
import Main from './compenents/Main';
import Footer from './compenents/Footer';
import hornsData from './compenents/hornsData.json'
import SelectedBeast from './compenents/SelectedBeast';
import HornsForm from './compenents/HornsForm';
import HornedBeast from './compenents/HornedBeast';

//filter with num of horns
//DataArray that filter all obj
//on click woll call a fun that filter mydata array that have my beats with num of array
//then i want to render array

// How are we implementing it?
// Using the Form component of react-bootstrap, build a drop down menu so that the user can choose to filter by number of horns.
// When the user chooses one of the options, the correct images should be displayed.
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arrayData: hornsData,
            show: false,
            modalCard: {},
            //filteredone
        }
    }
    onHide = () => {
        this.setState({
            show: false,
        });
    }
    displayModal = (data) => {
        this.setState({ show: true, });
        this.state.modalCard = data;
    }
    updateArrayData = (value) => {
        this.setState({ arrayData: value })
    }
    render() {
        return (
            <>
                <Header />
              
                <Main
                updateArrayData={this.updateArrayData}
                    // beastArray={hornsData} 
                     beastArr={this.state.arrayData} 
                     displayModal={this.displayModal}
                />
               
                <SelectedBeast
                 show={this.state.show} onHide={this.onHide} modalCard={this.state.modalCard} 
                 />
                  <HornedBeast
                   displayModal={this.displayModal}
                  />

                <Footer />
            </>
        )
    }
}
export default App;

