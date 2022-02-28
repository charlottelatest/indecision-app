// const appProp = {
//   title: 'Indecision App',
//   subtitle: 'Put your life in the hands of a computer',
//   options: ['A', 'B', 'C'],
// };

// const getOptions = (options) => {
//   return options && options.length > 0 ? (
//     <p>Here are your options: {options.join(',')}</p>
//   ) : (
//     'No options'
//   );
// };

// const template = (
//   <div>
//     <h1>{appProp.title ? appProp.title : 'Untitled App'}</h1>
//     {appProp.subtitle && <p>{appProp.subtitle}</p>}
//     {getOptions(appProp.options)}
//   </div>
// );

let count = 0;

const handleAddOne = () => {
  console.log('add one');
  count++;
  renderCounterApp();
};

const handleMinusOne = () => {
  console.log('minus one');
  count--;
  renderCounterApp();
};

const handleReset = () => {
  console.log('reset');
};

const renderCounterApp = () => {
  const template = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleAddOne}>+1</button>
      <button onClick={handleMinusOne}>-1</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );

  ReactDOM.render(template, document.querySelector('#main'));
};

renderCounterApp();
