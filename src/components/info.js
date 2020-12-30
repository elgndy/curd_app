//courslist
/*
state = {
        isedet: false
    }

    rendercourse = () => {
        return(
<li>
    <span>{this.props.Details.name}</span>
    <button  onClick={ () => this.toggel()} >Eidet Course</button>
    <button onClick= { () => {this.props.DeleteCours(this.props.index)}}>Delete Course</button>
</li>
        )
    }

    renderForm = () => {
        return(
            <form onSubmit={this.eadmain}>
                <input ref={ (v) => this.input = v  } type="text" defaultValue={this.props.Details.name} /> 
                <input onClick={this.eadmain} type="button" value="update"   /> 
            </form>
        )
    }

    eadmain = (e) => {
        e.preventDefault();
       this.props.edeatfun(this.props.index , this.input.value  );
       this.toggel(); 
    }

    toggel = () => {
        let {isedet} = this.state;
        this.setState({
            isedet:!isedet
        })
    }

*/ 

/*
const {isedet} = this.state;
            { isedet ? this.renderForm() : this.rendercourse()}

*/ 

// App

/*
state = {
    courses: [
      {name:"Html"},
      {name:"Css"},
      {name:"JavaScript"}
    ],
    currnt:''
  }
  
  updatefunction = (e) => {
    this.setState({
      currnt:e.target.value
  })    
  }

  addcourse = (e) => {
    e.preventDefault();
    let currnt = this.state.currnt;
    let courses = this.state.courses;
    courses.push({name:currnt});
    this.setState({
      name:currnt,
      currnt:''
    })
    
  }

  DeleteCourse = (index) => {
    let courses = this.state.courses;
    courses.splice(index , 1);
    this.setState({
      courses
    })
  }

  edeat = (index,value) => {
    let {courses} = this.state;
    let ie = courses[index];
    ie['name'] = value;
    this.setState({
      courses
    })
  }


  //render

  const {courses} = this.state;
  const List = courses.map( (cours,index) => {
    return(
      <CoursList edeatfun={this.edeat} Details={cours} key={index} DeleteCours={this.DeleteCourse} index={index} />

    )
  })
*/