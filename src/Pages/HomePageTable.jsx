import React, { Component } from 'react';
import EmpAppBar from '../Components/AppBar/EmpAppBar';
import EmpCard from '../Components/EmployeeDetailsCard/EmpCard';


class HomePageTable extends Component {
    render() {
        return (
            <div>
                <EmpAppBar/>
                <EmpCard/>
            </div>
        );
    }
}

export default HomePageTable;