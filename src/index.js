import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/';
import 'bootstrap/dist/css/bootstrap.min.css';

// class WhoAmI extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       years: 26
//     }
    // 1 способ
    // this.nextYear = this.nextYear.bind(this);

// 2 способ
  //   this.nextYear = () => {
  //     this.setState(state => ({
  //         years: ++state.years
  //         }))
  //   }
  // }


  // 3 способ
  // }
  //   nextYear = () => {
  //   this.setState(state => ({
  //     years: ++state.years
  //   }))
  // }


  // 1 способ
  // nextYear() {
  //   this.setState(state => ({
  //     years: ++state.years
  //   }))
  // }

//   render() {
//     const {name, surname, link} = this.props;
//     const {years} = this.state;
//     return (
//       <>
//       <button onClick={this.nextYear}>++</button>
//         <h1>My name is {name}, syrname - {surname}, years = {years}</h1>
//         <a href={link}>My profil</a>
//       </>
//     )
    
//   }
// }

// const All = () => {
//   return (
//     <>
//     <WhoAmI name="John" surname="Smith" link="vk.com"/>
//     <WhoAmI name="max" surname="vfsdv" link="vk.com"/>
//     <WhoAmI name="nik" surname="Smith" link="vk.com"/>
//     </>
//   )
// }


ReactDOM.render(
  <App/>,
  document.getElementById('root'));


// const elem = <h2>Hello world!</h2>
// const elem = React.createElement('h2', null, "Hello World!!!!")


// Компоненты это ф-ии

// const Header = () => {
//   return <h2>Hello world!!</h2>
// }

// const Field = () => {
//   const holder = "Enter here";
//   const styleField = {
//     width: '300px'
//   }

//   return <input
//    style={styleField}
//    type="text" 
//    placeholder={holder} 
//    autoComplete="" 
//    ClassName="first" 
//    htmlFor=""/>
// }

// const Btn = () => {
//   const logged = true;

//   const text = "Log in";
//   // const res = () => {
//   //   return "Log in, please"
//   // }
//   // const p = <p>Log in</p>
// return <button>{logged ? "Enter" : text}</button> // Можем помещать p, res, text перем-ые, ф-ии, методы, часть html
// }                           // Но объекты помещать не можем!!!

// const App = () => {
//   return (
//     <div>
//       <Header/>
//       <Field/>
//       <Btn/>
//     </div>
//   )
// }
