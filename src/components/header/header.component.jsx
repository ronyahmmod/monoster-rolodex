import React from "react";
import "./header.styles.scss";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
  }

  handleChange = (e) => {
    this.setState({ search: e.target.value }, () => {
      this.props.handleFilterMonster(this.state.search);
    });
  };
  render() {
    return (
      <div className="header">
        <h1 className="header__title">Monster Rolodex</h1>
        <div className="header__search-box">
          <input
            type="text"
            name="search"
            value={this.state.search}
            onChange={this.handleChange}
            placeholder="Search Monosters"
          />
        </div>
      </div>
    );
  }
}

export default Header;
