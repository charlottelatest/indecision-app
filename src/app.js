class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleRemoveOne = this.handleRemoveOne.bind(this);
    this.state = {
      options: [],
    };
  }
  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {}
  }
  componentDidUpdate(_prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }
  handleAddOption(option) {
    if (!option) {
      return 'Please enter a valid option.';
    } else if (this.state.options.indexOf(option) > -1) {
      return `The option ${option} is already existed.`;
    }

    this.setState((prevState) => ({
      options: prevState.options.concat([option]),
    }));
  }
  handlePick() {
    const options = this.state.options;
    const randNum = Math.floor(Math.random() * options.length);
    alert(options[randNum]);
  }
  handleRemoveAll() {
    this.setState(() => ({ options: [] }));
  }
  handleRemoveOne(option) {
    this.setState((prevState) => ({
      options: prevState.options.filter((o) => option !== o),
    }));
  }
  render() {
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleRemoveAll={this.handleRemoveAll}
          handleRemoveOne={this.handleRemoveOne}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

const Header = (props) => (
  <div>
    <h1>{props.title}</h1>
    {props.subtitle && <h2>{props.subtitle}</h2>}
  </div>
);

Header.defaultProps = {
  title: 'Indecision',
};

// Options component
const Options = (props) => (
  <div>
    <button onClick={props.handleRemoveAll}>Remove All</button>
    {props.options.length === 0 && <p>Please add an option to get started!</p>}
    <ul>
      {props.options.map((option) => {
        return (
          <Option option={option} handleRemoveOne={props.handleRemoveOne} />
        );
      })}
    </ul>
  </div>
);

// Option component
const Option = (props) => (
  <li>
    {props.option}{' '}
    <button
      onClick={() => {
        props.handleRemoveOne(props.option);
      }}
    >
      remove
    </button>
  </li>
);

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

    this.setState(() => ({ error }));

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

const Action = (props) => (
  <div>
    <button onClick={props.handlePick} disabled={!props.hasOptions}>
      What should I do?
    </button>
  </div>
);

ReactDOM.render(<IndecisionApp />, document.querySelector('#main'));
