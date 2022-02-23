const appProp = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: ['A', 'B', 'C'],
};

const getOptions = (options) => {
  return options && options.length > 0 ? (
    <p>Here are your options: {options.join(',')}</p>
  ) : (
    'No options'
  );
};

const template = (
  <div>
    <h1>{appProp.title ? appProp.title : 'Untitled App'}</h1>
    {appProp.subtitle && <p>{appProp.subtitle}</p>}
    {getOptions(appProp.options)}
  </div>
);

ReactDOM.render(template, document.querySelector('#main'));
