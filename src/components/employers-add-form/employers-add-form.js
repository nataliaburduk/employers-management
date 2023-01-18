import { Component } from 'react';

import './employers-add-form.css'

class EmployersAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }
    
    onValueChange = (e) => {
         this.setState({
             [e.target.name]: e.target.value
         })
    }

    isValidFields = () => {
        const {name, salary} = this.state;
        const nameReg = /^[a-zA-Z]+ ?[a-zA-Z]*$/;

        if ((name.match(nameReg) && name.length >= 3) && (+salary > 0)) {
            return true;
        } else {
            return false
        }
    }

    setDefaultState = () => {
        this.setState({
            name: '',
            salary: ''
        })
    }

    onFormSubmit = (e) => {
        this.isValidFields();
        this.props.addItemToList(e, {...this.state}); 
        this.setDefaultState()
    }

    render() {
        const {name, salary} = this.state;

        return (
          <div className="app-add-form">
              <h3>Добавьте нового сотрудника</h3>
              <form onSubmit={this.onFormSubmit}
                  className="add-form d-flex">
                  <input onChange={this.onValueChange}type="text"
                      className="form-control new-post-label"
                      placeholder="Как его зовут?" 
                      name="name"
                      value={name}/>
                  <input onChange={this.onValueChange}type="number"
                      className="form-control new-post-label"
                      placeholder="З/П в $?" 
                      name="salary"
                      value={salary}/>
    
                  <button disabled={!this.isValidFields()} type="submit" className="btn btn-outline-light">Добавить</button>
              </form>
          </div>
      )
    }
}

export default EmployersAddForm;