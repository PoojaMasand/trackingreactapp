import React from 'react';

export default function Cards(props)
{   
    
    return(
            <div >

        
            <p className = "leftSide"> 
            <label className="parcel" >Parcel ID  </label> {props.items.parcel_id}
            </p>

            <p className = "leftSide">
                <label className="parcel">ETA </label> {props.items.eta}
            </p>
            <p className = "leftSide">
                <label className="parcel">Location Name </label>{props.items.location_name}
            </p>
            <p className = "leftSide">
                <label className="parcel">Sender </label>{props.items.sender}
            </p>
            <p className = "leftSide">
                <label className="parcel">Status </label>{props.items.status}
            </p>

            <hr/>
            </div>
     
        )

}