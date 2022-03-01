class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision App';
    const subtitle = 'Put your life in the hands of a computer';
    const options = ['A', 'B', 'C', 'D'];

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    const options = this.props.options;
    return (
      <div>
        <ul>
          {options.map((option) => {
            return <Option option={option} />;
          })}
        </ul>
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    const option = this.props.option;
    return <li>{option}</li>;
  }
}

class AddOption extends React.Component {
  render() {
    return <div>AddOption component here</div>;
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.querySelector('#main'));
