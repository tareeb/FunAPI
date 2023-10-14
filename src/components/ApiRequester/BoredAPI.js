"use client"

import "./BoredAPI.css"
import { useState } from 'react'

export default function BoredAPIFilters({Data , setData}) {

        const [selectedFilter, setSelectedFilter] = useState('none');
        const [selectedValue, setSelectedValue] = useState('education');
        const [minPrice, setMinPrice] = useState(0);
        const [maxPrice, setMaxPrice] = useState(0.1);
        const [minAccessibility, setMinAccessibility] = useState(0);
        const [maxAccessibility, setMaxAccessibility] = useState(0.1);
        const [participants, setParticipants] = useState(1);
        
        const [requestStatus , setRequestStatus] = useState('idle');
        const [error , setError] = useState(null);
        

        const validate = () => {
          if (selectedFilter === 'participants' && (participants < 1 || participants > 5)) {
            setError('Please select participants between 1 to 5');
            console.log('Please select participants between 1 to 5');
            return false;
          }
          return true;
        }

        const getdata = async () => {

            setRequestStatus('pending');

            if (!validate()) {
              setRequestStatus('rejected');
              return;
            }

            let apiUrl = 'http://www.boredapi.com/api/activity?';

            if (selectedFilter === 'type') {
            apiUrl += `type=${selectedValue}`;
            } else if (selectedFilter === 'price') {
            apiUrl += `minprice=${minPrice}&maxprice=${maxPrice}`;
            } else if (selectedFilter === 'accessibility') {
            apiUrl += `minaccessibility=${minAccessibility}&maxaccessibility=${maxAccessibility}`;
            } else if (selectedFilter === 'participants') {
            apiUrl += `participants=${participants}`;
            }

           
            fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setData( prevData => addunique(prevData,data) );
                setRequestStatus('resolved');
            })
            .catch((error) => {
                console.log(error);
                setRequestStatus('rejected');
                setError(error.message);
            });
        }

        const addunique = (dataArray, newData) => {
          const isDataExists = dataArray.some(item => item.activity === newData.activity); 
          if (!isDataExists) {
            return [newData , ...dataArray];
          }
          return dataArray;
          
        };   
        
        

  return (
    <div className='options-container'>
        <h2>Filter Options</h2>
       
        <div>
            <label htmlFor="filter">Select a Filter:</label>

            <select
                id="filter"
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                >
                <option value="none">None</option>
                <option value="type">Type</option>
                <option value="price">Price</option>
                <option value="accessibility">Accessibility</option>
                <option value="participants">Participants</option>
            </select>
       </div>

      {selectedFilter === 'type' && (
        <div>
          <label htmlFor="type">Activity Type:</label>
         <select
            id="type"
            value={selectedValue}
            onChange={(e) => setSelectedValue(e.target.value)}
            >
            <option value="education">Education</option>
            <option value="recreational">Recreational</option>
            <option value="social">Social</option>
            <option value="diy">DIY</option>
            <option value="charity">Charity</option>
            <option value="cooking">Cooking</option>
            <option value="relaxation">Relaxation</option>
            <option value="music">Music</option>
            <option value="busywork">Busywork</option>
        </select>

        </div>
      )}

      {selectedFilter === 'price' && (
        <div>
          <label htmlFor="minPrice">Minimum Price:</label>
          <input
            type="range"
            id="minPrice"
            min="0"
            max="1"
            step="0.01"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
          <span>{minPrice}</span>
          <br />
          <label htmlFor="maxPrice">Maximum Price:</label>
          <input
            type="range"
            id="maxPrice"
            min="0"
            max="1"
            step="0.01"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
          <span>{maxPrice}</span>
        </div>
      )}

      {selectedFilter === 'accessibility' && (
        <div>
          <label htmlFor="minAccessibility">Minimum Accessibility:</label>
          <input
            type="range"
            id="minAccessibility"
            min="0"
            max="1"
            step="0.01"
            value={minAccessibility}
            onChange={(e) => setMinAccessibility(e.target.value)}
          />
          <span>{minAccessibility}</span>
          <br />
          <label htmlFor="maxAccessibility">Maximum Accessibility:</label>
          <input
            type="range"
            id="maxAccessibility"
            min="0"
            max="1"
            step="0.01"
            value={maxAccessibility}
            onChange={(e) => setMaxAccessibility(e.target.value)}
          />
          <span>{maxAccessibility}</span>
        </div>
      )}

      {selectedFilter === 'participants' && (
        <div>
          <label htmlFor="participants">Participants (1-5):</label>
          <input
            type="number"
            id="participants"
            min="1"
            max="5"
            value={participants}
            onChange={(e) => setParticipants(e.target.value)}
          />
        </div>
      )}

    <div className='button-container'>
        <button onClick={getdata} 
                disabled={requestStatus === 'pending' ? true : false}
        >{requestStatus === 'pending' ? "Loading" : "Get Random Activity"}</button>
    </div>

    {
        requestStatus === 'rejected' &&
      <div className="error-Container">
        <p>{error}</p>
      </div>
    }
    </div>
        
  );
}
