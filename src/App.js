import Header from './components/header';
import Table from './components/table';
import { useState } from 'react';

function App() {
  const [filterText, setFilterText] = useState('');
  return (
    <>
      <Header filterText={filterText} onFilterTextChange={setFilterText} />
      <main>
        <Table filterText={filterText} />
      </main>
    </>
  );
}

export default App;
