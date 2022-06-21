import { useState } from 'react';
import useFetchCovidStatistic from '../hooks/useFetchCovidStatistic';
import Popup from '../popup';

import './style.css';

export default function Table({ filterText }) {
  const { covidStats, isLoading } = useFetchCovidStatistic();
  const [selectedCountryStat, setSelectedCountryStat] = useState();
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  function handleClick(countryStat) {
    return () => {
      setSelectedCountryStat(countryStat);
    };
  }

  function handleClose() {
    setSelectedCountryStat(null);
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th className="tableHeader-first">№</th>
            <th className="tableHeader-middle">Country</th>
            <th className="tableHeader-last">Total Confirmed</th>
          </tr>
        </thead>

        <tbody>
          {covidStats
            .filter((countryStat) =>
              countryStat.country.toLowerCase().includes(filterText.toLowerCase())
            )
            .map((countryStat, index) => {
              return (
                <tr className="tableElem" key={countryStat.id} onClick={handleClick(countryStat)}>
                  <td className="tableElem-first">{index + 1}</td>
                  <td className="tableElem-middle">{countryStat.country}</td>
                  <td className="tableElem-last">{countryStat.totalConfirmed}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
      {selectedCountryStat && (
        <Popup
          countryName={selectedCountryStat.country}
          totalConfirmed={selectedCountryStat.totalConfirmed}
          totalDeath={selectedCountryStat.totalDeaths}
          totalRecovered={selectedCountryStat.totalRecovered}
          handleClose={handleClose}
        />
      )}
    </>
  );
}
