import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteUser, listUser } from '../actions/actions'

export const Users = ({location}) =>
{
    const dispatch = useDispatch()

    const deleteHandler = (id) =>
    {
        if (window.confirm('Are you sure ?')) {
            dispatch(deleteUser(id))
            dispatch(listUser())
        }
    }


    const users = useSelector(state => state.userList);
    const { usersdata, loading } = users;

    useEffect(() =>
    {
        dispatch(listUser())
    }, [])


    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-8 mx-auto'>
                <div className='text-right mb-2'>
                       <Link to='/'>
                            <button class="btn btn-primary"> + </button>
                       </Link>
                        </div> 
                    <ul class="list-group">


                        {
                            usersdata?.map((user) =>
                            {
                                return (

                                    <li class="list-group-item d-flex">
                                        <p className='text-left'>{user?.name}</p>
                                        <div className='delete'>
                                            <button class="btn btn-outline-danger" onClick={() => deleteHandler(user?.id)}>🗑️</button>{" "}
                                            <Link to={`/${user?.id}`}>
                                            <button class="btn btn-outline-success">✏️️</button>
                                            </Link>
                                        </div>
                                    </li>

                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}
