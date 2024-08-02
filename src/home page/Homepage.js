
import React, { Component } from 'react';
import Navbar from './Navbar';
import Images from '../Images';
import Cart from './Cart';
import Animals from './Animals';
import Cars from '../Cars';

class Homepage extends Component {

state = {
  person : [{name : "medo", age :"35"}, {name : "hima", age :"30"}],
  animals :[{name :" donkey" , color :" black"}, {name :" dogs" , color :" white"},{name :" cat" , color :" yellow"}],
  cars :["scania","tuota","bmw"]
}

  render(){
  return (
    <div>
    <Navbar/>
    <Cart name = {this.state.person[1].name} age ={this.state.person[0].age}/>
    <Images/>
    <Animals name ={this.state.animals[2].name} color ={this.state.animals[1].color}/>
    <Cars cars ={this.state.cars[1]} color ="red"/>
    <h5>five</h5>
    <h6>six</h6>
    </div>
  );
}
}

export default Homepage;