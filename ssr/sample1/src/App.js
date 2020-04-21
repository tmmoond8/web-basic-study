import React from 'react';
import styled from 'styled-components';
import Home from './pages/Home';
import About from './pages/About';
import Icon from './kangaroo-c.png';

function fetchUsername() {
  const usernames = ['mike', 'june', 'jamie'];
  return new Promise((resolve) => {
    const username = usernames[Math.floor(Math.random() * 3)];
    setTimeout(() => resolve(username), 100);
  })
}

const Container = styled.div`
  background-color: #aaa;
  border: 1px solid blue;
`;

class App extends React.Component {
  state = {
    page: this.props.page,
  };

  componentDidMount() {
    window.onpopstate = event => {
      this.setState({ page: event.state });
    };
    fetchUsername().then(username => this.setState({ username }));
  }

  onChangePage = e => {
    const page = e.target.dataset.page;
    window.history.pushState(page, '', `/${page}`);
    this.setState({ page });
  };

  render() {
    const { page, username } = this.state;
    const PageComponent = page === 'home' ? Home : About;
    return (
      <Container className="container">
        <button data-page="home" onClick={this.onChangePage}>
          Home
        </button>
        <button data-page="about" onClick={this.onChangePage}>
          About
        </button>
        <img src={Icon}/>
        <PageComponent username={username}/>
      </Container>
    )
  }
}

export default App;