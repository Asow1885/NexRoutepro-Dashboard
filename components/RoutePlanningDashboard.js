import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { day: 'Su', orders: 30 },
  { day: 'Mo', orders: 40 },
  { day: 'Tu', orders: 35 },
  { day: 'We', orders: 50 },
  { day: 'Th', orders: 55 },
  { day: 'Fr', orders: 60 },
  { day: 'Sa', orders: 80 }
];

export default function RoutePlanningDashboard() {
  const [onlineDrivers, setOnlineDrivers] = useState(0);
  const [onTimeRate, setOnTimeRate] = useState(0);
  const [distanceToday, setDistanceToday] = useState(0);
  const [ordersOverdue, setOrdersOverdue] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:5000/api/stats/')
      .then(response => {
        const { onlineDrivers, onTimeRate, distanceToday, ordersOverdue } = response.data;
        setOnlineDrivers(onlineDrivers);
        setOnTimeRate(onTimeRate);
        setDistanceToday(distanceToday);
        setOrdersOverdue(ordersOverdue);
      })
      .catch(error => {
        console.error("Error fetching stats:", error);
      });
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">ROUTE PLANNING</h1>
      <div className="flex justify-between mb-4">
        <Button variant="primary">Add Route</Button>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <Card><CardContent><h2>Drivers Online</h2><p>{onlineDrivers}</p></CardContent></Card>
        <Card><CardContent><h2>On-Time Rate</h2><p>{onTimeRate}%</p></CardContent></Card>
        <Card><CardContent><h2>Distance Today</h2><p>{distanceToday} mi</p></CardContent></Card>
        <Card><CardContent><h2>Orders Overdue</h2><p>{ordersOverdue}</p></CardContent></Card>
      </div>
    </div>
  );
}