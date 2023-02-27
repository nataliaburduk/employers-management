
import './app-filter.css'

const AppFilter = (props) => {

  const buttonsData = [
    {name: 'all', label: 'All employees'},
    {name: 'like', label: 'Promotion'},
    {name: 'moreThan1000', label: 'Salary more than 1000$'},
    {name: 'premia', label: 'Reward'},

  ];

  const buttons = buttonsData.map(({name, label}) => {
    const active = props.filter === name;
    const clazz = active ? 'btn-light' : 'btn-outline-light'
    return (
      <button 
          onClick={() => props.onFilterSelect(name)}
          className={`btn ${clazz}`}
          type='button'
          key={name}>
              {label}
      </button>
    )
  })

  return (
    <div className='btn-group'>
      {buttons}
    </div>
  )
}


export default AppFilter

