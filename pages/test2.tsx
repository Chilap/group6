import { useState } from 'react';

type Item = {
  item: string;
  item2: string;
}

function Demo() {
  const [data, setData] = useState<Item>({item: '', item2: ''});

  function save() {
    localStorage.setItem('data', JSON.stringify(data));
    console.log('Data is saved');
  }

  function load() {
    const read = localStorage.getItem('data');    
    if (read) {
      const obj = JSON.parse(read) as Item;
      setData(obj);
      console.log('Loading is done');
    } else {
      console.log('No data is found');
    }
  }

  function clear() {
    localStorage.removeItem('data');    
    console.log('Data is cleared');
  }

  return (
    <div>
      Data 1: <input value={data.item} onChange={x => setData({ ...data, item: x.target.value })} />
      <br />
      Data 2: <input value={data.item2} onChange={x => setData({ ...data, item2: x.target.value })} />
      <br />
      <button onClick={save}>Save to local storage</button>
      <button onClick={load}>Load from local storage</button>
      <button onClick={clear}>Clear local storage</button>
    </div>
  );
};

export default Demo;