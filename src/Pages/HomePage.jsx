import React, { Component } from 'react';
import EmpAppBar from '../Components/AppBar/EmpAppBar';
import EmpDetailCard from '../Components/EmployeeDetailsCard/EmpDetailCard';

class HomePage extends Component {
    render() {
        return (
            <div>
                <EmpAppBar/>
                <EmpDetailCard/>
            </div>
        );
    }
}

export default HomePage;
