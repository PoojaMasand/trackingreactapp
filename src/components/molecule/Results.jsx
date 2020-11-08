import React, {useState} from 'react';
import Cards from './Cards';
import Button from '@material-ui/core/Button';

/*
This method is used to call Cards.jsx where package details are rendered on the screen.
This is also used to search the package based on package id.
This is also used to sort the package detail using ETA, Status, Location and sender.
*/

export default function Results (data)

{
    const [query, setQuery] = useState("");
    const [cards, setCards] = useState(sortCards("eta"));
    
    function sortCards(key) {
        const sortedResults = data.items.sort((a, b) => (a[key] > b[key] ? 1 : -1));
        return sortedResults.map((item) => <Cards key={item.id} items={item} />);
       
      }

      function searchByParcelId() {
          
          if(query !== '')
          {
            const parcelMatch = data.items.filter(records => records.parcel_id === query)
            return parcelMatch.map((item) => <Cards key={item.id} items={item} />);

          }
          else
            return sortCards("eta");

      }

    
    return(
        <div>
        <section className="container">
        <div className="search-bar">
        <input
          placeholder="Search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <Button onClick={() => setCards(searchByParcelId())} variant="contained" color="primary">
        Search By Parcel Id
        </Button>
        </div>
      
        <p>Sort Result By</p>
        <Button onClick={() => setCards(sortCards("sender"))} variant="outlined" color="primary">
         Sender
        </Button>
        <Button onClick={() => setCards(sortCards("status"))} variant="outlined" color="primary">
         Status
        </Button>
        <Button onClick={() => setCards(sortCards("location_name"))} variant="outlined" color="primary">
         Location
        </Button>
        <Button onClick={() => setCards(sortCards("eta"))} variant="outlined" color="primary">
         ETA
        </Button>
        <hr />
        <div className="displayItems">
            {cards}
            </div>
        
        </section>
        </div>
    );
}