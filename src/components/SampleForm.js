import React, { Component } from 'react';
class SampleForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Jessie",
        };
    }
    

    render() {
        return ( 
            <div className={'row-cols-2 my-4 ' +this.props.style}>
                <form>
                    <div className='form-control py-3 px-4'>                  
                        <div className='row'>
                            <label>Input Firstname</label>
                            <input type={'text'} name="firstName" placeholder='Enter First Name'></input>
                        </div>
                        <div className='row'>
                            <label>Input Lastname</label>
                            <input type={'text'} name="firstName" placeholder='Enter Last Name'></input>
                        </div>
                        <div className='row'>
                            <label>Input Age</label>
                            <input type={'number'} name="firstName" placeholder='Enter Age'></input>
                        </div>
                        <button type='submit' className='btn btn-outline-primary mt-3'>Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}
export default SampleForm;