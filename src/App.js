import React,{Component} from 'react';
import CoursForm from './components/courseForm';
import CoursList from './components/coursList';
import './index.css';

class App extends Component {

  state = {
    courses:[
      {name:'Html',count:1},
      {name: 'Css',count:2},
      {name: 'Javascript',count:3},
      {name:'Jquery',count:4},
      {name: 'Bootstrap',count:5},
      {name: 'React.js',count:6}
    ],
    currnt:''
  }
handelChange = (e) => {
  this.setState({
    currnt:e.target.value
  })
}

handelSubmit = (e) => {
    e.preventDefault();
  const {courses} = this.state;
  const {currnt} = this.state;
  courses.push({name:currnt})
  this.setState({
    courses,
    currnt:''
  })
}

DeleteCourse = (e) => {
  const {courses} = this.state;
  courses.splice( e , 1 )
  this.setState({
    courses
  })
}

eidetfun =(index , value) => {
  let {courses} = this.state;
  let cours = courses[index]
  cours["name"] = value
  this.setState({
    courses
  })
}

  render(){  
    
    const {courses} = this.state;
    const main = courses.map( (cours,index) => {
      return cours.count !== null ? ( 
        < CoursList index={index}  eidetfun={this.eidetfun} DeleteCourse={this.DeleteCourse} cours={cours} key={index}   />
      ) : alert('no')
    })
   return (
    <div className="App">
      <div className="pairant">
        <div className="child">
      <CoursForm currnt={this.state.currnt} handelChange={this.handelChange}  handelSubmit={this.handelSubmit} />
      <div className="listcours">
        <div className="child2">
      
       <ul>
       {main}
       </ul> 
       </div>
       </div>
       </div>
    </div>
    </div>
  );
}
}
export default App;
