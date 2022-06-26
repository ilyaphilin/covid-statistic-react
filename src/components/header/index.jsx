import Search from '../search';
import logo from '../../assets/logo.png';
import loupe from '../../assets/loupe.png';
import './style.css';

export default function Header({ filterText, onFilterTextChange }) {
  return (
    <header>
      <div className="logoSection">
        <img src={logo} alt="logo" />
        <h1>Statistic</h1>
      </div>
      <div className="searchSection">
        <img src={loupe} alt="loupe" />
        <Search filterText={filterText} onFilterTextChange={onFilterTextChange} />
      </div>
    </header>
  );
}
