import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { createUsers } from '../actions/actions';
import {Link} from 'react-router-dom'

const Create = () =>
{
    const dispatch = useDispatch();

    const [name, Setname] = useState('');
    const [email, Setemail] = useState('');

    const submitHandler = (e) =>
    {
        e.preventDefault();
        dispatch(createUsers(name, email))
    }

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 mx-auto'>
                   <div className='text-right mb-2'>
                       <Link to='/list'>
                            <button type='submit' class="btn btn-primary"> List </button>
                       </Link>
                        </div> 
                        <form id='form'>
                            <div class="form-group">
                                <label>Name</label>
                                <div>
                                    <input
                                        name="name"
                                        component="input"
                                        type="text"
                                        placeholder="Name"
                                        value={name}
                                        class="form-control"
                                        onChange={(e) => Setname(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div class="form-group">
                                <label>Email</label>
                                <div>
                                    <input
                                        name="email"
                                        component="input"
                                        type="email"
                                        placeholder="Email"
                                        value={email}
                                        class="form-control"
                                        onChange={(e) => Setemail(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div class="form-group d-flex ">
                                <div>
                                <label>Male</label>{" "}
                                    <input
                                        name="name"
                                        component="input"
                                        type="radio"
                                        value='Male'
                                        onChange={(e) => Setname(e.target.value)}
                                    />
                                </div>
                                <div className='ml-3'>
                                <label>Female</label>{" "}
                                    <input
                                        name="name"
                                        component="input"
                                        type="radio"
                                        value='Female'
                                        onChange={(e) => Setname(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div class="form-group">
                                <label>Phone</label>
                                <div>
                                    <input
                                        name="name"
                                        component="input"
                                        type="text"
                                        placeholder="Name"
                                        value={name}
                                        class="form-control"
                                        onChange={(e) => Setname(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div class="form-group">
                                <label>City</label>
                                <div>
                                    <input
                                        name="name"
                                        component="input"
                                        type="text"
                                        placeholder="Name"
                                        value={name}
                                        class="form-control"
                                        onChange={(e) => Setname(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div class="form-group">
                                <label>Pincode</label>
                                <div>
                                    <input
                                        name="name"
                                        component="input"
                                        type="text"
                                        placeholder="Name"
                                        value={name}
                                        class="form-control"
                                        onChange={(e) => Setname(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className='text-center'>
                                <button type='submit' class="btn btn-primary" onClick={submitHandler}>Create</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default reduxForm({
    form: "create-user",
})(Create);