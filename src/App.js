import React from "react";
import CardList from "./components/card-list/card-list.component";
import Header from "./components/header/header.component";
import "./App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      backup: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ monsters: data, backup: data }));
  }

  handleFilterMonster = (name) => {
    const { backup } = this.state;
    if (!name) this.setState({ monsters: backup });
    else {
      const filteredMonsters = backup.filter((monoster) =>
        monoster.name.toLowerCase().includes(name.toLowerCase())
      );
      console.log(filteredMonsters);
      this.setState({ monsters: filteredMonsters });
    }
  };

  render() {
    return (
      <div className="app">
        <Header handleFilterMonster={this.handleFilterMonster} />
        <CardList monosters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
