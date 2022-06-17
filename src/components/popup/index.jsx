import confirmed from '../../assets/confirmed.png';
import death from '../../assets/death.png';
import recover from '../../assets/recover.png';
import './style.css';

export default function Popup({
  countryName,
  totalConfirmed,
  totalDeath,
  totalRecovered,
  handleClose
}) {
  return (
    <div className="overlay popUp">
      <div className="wrapper">
        <h2>{countryName}</h2>
        <div className="popUp-info">
          <div className="infoConfirmed">
            <div className="popUp-info-text">
              <img src={confirmed} alt="confirmed" />
              <p>Total Confirmed</p>
            </div>
            <p className="infoConfirmed-number">{totalConfirmed}</p>
          </div>
          <div className="infoDeath">
            <div className="popUp-info-text">
              <img src={death} alt="death" />
              <p>Total Death</p>
            </div>
            <p className="infoDeath-number">{totalDeath}</p>
          </div>
          <div className="infoRecover">
            <div className="popUp-info-text">
              <img src={recover} alt="recover" />
              <p>Total Recovered</p>
            </div>
            <p className="infoRecover-number">{totalRecovered}</p>
          </div>
        </div>
        <button className="popUp-button" onClick={handleClose}>
          OK
        </button>
      </div>
    </div>
  );
}
