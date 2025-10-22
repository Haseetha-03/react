import React from 'react';
import Chart from 'react-apexcharts';

// ====================== TopStats ======================
const TopStats = () => {
  const options = {
    chart: {
      type: 'bar',
      height: 300,
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '60%',
        distributed: true,
      },
    },
    colors: ['#00E396', '#008FFB', '#FEB019', '#FF4560'],
    dataLabels: {
      enabled: true,
      style: { fontSize: '14px', fontWeight: 'bold' },
    },
    xaxis: {
      categories: ['Revenue', 'Orders', 'Customers', 'Returns'],
    },
  };

  const series = [
    {
      data: [120000, 42020, 31160, 22000],
    },
  ];

  return <Chart options={options} series={series} type="bar" height={300} />;
};

// ====================== MonthlyProgress ======================
const MonthlyProgress = () => {
  const options = {
    chart: { type: 'radialBar' },
    labels: ['June', 'May', 'April'],
    colors: ['#00E396', '#FEB019', '#FF4560'],
  };
  const series = [80, 60, 40];

  return <Chart options={options} series={series} type="radialBar" height={300} />;
};

// ====================== SalesLineChart ======================
const SalesLineChart = () => {
  const options = {
    chart: { type: 'line' },
    xaxis: { categories: ['01/01', '01/02', '01/03'] },
    stroke: { curve: 'smooth' },
  };
  const series = [
    { name: 'Electronics', data: [30, 40, 35] },
    { name: 'Fashion', data: [20, 30, 25] },
    { name: 'Home', data: [10, 20, 15] },
  ];

  return <Chart options={options} series={series} type="line" height={300} />;
};

// ====================== ProductBarChart ======================
const ProductBarChart = () => {
  const options = {
    chart: { type: 'bar' },
    xaxis: { categories: ['Q1', 'Q2', 'Q3', 'Q4'] },
  };
  const series = [
    { name: 'Mobiles', data: [40, 60, 70, 80] },
    { name: 'Laptops', data: [30, 50, 60, 70] },
    { name: 'Appliances', data: [20, 40, 50, 60] },
  ];

  return <Chart options={options} series={series} type="bar" height={300} />;
};

// ====================== CategoryAreaChart ======================
const CategoryAreaChart = () => {
  const options = {
    chart: { type: 'area' },
    xaxis: { categories: ['Q1', 'Q2', 'Q3', 'Q4'] },
  };
  const series = [
    { name: 'Electronics', data: [20, 40, 60, 80] },
    { name: 'Fashion', data: [15, 35, 55, 75] },
    { name: 'Home', data: [10, 30, 50, 70] },
  ];

  return <Chart options={options} series={series} type="area" height={300} />;
};

// ====================== ConversionStats ======================
const ConversionStats = () => {
  const options = {
    chart: {
      type: 'line',
      toolbar: { show: false },
      animations: { enabled: true, easing: 'easeinout', speed: 800 },
    },
    stroke: {
      curve: 'smooth',
      width: 4,
    },
    markers: {
      size: 5,
      strokeWidth: 2,
      hover: { size: 7 },
    },
    xaxis: {
      categories: [
        '01/15/2002',
        '01/16/2002',
        '01/17/2002',
        '01/18/2002',
        '01/19/2002',
        '01/20/2002',
      ],
      labels: { style: { fontSize: '12px' } },
    },
    yaxis: {
      min: 0,
      max: 60,
      tickAmount: 6,
      labels: { style: { fontSize: '12px' } },
    },
    colors: ['#008FFB', '#00E396', '#FEB019'],
    legend: {
      position: 'top',
      horizontalAlign: 'center',
      fontSize: '14px',
    },
    grid: {
      borderColor: '#e0e0e0',
      strokeDashArray: 4,
    },
  };

  const series = [
    { name: 'Visitors', data: [10, 20, 30, 40, 50, 60] },
    { name: 'Added to Cart', data: [5, 25, 35, 45, 55, 50] },
    { name: 'Completed Purchase', data: [2, 15, 25, 35, 45, 40] },
  ];

  return <Chart options={options} series={series} type="line" height={350} />;
};

// ====================== Dashboard ======================
const Dashboard = () => (
  <div className="container mt-4">
    <TopStats />

    <div className="row">
      <div className="col-md-6">
        <MonthlyProgress />
      </div>
      <div className="col-md-6">
        <SalesLineChart />
      </div>
    </div>

    <div className="row mt-4">
      <div className="col-md-6">
        <ProductBarChart />
      </div>
      <div className="col-md-6">
        <CategoryAreaChart />
      </div>
    </div>

    <div className="row mt-4">
      <div className="col-md-6">
        <ConversionStats />
      </div>
    </div>
  </div>
);

export default Dashboard;
