import React, { useState } from 'react'
import "../css/currency.css"
import axios from "axios"

export default function Currency() {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("TRY");
  let [result, setResult] = useState(0);

  const baseUrl = "https://api.currencyfreaks.com/v2.0/rates/latest"
  //API Key: this is use for authenticate the Exchangerates API with the access_key parameter:
  const apikey = "2bea7cde5a71497194b972e2cad807db"
  //const url = `${baseUrl}?apikey=${apikey}&from=${fromCurrency}&to=${toCurrency}&amount=${amount} `
  //const url = `${baseUrl}?apikey=${apikey}&base=${fromCurrency}`
  const url = `${baseUrl}?apikey=${apikey}`

  
  const exchange=()=>{
    const response = async ()=>{
     const data = await axios.get(url);
     //console.log("toCuurency : "+data.data.rates[`${toCurrency}`]);
     //console.log(data.data.rates[`${toCurrency}`]);
     result = data.data.rates[`${toCurrency}`]*amount
     result = result.toFixed(3);
     setResult(result);
     console.log(result);
  }
  response();
}
    

  
  return (
    <div className='container'>

      <div className='currency-div'>
        <div className='header'>
          <h3>DÖVİZ KURU UYGULAMASI</h3>
        </div>

        <div className="input-group input-group-sm mb-3">
          <input type="number" className="form-control " onChange={(e)=>{setAmount(e.target.value)}}/>

          <select className="form-select form-select-lg" onChange={(e)=>{setFromCurrency(e.target.value)}}>
            <option value="USD">USD</option>
            <option value="EUR">EURO</option>
            <option value="TRY" >TRY</option>
          </select>

          <span className='icon'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
              <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
            </svg>
          </span>


          <select className="form-select form-select-lg" defaultValue={toCurrency} onChange={(e)=>{setToCurrency(e.target.value)}} >
            <option value="USD">USD</option>
            <option value="EUR">EURO</option>
            <option value="TRY">TRY</option>
          </select>

          <input type="number" className="form-control " readOnly value={result} />

        </div>
        <div>
          <button type="button" className="btn btn-danger btn-lg" style={{ cursor: "pointer" }} onClick={()=>exchange()}>Çevir</button>
        </div>

      </div>

    </div >
  )
}
