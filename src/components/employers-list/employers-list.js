import EmployersListItem from "../employers-list-item/employers-list-item";

import './employers-list.scss'

const EmployersList = ({data, onDelete, onToggleProp, onUpdateSalary}) => {

  
  const elements = data.map(item => {
    const {id, ...itemProps} = item;
    const toggleItemProp = (e) => {
      const currentProp = e.currentTarget.getAttribute('data-toggle');
      const currentPropValue = itemProps[currentProp]
      onToggleProp(id, currentProp, currentPropValue)
  
    }
    return (
      <EmployersListItem 
          id={id} 
          key={id}
          {...itemProps}
          onDelete={() => onDelete(id)}
          onToggleProp = {e => toggleItemProp(e)} 
          onUpdateSalary = {onUpdateSalary}
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