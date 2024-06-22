import React, { useState } from 'react';
import Header from './components/Header';
import StockLineChart from './components/LineChart';
import StockBarChart from './components/BarChart';
import Dropdown from './components/Dropdown';
import DateRangeSlider from './components/DateRangeSlider';

const App = () => {
  const [stockSymbol, setStockSymbol] = useState('AAPL');
  const [dateRange, setDateRange] = useState('1m');

  return (
    <div>
      <Header />
      <Dropdown
        options={[
          { label: 'Apple', value: 'AAPL' },
          { label: 'Google', value: 'GOOGL' },
          { label: 'Amazon', value: 'AMZN' },
        ]}
        selected={stockSymbol}
        onChange={setStockSymbol}
      />
      <DateRangeSlider
        min="1"
        max="12"
        value={dateRange}
        onChange={setDateRange}
      />
      <StockLineChart stockSymbol={stockSymbol} dateRange={dateRange} />
      <StockBarChart stockSymbol={stockSymbol} dateRange={dateRange} />
    </div>
  );
};

export default App;
