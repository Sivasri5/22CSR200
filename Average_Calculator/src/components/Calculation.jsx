import React, { useState } from 'react';
import axios from 'axios';
import "../App.css";

const Calculation = ()  => {
    const [result, setResult] = useState(null);
  const [type, setType] = useState('e');

  const fetchNumbers = async () => {
    try {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQ3MDI4MDAzLCJpYXQiOjE3NDcwMjc3MDMsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImZjZDRiYTEyLWRhOTYtNDU4NC05NTU1LTNlNzE2OWQyYWE2OCIsInN1YiI6InNpdmFzcmlyLjIyY3NlQGtvbmd1LmVkdSJ9LCJlbWFpbCI6InNpdmFzcmlyLjIyY3NlQGtvbmd1LmVkdSIsIm5hbWUiOiJzaXZhc3JpIHIiLCJyb2xsTm8iOiIyMmNzcjIwMCIsImFjY2Vzc0NvZGUiOiJqbXBaYUYiLCJjbGllbnRJRCI6ImZjZDRiYTEyLWRhOTYtNDU4NC05NTU1LTNlNzE2OWQyYWE2OCIsImNsaWVudFNlY3JldCI6IllrcFNoalVERWR1WXRVcWoifQ.RWKzJS7djNc2pkUksLo4jVTYTXaNlnX_y1oMh7KK8pM"; 
    
        const res = await axios.get(`http://localhost:9876/numbers/${type}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
    
        setResult(res.data);
      } catch (error) {
        alert('Failed to fetch');
        console.error(error);
      }
  };

  return (
    <div>
      <h1>Average Calculator</h1>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="p">Prime</option>
        <option value="f">Fibonacci</option>
        <option value="e">Even</option>
        <option value="r">Random</option>
      </select>
      <button onClick={fetchNumbers}>Calculate</button>

      {result && (
        <div>
          <h2>Result:</h2>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
  

export default Calculation




















