class InfoToggle extends React.Component {
  constructor(prop) {
    super(prop);
    this.handleToggle = this.handleToggle.bind(this);
    this.state = {
      isVisible: false,
    };
  }
  handleToggle() {
    this.setState((prevState) => {
      return {
        isVisible: !prevState.isVisible,
      };
    });
  }
  render() {
    return (
      <div>
        <h1>InforToggle</h1>
        <button onClick={this.handleToggle}>
          {this.state.isVisible ? 'Hide detail' : 'Show detail'}
        </button>
        {this.state.isVisible && <p>the epic detail</p>}
      </div>
    );
  }
}

ReactDOM.render(<InfoToggle />, document.querySelector('#main'));

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

// my code after watching Andrew Mead
// let isVisible = false;

// const handleToggle = () => {
//   isVisible = !isVisible;
//   render();
// };

// const render = () => {
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={handleToggle}>
//         {isVisible ? 'Hide details' : 'Show details'}
//       </button>
//       {isVisible && (
//         <div>
//           <p>show up</p>
//         </div>
//       )}
//       <p></p>
//     </div>
//   );

//   ReactDOM.render(template, document.querySelector('#main'));
// };

// render();
