import './employers-list-item.css'

const EmployersListItem = (props) => {

  const {name, salary, onDelete, onToggleProp, increase, like, onUpdateSalary, id} = props;

  let classNames="list-group-item d-flex justify-content-between";
  if (increase) {
    classNames += ' increase';
  } 
  if (like) {
    classNames += ' like'
  }

  return (
    <li className={classNames}>
      <span onClick={onToggleProp} 
            data-toggle="like" 
            className="list-group-item-label">
        {name}
      </span>
      <input type="text" 
             className="list-group-item-input" 
             defaultValue={salary + '$'}   
             onChange={(e) => onUpdateSalary(id, +e.target.value.replace('$',''))}/>
      <div className="d-flex justify-content-center align-items-center">
        <button type="button"
                data-toggle="increase" 
                className="btn-cookie btn-sm"
                onClick={onToggleProp} >
          <i className="fas fa-cookie"></i>
        </button>
        <button type="button"
                className="btn-trash btn-sm"
                onClick={onDelete}>
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  )
}


export default EmployersListItem;