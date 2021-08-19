import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { createUsers, getUserById, updateUser } from '../actions/actions';
import { Link, useParams } from 'react-router-dom'
import { useEffect } from 'react';

const Update = () =>
{
    const id = useParams();

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getUserById(id.id))
    },[id])

    
    const userId = useSelector(state=>state.userList)
    const {usersdata,loading} = userId

    console.log('-------',usersdata)

    const [name, Setname] = useState(usersdata.name);
    const [email, Setemail] = useState(usersdata.email);
    const [gender, Setgender] = useState(usersdata.gender);
    const [phone, Setphone] = useState(usersdata.phone);
    const [city, Setcity] = useState(usersdata.city);
    const [pin, Setpin] = useState(usersdata.pin);


    const submitHandler = (e) =>
    {
        e.preventDefault();
    dispatch(updateUser(
            id,
            name,
            email,
            gender,
            phone,
            city,
            pin
        )) 
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
                                        defaultValue={usersdata.name}
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
                                        onChange={(e) => Setgender(e.target.value)}
                                    />
                                </div>
                                <div className='ml-3'>
                                    <label>Female</label>{" "}
                                    <input
                                        name="name"
                                        component="input"
                                        type="radio"
                                        value='Female'
                                        onChange={(e) => Setgender(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div class="form-group">
                                <label>Phone</label>
                                <div>
                                    <input
                                        name="name"
                                        component="input"
                                        type="number"
                                        placeholder="phone"
                                        value={phone}
                                        class="form-control"
                                        onChange={(e) => Setphone(e.target.value)}
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
                                        placeholder="city"
                                        value={city}
                                        class="form-control"
                                        onChange={(e) => Setcity(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div class="form-group">
                                <label>Pincode</label>
                                <div>
                                    <input
                                        name="name"
                                        component="input"
                                        type="number"
                                        placeholder="pincode"
                                        value={pin}
                                        class="form-control"
                                        onChange={(e) => Setpin(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className='text-center'>
                                <button type='submit' class="btn btn-primary" onClick={submitHandler}>Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default reduxForm({
    form: "update-user",
})(Update);