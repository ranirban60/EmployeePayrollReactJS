import React, { Component } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import { Button, FormControl } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './EmpDetailCard.css';
import img1 from './Ellipse -1.png';
import img2 from './Ellipse -2.png';
import img3 from './Ellipse -3.png';
import img4 from './Ellipse -4.png';

export default class EmpDetailCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employeeName: '',
            profile_image: '',
            gender: '',
            department: '',
            salary: '',
            note: ''
            
        }
    }

    handleEmpName = (event) => {
        this.setState({
            employeeName: event.target.value
        })
    }

    handleProfile = (event) => {
        this.setState({
            profile_image: event.target.value
        })
    }

    handleGender = (event) => {
        this.setState({
            gender: event.target.value
        })
    }

    handleDepartment = (event) => {
        this.setState({
            department: event.target.value
        })
    }

    handleSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handleNote = (event) => {
        this.setState({
            note: event.target.value
        })
    }


    handleSubmit = async () => {

        await axios.post("http://localhost:8090/registerEmployee", this.state)
            .then((response) => {
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error)
            });
            console.log("employee added")
    }

    notifyCancel = () => {
        toast('Cancel Form');

    }

    notifySubmit = () => {
        toast('Employee Added!!');
    }

    render() {
        return (
            <div>
                <Card className='EmpCard'>
                    <h2 className='FormName'>Employee Payroll Form</h2><br></br>
                    <div>
                        <form >
                            <div>
                                <label className='emp-name-field'> Name </label>
                                <div >
                                    <TextField required className='name-box' variant="outlined" onChange={(event)=>this.handleEmpName(event)} value={this.state.employeeName} />
                                <p>{this.state.employeeName}</p>
                                </div>
                            
                            </div>
                            <br />

                            <div>
                                <label className='emp-profile-field'>Profile Image </label>

                            </div>

                            <RadioGroup row>

                                <div className='emp-profile' onChange={(event) => this.handleProfile(event)}>

                                    <FormControlLabel value="profile1" control={<Radio />} label={<Avatar
                                        className='profile-img' src={img1} />} />&nbsp;&nbsp;

                                    <FormControlLabel value="profile2" control={<Radio />} label={<Avatar
                                        className='profile-img' src={img2} />} />&nbsp;&nbsp;

                                    <FormControlLabel value="profile3" control={<Radio />} label={<Avatar
                                        className='profile-img' src={img3} />} />&nbsp;&nbsp;

                                    <FormControlLabel value="profile4" control={<Radio />} label={<Avatar
                                        className='profile-img' src={img4} />} />&nbsp;&nbsp;
                                        
                                </div>
                            </RadioGroup>
                            <br /><br />

                            <div >
                                <label className='emp-gender-field'> Gender </label>
                            </div>
                            <RadioGroup row>
                                <div className='emp-radio-button' onChange={(event) => this.handleGender(event)} >
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />&nbsp;&nbsp;
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />&nbsp;&nbsp;
                                    
                                </div>
                                
                            </RadioGroup>
                            <br />
                            <br />

                            <div>
                                <label className='emp-department-field'>Department </label>
                            </div>
                            <FormControl>
                                <div className='emp-checkbox' onChange={this.handleDepartment} >
                                    <FormControlLabel value="HR" control={<Checkbox />} label="Hr" labelPlacement="end" />

                                    <FormControlLabel value="Sales" control={<Checkbox />} label="Sales" labelPlacement="end" />

                                    <FormControlLabel value="Finance" control={<Checkbox />} label="Finance" labelPlacement="end" />

                                    <FormControlLabel value="Engineer" control={<Checkbox />} label="Engineer" labelPlacement="end" />

                                    <FormControlLabel value="Other" control={<Checkbox />} label="Other" labelPlacement="end" />
                                        
                                </div>
                            </FormControl>
                            <br />
                            <br />


                            <div className='emp-salary-field'>
                                <label > Salary </label>
                            </div>
                            <div>
                                <Select className='emp-salary' value={this.state.salary} onChange={(event) => this.handleSalary(event)}>
                                    <MenuItem value="20000">20000</MenuItem>
                                    <MenuItem value="30000">30000</MenuItem>
                                    <MenuItem value="40000">40000</MenuItem>
                                    <MenuItem value="50000">50000</MenuItem>
                                    <MenuItem value="60000">60000</MenuItem>
                                </Select>
                                
                            </div>
                            <br />

                            <div className='emp-date-field'>
                                <label>Start Date </label>
                            </div>
                            <br />
                            <br />

                            <div >
                                <label className='emp-note-field'>Notes </label>
                            </div>
                            <div >
                                <TextField required className='emp-note-box' variant="outlined" onChange={(event) => this.handleNote(event)} value={this.state.note} />
                            </div>

                            <br />

                            <Stack className='submit-reset-button' spacing={15} direction="row">
                                <Button variant="outlined" onClick={this.notifyCancel}>Cancel</Button>
                                <ToastContainer />
                                <Button type="submit" variant="outlined" onClick={this.handleSubmit}>Submit</Button>
                                <ToastContainer />
                                <Button variant="outlined">Reset</Button>
                            </Stack>
                            
                 {/* <CardActions className="action_container">
                     <div><Button variant="outlined" className="action_button" >Cancel</Button>
                         <Button variant="outlined" className="action_button" onClick={this.handleSubmit}>Submit</Button>
                         <Button variant="outlined" className="action_button">Reset</Button>
                     </div>
                 </CardActions> */}
                        </form>
                    </div>
                </Card>
            </div>
        );
    }
}