import React, { Component } from 'react';
import { FaTwitter, FaFacebook, FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons";
import Img from '../personalImg.jpg';
import "./Counter.css"
class Counter extends Component {
    constructor(props) {
        super(props);
        console.log("constructor")
        this.state ={ timer2: 0,  Person : { 
            fullName : "Ines Amami",
            bio : " I'm a start-freelance in Gafsa(Tunis).I specialize in web, app design, and design logos. I wish to work with some companies, so contact me if you like to work together on your next project.", 
            imgSrc: Img, 
            profession:"web developer"
          } }
        //this.increment=this.increment.bind(this)
    }
    
    
    componentDidMount() {
        console.log("comp counter mounted")
        setInterval(() => {
            this.setState({ timer2: this.state.timer2 + 1 })
           
        }, 1000);
    }
    render() {
        return (
          <div className="Profile">
        <span style={{color:" #231E39", backgroundColor: "#FEBB0B",borderRadius:" 3px",fontSize: "14px",fontWeight:" bold",padding: "3px 7px",position:" absolute",top:"30px",left: "30px"}}>Counter : {this.state.timer2}</span>;
        <img src={Img} alt="" width="400" height="430" />
        <h1>{this.state.Person.fullName}</h1>
        <h2>{this.state.Person.bio}-{this.state.Person.profession}</h2>
        <IconContext.Provider  value={{ style: {fontSize: "30px",color: "rgb(0, 123, 255)",margin: "20px",}}}>
          <a href="www.twitter.com">
            <FaTwitter /></a>
          <a href="www.facebook.com">
            <FaFacebook /></a>
               <a href="www.github.com">
            <FaGithub /> </a>
        </IconContext.Provider>
        </div>
       
        ) }}


 
export default Counter ;