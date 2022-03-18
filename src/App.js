import React from "react";
import Header from "./Components/Header";
import Feature from "./Components/Feature";
import About from "./Components/About";
import Presentation from "./Components/Presentation";
import Contact from "./Components/Contact";
import TableList from "./Components/TableList";
import aboutimage from "./img/about.png";
import aboutimage1 from "./img/download.png";


function App() {
  fetch('https://reqres.in/api/users?page=2')
  .then((res) => {
    console.log(res);
  });
  
  // .then(json => {
    
  //   // this.setState({
  //   //   // items: json,
  //   // })
  // });

  return (
    <div className="App">
      <Header/>
      <TableList />
      <Feature />
      <About image={aboutimage} title='Comes With All You Need For Daily Life' button='Get The App' />
      <Presentation />
      <About image={aboutimage1} title='Download And Get The App Now' button='Download' />
      <Contact />
    </div>
  );
}

export default App;
