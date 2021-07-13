import React, { Component } from 'react';
import NavBar  from './components/NavBar';
import Counters from './components/counters';
class App extends Component {
    state = {
        counters: [
          { id: 1, value: 0 },
          { id: 2, value: 0 },
          { id: 3, value: 0 },
          { id: 4, value: 0 },
        ],
      };
    
      handleDelete = (counterId) => {
        console.log("Event Handler Called", counterId);
        const counters = this.state.counters.filter((c) => c.id !== counterId);
        this.setState({ counters });
      };
      handleReset = () => {
        const counters = this.state.counters.map((c) => {
          c.value = 0;
          return c;
        });
        this.setState({ counters });
      };
      handleIncrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value++;
        this.setState({ counters });
      };
      handleDecrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        if (counters[index].value > 0) {
          counters[index].value--;
          this.setState({ counters });
        }
      };
    render() { 
        
        return (

            <React.Fragment>
            < NavBar totalCounter={this.state.counters.length}/>
            < Counters onReset={this.handleReset} 
            onIncrement ={this.handleIncrement} 
            onDecrement={this.handleDecrement} 
            counters={this.state.counters}
            onDelete = {this.handleDelete}/>
            </React.Fragment>
          );
    }
}
 
export default App;