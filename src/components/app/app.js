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
        {"name": "Gleb Klimovich", "salary": "1000", "increase": true, "like": false, "id": 1},
        {"name": "Natallia Burduk", "salary": "500", "increase": false, "like": true, "id": 2},
        {"name": "Bat Kedo", "salary": "100", "increase": false, "like": false, "id": 3}
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
          like: false,
          id: data.length + 1,
          ...itemProps
        }
      );

      return {
        data: newList
      }
    })
  }

  // onToggleIncrease = (id) => {
    // First way using slice() and findIndex()
    // this.setState(({data}) => {
      // const index = data.findIndex(item => item.id === id);

      // const old = data[index];
      // const newObj = {...old, increase: !old.increase};
      // const newArr = [...data.slice(0, index), newObj, ...data.slice(index+1)];

      // return {
      //   data: newArr
      // }
      // })

      //Second way using map()
  //     this.setState(({data}) => ({
  //       data: data.map(item => {
  //         if (item.id === id) {
  //           return {...item, increase: !item.increase}
  //         }
  //         return item;
  //       })
  //     }))
  // }

  // onToggleRise = (id) => {
  //   this.setState(({data}) => ({
  //     data: data.map(item => {
  //       if (item.id === id) {
  //         return {...item, like: !item.like}
  //       }
  //       return item;
  //     })
  //   }))
  // }

  //Creating reusable method
  onToggleProp = (id, prop) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if (item.id === id) {
          return {...item, [prop]: !item[prop]}
        }
        return item;
      })
    }))
  }
    render() {
    const totalEmpl = this.state.data.length;
    const increasedEmpl = this.state.data.filter(item => item.increase).length;
    
    return(
      <div className="app">
        <AppInfo
            totalEmpl={totalEmpl}
            increasedEmpl={increasedEmpl}/>
        <div className='search-panel'>
          <SearchPanel/>
          <AppFilter/>
        </div>
          <EmployersList 
              data={this.state.data}
              onDelete={this.deleteListItem}
              onToggleProp={this.onToggleProp}
              // onToggleIncrease={this.onToggleIncrease}
              // onToggleRise={this.onToggleRise}
              />
          <EmployersAddForm
              addItemToList={this.addListItem} />
      </div>
    )
  }
 }


export default App;