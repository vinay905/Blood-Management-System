import React from 'react';

const Dashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8">Blood Bank Management System Dashboard</h1>

        {/* Replace these with actual dashboard components */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 shadow-md rounded-md">
            <h2 className="text-lg font-semibold mb-4">Total Blood Donations</h2>
            <p className="text-gray-700">1200 donations this month</p>
          </div>

          <div className="bg-white p-4 shadow-md rounded-md">
            <h2 className="text-lg font-semibold mb-4">Blood Stock Levels</h2>
            <p className="text-gray-700">O+: 300 units | AB-: 150 units</p>
          </div>

          <div className="bg-white p-4 shadow-md rounded-md">
            <h2 className="text-lg font-semibold mb-4">Donor Registration</h2>
            <p className="text-gray-700">10 new donors today</p>
          </div>

          {/* Add more dashboard components as needed */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
