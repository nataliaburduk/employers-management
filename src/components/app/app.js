import './app.css'
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

function App() {

  const data = [
    {"name": "Gleb Klimovich", "salary": "1000", "increase": true, "id": 1},
    {"name": "Natallia Burduk", "salary": "500", "increase": false, "id": 2},
    {"name": "Bat Kedo", "salary": "100", "increase": false, "id": 3}
  ]

  return(
    <div className="app">
      <AppInfo/>
      <div className='search-panel'>
        <SearchPanel/>
        <AppFilter/>
      </div>
        <EmployersList data={data}/>
        <EmployersAddForm/>
    </div>
  )
}

export default App;