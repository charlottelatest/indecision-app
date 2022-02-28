const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: [],
};

const handleRemoveOption = () => {
  app.options = [];
  renderApp();
};

const handleSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;
  console.log(option);

  app.options.push(option);
  console.log(app.options.length);
  e.target.elements.option.value = '';

  renderApp();
};

const handleMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

const renderApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <ol>
        {app.options.map((option) => {
          return <li key={option}>{option}</li>;
        })}
      </ol>
      <button disabled={app.options.length === 0} onClick={handleMakeDecision}>
        What should I do?
      </button>
      <button onClick={handleRemoveOption}>Remove All</button>
      <form onSubmit={handleSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, document.querySelector('#main'));
};

renderApp();
