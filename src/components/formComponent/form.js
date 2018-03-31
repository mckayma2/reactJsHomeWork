import React, { Component } from 'react';


class MyForm extends Component {
  render() {
    return (
      
      <form onSubmit ={this.props.getgify} >
      <input type="text" name="formsearch" placeholder="search..." />
      <button>Get Pic</button>
      </form>

     
    );
  }
}

export default MyForm;
