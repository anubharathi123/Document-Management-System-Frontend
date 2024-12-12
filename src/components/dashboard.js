import React, { useState } from "react";
import './profile.css';
import { Pie } from 'react-chartjs-2';

const App = () => {
    return (
        <div style={{ background: "rgb(248, 249, 250)" }}>
            <Dashboard />
            <PieChart />
        </div>
    );
};

const Dashboard = () => {

    return (
    <div className="dashboard">
        <h1><center>Dashboard</center></h1>
        
        <p1>Number Of Companies</p1>
        <br></br>
        <br></br>
        <p2>Active Companies:126</p2>
        <br></br>
        <br></br>
        <p3>Inactive Companies:32</p3>
        
    </div>
    )
}

const PieChart = () => {
    const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
        datasets: [
            {
                data: [12, 19, 3, 5, 2],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
            },
        ],
    };

    return (
        <div style={{ width: '50%', margin: 'auto' }}>
            <h2>Pie Chart Example</h2>
            <Pie data={data} />
        </div>
    );
};
export default App;