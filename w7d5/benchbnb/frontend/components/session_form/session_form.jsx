import React from 'react';
import {withRouter} from 'react-router-dom';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  updateUsername(e){
    this.setState({username: e.target.value});
  }

  updatePassword(e){
    this.setState({password: e.target.value});
  }

  render(){
    const {formType} = this.props;
    const {errors} = this.props;
    const display = errors.map((error,i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ));
    return(
      <div>
        <h1>{formType}</h1>
        <form onSubmit={this.handleSubmit}>
          <label> Username
          <input type="text" value={this.state.username}
            onChange={this.updateUsername.bind(this)} />
          </label>
          <label> Password
            <input type="text" value={this.state.password}
              onChange={this.updatePassword.bind(this)} />
          </label>
          <button type="submit" value={formType}>{formType}</button>
         </form>
         <ul>{display}</ul>

      </div>
    );
  }
}

export default withRouter(SessionForm);
