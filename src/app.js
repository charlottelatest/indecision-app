const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: ['A', 'B', 'C', 'D'],
};

const renderApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <button onClick={removeOption}>Remove All</button>
      <ol>
        {app.options.map((option) => {
          return <li key={option}>{option}</li>;
        })}
      </ol>
      <p>{app.options.length}</p>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, document.querySelector('#main'));
};

const removeOption = () => {
  app.options = [];
  renderApp();
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;
  console.log(option);

  app.options.push(option);
  console.log(app.options.length);
  e.target.elements.option.value = '';

  renderApp();
};

renderApp();
