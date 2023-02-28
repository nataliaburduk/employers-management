import { Component } from 'react';
import './app.scss'
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loadingData: true,
      term: '',
      filter: 'all'
    }
  }

  loadData() {
    fetch('http://localhost:3100/api/employees')
    .then(response => response.json())
    .then((fetchedData) => {
      this.setState({
        loadingData: false,
        data: fetchedData
      })
    })
    .catch(() => {
      this.setState({...this.state, loadingData: false});
    })
  }
  
  componentDidMount() {
    this.loadData()
  } 

  postDataItem({name, salary}) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({name: name, salary: salary})
    }

    fetch('http://localhost:3100/api/employees', requestOptions)
      .then(response => response.json())
      .then(() => {
        this.loadData();
      })
      .catch(() => {
        this.setState({...this.state, loadingData: false});
    })
  }

  updateSalaryItem({id, salary}) {
    const requestOptions = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({salary: salary})
    }
    fetch(`http://localhost:3100/api/employees/${id}`, requestOptions)
    .then(response => response.json())
    .then(() => {
      this.loadData();
    })
    .catch(() => {
      this.setState({...this.state, loadingData: false});
    })
  }

  deleteListItem = (id) => {
    fetch(`http://localhost:3100/api/employees/${id}`, {method: 'DELETE'})
      .then(response => response.json())
      .then(() => {
        this.loadData();
      })
      .catch(() => {
        this.setState({...this.state, loadingData: false});
    })
  }

  addListItem = (e, { ...itemProps}) => {
    e.preventDefault();
    this.postDataItem({...itemProps});
  }

  updateListItemSalary= (id, salary) => {
    this.updateSalaryItem({id, salary})  
  }
  
  onToggleProp = (id, prop, currentValue) => {
    const requestOptions = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({[prop]: !currentValue})
    }
    fetch(`http://localhost:3100/api/employees/${id}`, requestOptions)
    .then(response => response.json())
    .then(() => {
      this.loadData();
    })
    .catch(() => {
      this.setState({...this.state, loadingData: false});
    })
  }
 
  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter(item => {
      return item.name.indexOf(term) > -1
    })
  }

  onUpdateSearch = (term) => {
    this.setState({term});
  }

  filterPost = (items, filter) => {
    switch (filter) {
      case 'like':
        return items.filter(item => item.like);
      case 'moreThan1000':
        return items.filter(item => item.salary > 1000);
      case 'premia':
        return items.filter(item => item.increase);
      default:
        return items;
    }
  }

  onFilterSelect = (filter) => {
    this.setState({filter})
  }

  render() {
  const {data, term, filter} = this.state;
  const totalEmpl = data.length;
  const increasedEmpl = data.filter(item => item.increase).length;
  const visibleData = this.filterPost(this.searchEmp(data, term), filter)

    return(
      <div className="app">
        <AppInfo
            totalEmpl={totalEmpl}
            increasedEmpl={increasedEmpl}/>
        <div className='search-panel'>
          <SearchPanel
            onUpdateSearch={this.onUpdateSearch}/>
          <AppFilter
            filter={filter}
            onFilterSelect={this.onFilterSelect}/>
        </div>
          <EmployersList 
              data={visibleData}
              onDelete={this.deleteListItem}
              onToggleProp={this.onToggleProp}
              onUpdateSalary={this.updateListItemSalary}
              />
          <EmployersAddForm
              addItemToList={this.addListItem} />
      </div>
    )
  }
}

export default App;
