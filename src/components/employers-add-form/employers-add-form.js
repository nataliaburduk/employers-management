import { Component } from 'react';

// import './employers-add-form.css'
import './employers-add-form.scss';

class EmployersAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: '',
            isNameValid: true,
            isSalaryValid: true
        }
    }
    
    onValueChange = (e) => {
         this.setState({
             [e.target.name]: e.target.value,
             isNameValid: this.isNameValid(),
             isSalaryValid: this.isSalaryValid(),
         })
    }

    isValidFields = () => {
        return this.state.isNameValid && this.state.isSalaryValid
    }

    isNameValid = () => {
        const {name} = this.state;
        const nameReg = /^[a-zA-Z]+ ?[a-zA-Z]*$/;

        return name.match(nameReg) && name.length >= 3; 
    }

    isSalaryValid = () => {
        const {salary} = this.state;
        
        return +salary > 0;
    }

    setDefaultState = () => {
        this.setState({
            name: '',
            salary: ''
        })
    }

    onFormSubmit = (e) => {
        e.preventDefault();

        if (this.isNameValid() && this.isSalaryValid()) {
            this.props.addItemToList(e, {...this.state}); 
            this.setDefaultState()
        }

        this.setState({
            isNameValid: this.isNameValid(),
            isSalaryValid: this.isSalaryValid(),
        })
    }

    classForInputName = () => {
       let defaultName = "form-control new-post-label";
       if (!this.state.isNameValid) {
            defaultName += ' is-invalid'        
       }
        return defaultName
    }

    classForInputSalary = () => {
        let defaultSalary =  "form-control new-post-label"
        if (!this.state.isSalaryValid) {
            defaultSalary += ' is-invalid'        
       }
       return defaultSalary;
    }

    render() {
        const {name, salary} = this.state;

        return (
          <div className="app-add-form">
              <h3>Add a new employee</h3>
              <form onSubmit={this.onFormSubmit}
                  className="add-form d-flex">
                  <input onChange={this.onValueChange}type="text"
                      className={this.classForInputName()}
                      placeholder="What's his name?" 
                      name="name"
                      value={name} 
                      />
                    
                    <input onChange={this.onValueChange}type="number"
                      className={this.classForInputSalary()}
                      placeholder="What's his salary in $?" 
                      name="salary"
                      value={salary} 
                      />
                   
                  <button disabled={!this.isValidFields()} type="submit" className="btn btn-outline-light">+ Add</button>
              </form>
          </div>
      )
    }
}

export default EmployersAddForm;