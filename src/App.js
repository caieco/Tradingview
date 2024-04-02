import Chart from "./chart";
import { getCandles } from './DataService';
import { useEffect, useState } from 'react';


function App() {

  const [symbol, setSymbol] = useState('BTCUSDT')
  const [interval, setIntervalValue] = useState('1m')
  const [data, setData] = useState([]);

  useEffect(() => {
    getCandles(symbol, interval)
      .then(data => setData(data))
      .catch(err => {
        if (err.response) {
          alert(err.response.data);
        } else {
          alert(err.message);
        }
      })
  }, [symbol, interval])

  function onSymbolChange(event){
    setSymbol(event.target.value)
  }

  function onIntervalChange(event){
    setIntervalValue(event.target.value)
}

  return (
    <div>
      <select onChange={onSymbolChange}>
        <option>BTCUSDT</option>
        <option>ETHUSDT</option>
        <option>LTCUSDT</option>
      </select>
      <select onChange={onIntervalChange}>
        <option>1m</option>
        <option>5m</option>
        <option>15m</option>
        <option>1h</option>
        <option>4h</option>
      </select>
      <Chart data={data} />
    </div>
  );
}

export default App;
