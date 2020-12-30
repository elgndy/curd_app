import React,{Component} from 'react';

class CoursList extends Component{
 

    state = {
        is:false
    }

    item = () => {
        return(
            <li>
            <span>{this.props.cours.name}</span>
            <button onClick={this.toggel}>Eidet Course</button>
            <button onClick={this.props.DeleteCourse} >Delete Course</button>
            </li>
        )
    }

    sub = (e) => {
        e.preventDefault();
        this.props.eidetfun(this.props.index , this.input.value )
        const {is} = this.state;
        this.setState({
            is:!is
        })
    }

    form = () => {
        return(
            <form className="form_of_header" onSubmit={this.sub}>
                <input ref={ (c) => this.input = c } type="text" defaultValue={this.props.cours.name} /> 
                <input onClick={this.sub} value="Update Course" type="button" />
            </form>
        )
    }

    toggel = () => {
        const {is} = this.state;
        this.setState({
            is:!is
        })
    }

    render(){
        const {is} = this.state; 
        return(
            <React.Fragment>
                {is ? this.form() :this.item() }
            </React.Fragment>
        )
    }
}

export default CoursList;