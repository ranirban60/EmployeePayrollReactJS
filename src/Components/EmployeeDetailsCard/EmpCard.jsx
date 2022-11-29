import React,  {useEffect, useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import { Stack } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import EmployeeServices from '../../Service/EmployeeService';
import './EmpCard.css';
import axios from 'axios';

export default function EmpCard()  {

        const [employee,setEmployee]=useState([])
        const [searchData, setSearchData] = useState([]);

    useEffect(() => {
        loadEmployee();
    }, []);

    const loadEmployee = async () => {
        const result = await EmployeeServices.getEmployee()
        setEmployee(result.data);
        console.log("All Employee")
    }

    const navigate = useNavigate();

    const handleAddEmployee = () => {
        navigate('/homepage')
    }

    const handleDelete = async (id) => {
        await EmployeeServices.deleteEmployee(id).then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.log(error);
        })
        
        handleDeleteToast()
        loadEmployee()
    }

    const handleDeleteToast = () => {
        toast('One Employee Deleted')
    }

    const handleEmpSearch = async () => {
        console.log(searchData)
        const result = await axios.get(`http://localhost:8080/getEmployee/${searchData}`)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            })
        setEmployee(result.data);
    }

       
    
        async function updatearr(props){
            const result = await axios.get("http://localhost:8080/updateEmployeeByToken",props)
            alert("Employee Updated")
            console.log("Update",result.data)
        }

        return (
            <div>
            <br />
            <div style={{ display: "flex", justifyContent: "end", flexDirection: "row"  }}>

           <input
                    placeholder='id'
                    value={searchData}
                    onChange={(e) => setSearchData(e.target.value)}
                    style={{ width: '25px', marginLeft: '815px' }}>
                </input>
               
                <SearchIcon onClick={handleEmpSearch}></SearchIcon>

                <Button className='Add-Employee-Button' variant="contained" onClick={() => handleAddEmployee()} style={{ backgroundColor: '#82A70C', marginLeft: '40px' }}>
                    <AddIcon />
                    Add Employee
                </Button>

            </div>
                <Toolbar></Toolbar>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow className='TableRow' style={{backgroundColor: '#42515F', width: '1549px',height: '67px'}}>
                                <TableCell className='TableHeaderCell' >Id</TableCell>
                                <TableCell className='TableHeaderCell'>Name</TableCell>
                                <TableCell className='TableHeaderCell'>Gender</TableCell>
                                <TableCell className='TableHeaderCell'>Department</TableCell>
                                <TableCell className='TableHeaderCell'>Salary</TableCell>
                                <TableCell className='TableHeaderCell'>Start Date</TableCell>
                                <TableCell className='TableHeaderCell'>Action</TableCell>
                                
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                employee.map((employees, key) => (
                                    <TableRow key={key} >
                                        <TableCell> {employees.employeeId} </TableCell>
                                        <TableCell> {employees.employeeName} </TableCell>
                                        <TableCell> {employees.gender} </TableCell>
                                        <TableCell> {employees.department}</TableCell>
                                        <TableCell> {employees.salary}</TableCell>
                                        <TableCell> {employees.startDate}</TableCell>
                                        <TableCell>
                                        <Stack spacing={1} direction='row'>
                                            {<DeleteIcon onClick={() => handleDelete(employees.employeeId)}></DeleteIcon>}<ToastContainer autoClose={500} backgroundColor='red' />
                                            {<EditIcon onClick={()=>{updatearr(employees.token)}}> <EditIcon/></EditIcon>}
                                        </Stack>
                                    </TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>

            </div>
        )
    }
