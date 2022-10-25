import React, { useState, useEffect } from 'react';
import View from './component/View.js';

//getting the values of local storage
const getDataFromLS=()=>{
  const data = localStorage.getItem('vehicles');
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}

function App() {
  //main array of objects state 
  const [vehicles, setVehicles] = useState(getDataFromLS());

  //input field states
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [driverName, setDriverName] = useState('');
  const [checkInTime, setCheckInTime] = useState('');
  const [checkOutTime, setCheckOutTime] = useState('');

  const handleAddVehicles=(e)=>{
    e.preventDefault();
    //creating an object
    let vehicle={
      vehicleNumber,
      driverName,
      checkInTime,
      checkOutTime
    }
    setVehicles([...vehicles, vehicle]);
    setVehicleNumber('');
    setDriverName('');
    setCheckInTime('');
    setCheckOutTime('');
  }

    //delete vehicle from local storage
    const deleteVehicle=(vehicleNumber)=>{
      const filteredVehicles = vehicles.filter((element,index)=>{
        return element.vehicleNumber !== vehicleNumber
      })
      setVehicles(filteredVehicles);
    }

    //saving data to local storage
    useEffect(()=>{
      localStorage.setItem('vehicles',JSON.stringify(vehicles));
    },[vehicles]);

    return (
    <div className="wrapper">
      <h1>Car Parking Management App</h1>
      <p>Add and view currently present vehicles in the garage</p>
      <div className='main'>
        <div className='form-container'>
          <form autoComplete="off" className='form-group' onSubmit={handleAddVehicles}>
            <label>Vehicle Number</label>
            <input type="text" className='form-control' required onChange={(e)=>setVehicleNumber(e.target.value)} value={vehicleNumber}></input>
            <br></br>
            <label>Driver Name</label>
            <input type="text" className='form-control' required onChange={(e)=>setDriverName(e.target.value)} value={driverName}></input>
            <br></br>
            <label>Check-in Time</label>
            <input type="time" className='form-control' required onChange={(e)=>setCheckInTime(e.target.value)} value={checkInTime}></input>
            <br></br>
            <label>Check-out Time</label>
            <input type="time" className='form-control' required onChange={(e)=>setCheckOutTime(e.target.value)} value={checkOutTime}></input>
            <br></br>
            <button type="submit" className='btn btn-success btn-md'>ADD</button>
          </form>
        </div>
        <div className='view-container'>
          {vehicles.length > 0 && <>
            <p>There are {vehicles.length} vehicles in the garage right now.</p>
            <div className='table-responsive'>
              <table className='table'>
                <thead>
                  <tr>
                    <th>Vehicle Number</th>
                    <th>Driver Name</th>
                    <th>Check-in Time</th>
                    <th>Check-out Time</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <View vehicles={vehicles} deleteVehicle={deleteVehicle}/>
                </tbody>
              </table>
            </div>
            <button className='btn btn-danger btn-md'
            onClick={()=>setVehicles([])}>Remove All</button>
          </>}
          {vehicles.length < 1 && <div>No books are added yet</div>}
        </div>
      </div>
    </div>
  );
}

export default App;
