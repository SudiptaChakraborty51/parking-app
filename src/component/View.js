import React from 'react'
import {Icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'

const View = ({vehicles, deleteVehicle}) => {
  return (
    vehicles.map(vehicle=>(
        <tr key={vehicle.vehicleNumber}>
            <td>{vehicle.vehicleNumber}</td>
            <td>{vehicle.driverName}</td>
            <td>{vehicle.checkInTime}</td>
            <td>{vehicle.checkOutTime}</td>
            <td className='delete-btn' onClick={()=>deleteVehicle(vehicle.vehicleNumber)}>
                <Icon icon={trash}/>
            </td>   
        </tr>
    ))
  )
}

export default View;
