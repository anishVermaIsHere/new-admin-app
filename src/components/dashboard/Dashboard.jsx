import React, { useState, useId} from 'react'
import Card from './Card'
import Linechart from '../charts/Linechart';
import Barchart from '../charts/Barchart';
import Table from '../table/Table';


const Dashboard = () => {
    const uid=useId();
    const [cards,setCards]=useState([
        {
            title:'Primary',
            content:'',
            bgColor:'bg-primary',
            id:1
        },
        {
            title:'Warning',
            content:'',
            bgColor:'bg-warning',
            id:2
        },
        {
            title:'Success',
            content:'',
            bgColor:'bg-success',
            id:3
        },
        {
            title:'Danger',
            content:'',
            bgColor:'bg-danger',
            id:4
        }
    ])
  return (
    <div className="container-fluid px-4">
        <h1 className="mt-4">Dashboard</h1>
        <ol className="breadcrumb mb-4">
            <li className="breadcrumb-item active">Dashboard</li>
        </ol>
        <div className="row">
            {cards.map(card=><Card key={uid} data={card} />)}
        </div>
        <div className="row">
            <div className="col-xl-6">
            <div className="card mb-4">
                <div className="card-header">
                <i className="fas fa-chart-area me-1" />
                    Area Chart Example
                </div>
                <div className="card-body">
                    <Linechart />
                </div>
            </div>
            </div>
            <div className="col-xl-6">
            <div className="card mb-4">
                <div className="card-header">
                <i className="fas fa-chart-bar me-1" />
                    Bar Chart Example
                </div>
                <div className="card-body">
                    <Barchart />
                </div>
            </div>
            </div>
        </div>
        <div className="card mb-4">
            <div className="card-header">
            <i className="fas fa-table me-1" />
                DataTable Example
            </div>
            <div className="card-body">
                <Table />
            </div>
        </div>
    </div>
  )
}

export default Dashboard