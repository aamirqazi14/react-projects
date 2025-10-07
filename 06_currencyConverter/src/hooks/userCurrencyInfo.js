import React, { useEffect, useState } from 'react'

function UserCurrencyInfo(currency) {
   
        const [data, setdata] = useState([])
         useEffect(() => {
             fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => setdata[data])
            console.log(data)
        }, [currency])
       
   return data
}

export default UserCurrencyInfo
