import { useEffect, useState } from 'react';

async function fetchCovidStatistic() {
  const response = await fetch('https://api.covid19api.com/summary');
  return await response.json();
}

export default function useFetchCovidStatistic() {
  const [covidStats, setCovidStats] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const data = await fetchCovidStatistic();
      const countriesData = data.Countries.map((e) => {
        return {
          id: e.ID,
          country: e.Country,
          totalDeaths: e.TotalDeaths,
          totalRecovered: e.TotalRecovered,
          totalConfirmed: e.TotalConfirmed
        };
      });
      setCovidStats(countriesData);
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { covidStats, isLoading };
}
