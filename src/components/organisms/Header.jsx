import React, { Component ,useState , useEffect} from 'react';
import Results from '../molecule/Results';
import {Link} from "react-router-dom";
export default function Header({match})
{
    
    const [status, setStatus] = useState(0);
    
    const userName = new RegExp(match.params.name, "i");
    const userPhone = match.params.phone;
    
    console.log("Match value of name  is " + match.params.name);
    console.log("Match value of phone  is " + match.params.phone);
    
    const [information, setInformation] = useState([]);
    const endpoint = "https://my.api.mockaroo.com/orders.json?key=e49e6840";
  
    const getData = async () => {
      try {
        const response = await fetch(endpoint, { mode: "cors" });
        const data = await response.json();
        const results = data.filter((item) => item.user_name.match(userName)) 
                        .filter(nameArray => nameArray.user_phone === userPhone);
        if(results.length === 0)
            setStatus(2); 
        else
        {  
            setInformation(results);
            setStatus(1);
        }
        
      } catch {
        setStatus(2);
      }
    };
        useEffect(() => {             
                getData();    
    
    }, []);
    
    return(

        <div>
       
        {status === 0 ? <p>Loading...</p> : null}
        {status === 1 ? <Results items={information}/> : null}
        {status === 2 ? <div><h3>Sorry we cannot find data</h3> <Link to="/">HOME</Link> </div>: null}
      </div>
);

    
}