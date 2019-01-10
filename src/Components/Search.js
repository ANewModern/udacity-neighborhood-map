import React from "react";

class Search extends React.Component {
  state = {
    inputValue: ""
  };
  onInputChange = e => {
    const inputValue = e.target.value;
    console.log(inputValue);
    if (!!inputValue) {
      this.setState(() => ({ inputValue }));
    } else {
      this.setState(() => ({ inputValue: "" }));
    }
  };
  render() {
    return (
      <form>
        <input value={this.state.inputValue} onChange={this.onInputChange} />
      </form>
    );
  }
}

export default Search;
