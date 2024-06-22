import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios';

const StockBarChart = ({ stockSymbol, dateRange }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`https://api.example.com/stocks/${stockSymbol}/volume?range=${dateRange}`);
      setData(result.data);
    };
    fetchData();
  }, [stockSymbol, dateRange]);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="volume" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default StockBarChart;
