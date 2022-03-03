class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: ['One', 'Two', 'Three'],
    };
  }
  handleAddOption(option) {
    if (!option) {
      return 'Please enter a valid option.';
    } else if (this.state.options.indexOf(option) > -1) {
      return `The option ${option} is already existed.`;
    }

    this.setState((prevState) => {
      return {
        options: prevState.options.concat([option]),
      };
    });
  }
  handlePick() {
    const options = this.state.options;
    const randNum = Math.floor(Math.random() * options.length);
    alert(options[randNum]);
  }
  handleRemoveAll() {
    this.setState(() => {
      return {
        options: [],
      };
    });
  }
  render() {
    const title = 'Indecision App';
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleRemoveAll={this.handleRemoveAll}
        />
        <AddOption handleAddOption={this.handleAddOption} />
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
        <button onClick={this.props.handleRemoveAll}>Remove All</button>
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
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined,
    };
  }

  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();

    const error = this.props.handleAddOption(option);

    this.setState(() => {
      return { error };
    });

    e.target.elements.option.value = '';
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.handlePick}
          disabled={!this.props.hasOptions}
        >
          What should I do?
        </button>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.querySelector('#main'));
