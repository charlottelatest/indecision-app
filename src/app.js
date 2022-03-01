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
  handleRemoveAll() {
    alert('handleRemoveAll');
  }

  render() {
    const options = this.props.options;
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove All</button>
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
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();

    if (option) {
      alert(option);
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

class Action extends React.Component {
  handlePickup() {
    alert('handlePickup');
  }

  render() {
    return (
      <div>
        <button onClick={this.handlePickup}>What should I do?</button>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.querySelector('#main'));
