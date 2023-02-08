import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {name: 'Denis G.', salary: 800, increase: false,rise: true, id: 1},
        {name: 'Alex B.', salary: 3000, increase: true,rise: false, id: 2},
        {name: 'Oleg G.', salary: 15000, increase: false,rise: false, id: 3},
      ]
    }
    this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({data}) => {
      return {
        data: data.filter(item => item.id !== id)
      }
    });
  }

  createItem = (name, salary) => {
    const newItem = {
      name: name,
      salary: salary,
      increase: false,
      rise: false,
      id: this.maxId++
    }

    this.setState(({data}) => {

      const newArr = [...data, newItem]

      return {
        data: newArr
      }
    });
  }

  onToggleProp = (id, prop) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if (item.id === id) {
          return {...item, [prop]: !item[prop]}
        }
        
        return item;
      })
    }));
  }

  render() {
    const employees = this.state.data.length;
    const increasedEmployees = this.state.data.filter(item => item.increase).length;
    return (
      <div className="app">
        <AppInfo employees={employees} increasedEmployees={increasedEmployees}/>
  
        <div className="search-panel">
          <SearchPanel/>
          <AppFilter/>
        </div>
  
        <EmployeesList 
          data={this.state.data}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}/>
        <EmployeesAddForm
          onCreate={this.createItem}
        />
      </div>
    );
  }

}

export default App;