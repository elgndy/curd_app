import React from 'react';

const CoursForm = (props) => {
        return(
            <form className="form_of_header"  onSubmit={props.handelSubmit}>
                <input type="text"  onChange={props.handelChange} value={props.currnt}  />
                <input onClick={props.handelSubmit} value="Add Course" type="button" />
            </form>
        )
    
}

export default CoursForm;