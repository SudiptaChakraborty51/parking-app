import React from 'react';

function App() {
  return (
    <div className="wrapper">
      <h1>Car Parking Management App</h1>
      <p>Add and view currently present vehicles in the garage</p>
      <div className='main'>
        <div className='form-container'>
          <form autoComplete="off" className='form-group'>
            <label>Vehicle Number</label>
            <input type="text" className='form-control' required></input>
            <br></br>
            <label>Driver Name</label>
            <input type="text" className='form-control' required></input>
            <br></br>
            <label>Check-in Time</label>
            <input type="time" className='form-control' required></input>
            <br></br>
            <label>Check-out Time</label>
            <input type="time" className='form-control' required></input>
            <br></br>
            <button type="submit" className='btn btn-success btn-md'>ADD</button>
          </form>
        </div>
        <div className='view-container'>

        </div>
      </div>
    </div>
  );
}

export default App;
