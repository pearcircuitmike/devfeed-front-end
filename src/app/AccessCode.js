import React, { Component } from 'react';
import { Input } from 'react-toolbox/lib/input';
import { Button } from 'react-toolbox/lib/button';
import theme from './AccessCode.scss';

class AccessCode extends Component {

  constructor(props) {
    super(props);
    this.state = { code: '' }
  }

  handleChange = (code, value) => {
    this.setState({...this.state, [code]: value});
  };

  handleClick = (code, value) => {
    this.setState({ code: '' });
    alert('The submitted code is ' + this.state.code);
  }

  render (props) {
    return (
      <div>
        <section style={{ padding: 100 }}>
          <Input
            {...props}
            theme={theme}
            type='text'
            label='Enter Access Code'
            name='code'
            value={this.state.code}
            onChange={this.handleChange.bind(this, 'code')}
            maxLength={4} />
          <Button
            {...props}
            theme={theme}
            raised
            primary
            theme={theme}
            label='Join'
            onClick={this.handleClick.bind(this)} />
        </section>
      </div>
    );
  }
}

export default AccessCode;
