import React from "react";

class Search extends React.Component {
  state = {
    inputValue: ""
  };
  onInputChange = e => { // sets the input value to the state and returns it to the parent component
    const inputValue = e.target.value;
    console.log(inputValue);
    if (!!inputValue) {
      this.setState(() => ({ inputValue }));
      this.props.getSearchResults(inputValue);
    } else {
      this.setState(() => ({ inputValue: "" }));
      this.props.getSearchResults('');
    }
  };
  render() {
    return (
      <div className='Search-Container'>
        <input className='Search-Input' value={this.state.inputValue} onChange={this.onInputChange} />
      </div>
    );
  }
}

export default Search;
