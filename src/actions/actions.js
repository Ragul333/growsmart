import axios from "axios";
import { useParams } from "react-router-dom";
import { USER_CREATE_FAIL, USER_CREATE_REQUEST, USER_CREATE_SUCCESS, USER_DELETE_FAIL, USER_DELETE_REQUEST, USER_DELETE_SUCCESS, USER_LIST_FAIL, USER_LIST_REQUEST, USER_LIST_SUCCESS, USER_UPDATE_FAIL, USER_UPDATE_REQUEST, USER_UPDATE_SUCCESS } from "../constants"

export const createUsers = (name,email,gender,phone,city,pin) => async (dispatch) => {
    try {
        dispatch({type: USER_CREATE_REQUEST});

        

    await fetch(`https://6073db87066e7e0017e786f2.mockapi.io/growsmart`, {
      method : 'POST',
      body : JSON.stringify({
        name,
        email,
        gender,
        phone,
        city,
        pin
      }),
      headers : {
        'Content-type' : 'application/json'
      }
    });

        dispatch({
            type: USER_CREATE_SUCCESS,
            payload: {name,email}
        })

        

    } catch (error) {
        dispatch({
            type: USER_CREATE_FAIL,
            payload: error.message
        })
    }
}

export const listUser = () => async(dispatch) => {
    try {
        dispatch({type:USER_LIST_REQUEST})

        const data = await axios.get(`https://6073db87066e7e0017e786f2.mockapi.io/growsmart`)

        dispatch({
            type: USER_LIST_SUCCESS,
            payload: data.data
        })

        console.log(data)

    } catch (error) {
        dispatch({
            type: USER_LIST_FAIL,
            payload: error.message
        })
    }
}

export const getUserById = (id) => async(dispatch) => {
    try {
        dispatch({type:USER_LIST_REQUEST})

        const data = await axios.get(`https://6073db87066e7e0017e786f2.mockapi.io/growsmart/${id}`)

        dispatch({
            type: USER_LIST_SUCCESS,
            payload: data.data
        })

        console.log(data)

    } catch (error) {
        dispatch({
            type: USER_LIST_FAIL,
            payload: error.message
        })
    }
}



export const updateUser  =  (id,name,email,gender,phone,city,pin)  => async(dispatch) => {
    try {
        dispatch({type:USER_UPDATE_REQUEST})

        console.log(id)

        const data =  await fetch(`https://6073db87066e7e0017e786f2.mockapi.io/growsmart/${id.id}`, {
            method : 'PUT',
            body : JSON.stringify({
                name,
                email,
                gender,
                phone,
                city,
                pin
            }),
            headers : {
              'Content-type' : 'application/json',
              'Access-Control-Allow-Origin' : '*'
            }
          });

        dispatch({
            type: USER_UPDATE_SUCCESS,
            payload: data.data
        })

        console.log(data)

    } catch (error) {
        dispatch({
            type: USER_UPDATE_FAIL,
            payload: error.message
        })
    }
} 

export const deleteUser = (id) => async(dispatch) => {
    try {
        dispatch({type:USER_DELETE_REQUEST})

        await fetch(`https://6073db87066e7e0017e786f2.mockapi.io/growsmart/${id}`, {
            method : 'DELETE'
          });

        dispatch({
            type: USER_DELETE_SUCCESS
        })


    } catch (error) {
        dispatch({
            type: USER_DELETE_FAIL,
            payload: error.message
        })
    }
}