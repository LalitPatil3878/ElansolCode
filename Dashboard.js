import React from 'react';
import { Table } from 'react-bootstrap';

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Column1</th>
            <th>Column2</th>
            <th>Column3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Data1</td>
            <td>Data2</td>
            <td>Data3</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Data4</td>
            <td>Data5</td>
            <td>Data6</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Dashboard;
