// src/pages/HospitalDetails.tsx
import React from 'react';
import { useLocation } from 'react-router-dom';

interface Hospital {
  id: number;
  name: string;
  address: string;
  bloodTypes: string;
}

const HospitalDetail: React.FC = () => {
  // const location = useLocation<{ hospital: Hospital }>();
  // const { hospital } = location.state;

  return (
    <div className="py-16 px-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Hospital Details</h2>
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        {/* <h3 className="text-2xl font-semibold mb-2">{hospital.name}</h3>
        <p className="text-lg mb-2">{hospital.address}</p> */}
        <p className="text-lg font-semibold">Available Blood Types:</p>
        <ul className="list-disc list-inside">
          {/* {hospital.bloodTypes.split(' ').map((type, index) => (
            <li key={index}>{type}</li>
          ))} */}
        </ul>
      </div>
    </div>
  );
};

export default HospitalDetail;
