import React from 'react'
import { NavLink } from 'react-router-dom'
import Table from './Table'

const TableSection = () => {
  return (
    <div className="container-fluid px-4">
      <h1 className="mt-4">Tables</h1>
      <ol className="breadcrumb mb-4">
        <li className="breadcrumb-item">
          <NavLink to="/">Dashboard</NavLink>
        </li>
        <li className="breadcrumb-item active">Tables</li>
      </ol>
      <div className="card mb-4">
        <div className="card-body">
          DataTables is a third party plugin that is used to generate the demo
          table below. For more information about DataTables, please visit the
          <NavLink target="_blank" to="https://datatables.net/">
            official DataTables documentation
          </NavLink>
          .
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

export default TableSection