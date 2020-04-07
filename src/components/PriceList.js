import React, { useState, useEffect } from 'react';
import axios from 'axios';

const token = `pk_76a0a173b05a474d902b5b604bc8da1a`
const path = `/stock/market/batch?symbols=aapl,fb,tsla&types=chart&range=ytd&token=${token}`
const baseUrl = `https://cloud.iexapis.com/stable`

export const PriceList = () => {
  const [ stocks, setStocks ] = useState([])

  useEffect(() => {
    axios
      .get(`${baseUrl}${path}`)
      .then(res => {
        const data = res.data;
        for (let key in data){
          setStocks([...stocks, data[key]])
        }
      })
  }, [])

  return (
    <div>

    </div>
  )
}
