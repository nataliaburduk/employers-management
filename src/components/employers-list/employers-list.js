import EmployersListItem from "../employers-list-item/employers-list-item";

import './employers-list.css'

const EmployersList = ({data, onDelete, onToggleProp, onUpdateSalary}) => {

  const elements = data.map(item => {
    const {id, ...itemProps} = item;
    return (
      <EmployersListItem 
          id={id} 
          key={id}
          {...itemProps}
          onDelete={() => onDelete(id)}
          onToggleProp={(e) => {onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}}
          onUpdateSalary={onUpdateSalary}
          // onToggleIncrease={() => {onToggleIncrease(id)}}
          // onToggleRise={() => {onToggleRise(id)}}
          />
    )
  })

  return (
    <ul className='app-list list-group'>
      {elements}
    </ul>
  )
}

export default EmployersList;