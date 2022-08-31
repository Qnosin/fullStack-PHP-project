import axios from 'axios';
import { useEffect, useState } from 'react';
import PieChart from './components/PieChart';
import { Chart as ChartJS, PieController } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import Button from 'react-bootstrap/Button';

import './App.css';
import { Link } from 'react-router-dom';
ChartJS.register(
  PieController
);
function App() {
  const [chartData, setChartData] = useState([]);
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    getData();
  }, [])

  function getData() {
    axios.get('http://localhost/api/').then((res) => {
      setChartData(res.data);
      setTableData(res.data);
    }
    )
  }


  function deleteChanel(id) {
    console.log(id);
    axios.delete(`http://localhost/api/${id}/delete`).then((res) => {
      console.log(res.data);
      getData();
    })
  }
  const data = {
    labels: chartData.map((x => x.nazwa)),
    datasets: [{
      label: 'My First Dataset',
      data: chartData.map((x => x.ilosc)),
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(205, 205, 26)',
        'rgb(105, 205, 26)',
      ],
      hoverOffset: 4
    }]
  };


  return (
    <div className="App">
      <div className='Pie-container'>
        <Pie className='pie' height={400} data={data}></Pie>
      </div>
      <table>
        <tr className='table-center'>
          <h2>Legend</h2>
          {tableData.map(data => {
            return (
              <>
                <td className='legend-item'>{data.nazwa} : {data.ilosc} <Button variant='primary'><Link to={`/api/${data.id}`}><span className='edit-btn' >Edit</span></Link></Button> <Button variant='danger' onClick={() => deleteChanel(data.id)}>Delete</Button></td>
              </>
            )
          })}
        </tr>

      </table>
    </div>
  );
}

export default App;
