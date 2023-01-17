import { Component } from 'react';
import './app.css'
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {"name": "Gleb Klimovich", "salary": "1000", "increase": true, "id": 1},
        {"name": "Natallia Burduk", "salary": "500", "increase": false, "id": 2},
        {"name": "Bat Kedo", "salary": "100", "increase": false, "id": 3}
      ]
    }
  }

  deleteListItem = (id) => {
    this.setState(({data}) => {
      //First way using slice and join before&after arrays
      // const index = data.findIndex(elem => elem.id === id);
      
      // const before = data.slice(0, index);
      // const after = data.slice(index + 1);

      // const newArr = [...before, ...after];  
      
      return {
        //Second way using filter
        data: data.filter(item => item.id !== id)
      }
    })
  }

  addListItem = (e, { ...itemProps}) => {
    e.preventDefault();

    this.setState(({data}) => {
      const newList = data.concat(
        {
          increase: false,
          id: data.length + 1,
          ...itemProps
        }
      );

      return {
        data: newList,

      }
    })
  }

  render() {
    return(
      <div className="app">
        <AppInfo/>
        <div className='search-panel'>
          <SearchPanel/>
          <AppFilter/>
        </div>
          <EmployersList 
              data={this.state.data}
              onDelete={this.deleteListItem}/>
          <EmployersAddForm
              addItemToList={this.addListItem} />
      </div>
    )
  }
}

export default App;