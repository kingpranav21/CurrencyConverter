import React, { useEffect, useState } from 'react'

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    useEffect(() => {
        fetch(
          `https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`
        )
          .then((res) => res.json()) //converting data from api into json
          .then((res) => setData(res[currency])); //the response that has been returned
            //getting access of data
        console.log(data);
    }, [currency]);
    console.log(data);
    return data;
}

export default useCurrencyInfo
