import React, { useEffect, useState } from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'
import { serverUrl } from '../../../configs'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const token = useSelector((store) => store.authReducer.token)

    const isAuth = useSelector((store) => store.authReducer.isAuth)
    const navigate = useNavigate()
    if (!isAuth) {
        navigate("/")
    }
    const dispatch = useDispatch()
    const [toggle, setToggle] = useState(false)

    const data = useSelector((store) => store.employeeReducer.data)
    // console.log(data)
    const getData = async (url, token) => {
        try {
            const res = await axios.get(url, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            })
            dispatch({ type: "add", payload: res.data.data })
        } catch (error) {
            alert(error.response.data.message)
            console.log(error)
        }
    }

    const handleDelete = async (url, token) => {
        try {
            const res = await axios.delete(url, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            })
            getData(serverUrl + "/employee", token)
        } catch (error) {
            alert(error.response.data.message)
            console.log(error)
        }
    }

    const postData = async (url, token, obj) => {
        try {
            const res = await axios.post(url, obj, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            })
            getData(serverUrl + "/employee", token)
        } catch (error) {
            // alert(error.response.data.message)
            console.log(error)
        }
    }
    const [search, setSearch] = useState("")

    useEffect(() => {
        let query = {};
        getData(serverUrl + "/employee", token)
    }, [])


    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [salary, setSalary] = useState("")
    const [department, setDepartment] = useState("")


    const handleForm = (e) => {
        e.preventDefault()
        console.log(token)
        console.log({ firstName, lastName, email, salary, department })
        postData(serverUrl + "/employee/add", token, { firstName, lastName, email, salary, department })
    }

    return (
        <div id='dashboard'>
            <h1>Employee Management Software</h1>
            <div>
                <button onClick={() => { setToggle(!toggle) }}>Add Employeee</button>
                <button onClick={() => { dispatch({ type: "LOGOUT" }) }}>Logout</button>
            </div>
            <br />
            {
                toggle ? (<div>
                    <form onSubmit={handleForm}>
                        <input type="text" required placeholder="firstName" value={firstName} onChange={(e) => { setFirstName(e.target.value) }} />
                        <input type="text" required placeholder="lastName" value={lastName} onChange={(e) => { setLastName(e.target.value) }} />
                        <input type="text" required placeholder="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                        <input type="number" required placeholder="salary" value={salary} onChange={(e) => { setSalary(e.target.value) }} />
                        <select value={department} required onChange={(e) => { setDepartment(e.target.value) }}>
                            <option value="">Select</option>
                            <option value="Tech">Tech</option>
                            <option value="Marketing">Marketing</option>
                            <option value="Operations">Operations</option>
                        </select>
                        <button type='submit'>Add Employee</button>
                    </form>
                </div>) : (<></>)
            }
            <br />
            <div>

                <div>
                    <input type="text" placeholder='Search by first name...' value={search} onChange={(e) => { setFirstName(e.target.value) }} />
                    <select >
                        <option value="">Filter Department</option>
                        <option value="Tech">Tech</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Operations">Operations</option>
                    </select>
                    <select >
                        <option value="">Sort by</option>
                        <option value="Tech">Increasing salary</option>
                        <option value="Tech">Decreasing salary</option>
                    </select>
                </div>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <td>No.</td>
                                <td>First Name</td>
                                <td>Last Name</td>
                                <td>Email</td>
                                <td>Salary</td>
                                <td>Department</td>
                                <td>Edit</td>
                                <td>Delete</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((e, index) => {
                                    return <tr key={e._id}>
                                        <td>{index + 1}</td>
                                        <td>{e.firstName}</td>
                                        <td>{e.lastName}</td>
                                        <td>{e.email}</td>
                                        <td>{e.salary}</td>
                                        <td>{e.department}</td>
                                        <td><button>Edit</button></td>
                                        <td><button onClick={() => handleDelete(serverUrl + "/employee/remove/" + e._id, token)}>Delete</button></td>
                                    </tr>
                                }
                                )
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Dashboard