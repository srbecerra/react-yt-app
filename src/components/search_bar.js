import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

  render() {
    // return <input onChange={this.onInputChange}/>;
    return (
      <div className="search-bar">

        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}/>
        {/* Value of input: {this.state.term} */}
      </div>
    );
  }

  // onInputChange(event) {
  //   console.log(event.target.value);
  // }
}
//
// const SearchBar = () => {
//   return <input />;
// };



export default SearchBar;
