import './App.css';
import React from "react" ;  
import desperados from "./images/Desperados.png" ;  
import netflix from  "./images/netflix.png";   
import bridgerton from "./images/bridgerton.jpg"; 
import queens from "./images/queens.jpg"; 
import cobrakai from "./images/cobraKai.jpg"; 
import startrek from "./images/starTrek.jpg"; 


/*class App extends React.Component {
  render() {
    return (
      <div class="App">
        <h1>Netflix Originals ></h1> 
        <Item name="Mel" age ="26" petsName="Linux" petsType="cat" />
        <Job title="software developer" />
        <img src={desperados} alt="desperados"   />
        
      </div>
    )
  }
}

const Person = (props) => {
  return (
    <div>
      <p> Hi, I'm {props.name} and I'm {props.age}.</p>
      <Pet pet={props.petsName} type={props.petsType} />
    </div>
  );
};

const Job = (props) => {
  return (
    <p>I work as a {props.title}.</p>
  );
};

const Pet = (props) => {
  return (
    <p>This is {props.pet}. {props.pet} is a {props.type} .</p>
  );
};*/


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Netflix Originals</h1> 
        <div className="wrapper">
          <Item source={desperados} alt="desparados" name="Desperados"  netflixType="Film" />
          <Item source={bridgerton} alt="bridgerton" name="Bridgerton"  netflixType="Series" />
          <Item source={queens} alt="Queens Gambit" name="Queens Gambit"  netflixType="Series" />
          <Item source={cobrakai} alt="Cobra Kai" name="Cobra Kai"  netflixType="Series" />
          <Item source={startrek} alt="Star Trek" name="Star Trek"  netflixType="Series" />
        </div>
      </div>
    )
  }
}

const Item = (props) => {
  return (
    <div className="item">
      <img className='item-image' src={props.source} alt="props.alt" />
      <Netflix type={props.netflixType} />
      
      <p> {props.name}</p>
      
      
    </div>
  );
};

const Netflix = (props) => {
  return (
    <div className="netflix-image"> 
      <img className='netflix-logo' src={netflix} alt="netflix" />
      <p className="netflix-type"> {props.type}</p>
    </div>
  );
};


export default App;
