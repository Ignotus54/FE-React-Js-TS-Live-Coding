import React from 'react';
import './App.css';

interface Item {
  id: number;
  name: string;
}

function App() {
  const [items, setItems] = React.useState<Item[]>([]);
  const [inputValue, setInputValue] = React.useState<string>('');

  const addItem = () => {
    if (inputValue.trim()) {
      setItems([...items, { id: Date.now(), name: inputValue.trim() }]);
      setInputValue('');
    }
  };

  const deleteItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ height: '20%', backgroundColor: '#0d65ff', color: 'white', padding: '2rem' }}>
        <h1>Uniper Technical Assessment</h1>
        <h4>Basic Lab Setup</h4>
      </div>
      <div style={{ height: '80%', display: 'flex', flexDirection: 'column' }}>
      </div>
    </div>
  );
}

export default App;
