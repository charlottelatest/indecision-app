// my code
// const handleToggle = (e) => {
//   const buttonText = e.target.innerText;
//   const detail = e.target.nextSibling.innerText;
//   console.log(detail);
//   if (buttonText === 'Show details') {
//     e.target.innerText = 'Hide details';
//   } else {
//     e.target.innerText = 'Show details';
//   }
// };
let isVisible = false;

const handleToggle = () => {
  isVisible = !isVisible;
  render();
};

const render = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={handleToggle}>
        {isVisible ? 'Hide details' : 'Show details'}
      </button>
      {isVisible && (
        <div>
          <p>show up</p>
        </div>
      )}
      <p></p>
    </div>
  );

  ReactDOM.render(template, document.querySelector('#main'));
};

render();
