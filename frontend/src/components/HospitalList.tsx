// src/components/HospitalsList.tsx
import React, { useEffect, useState } from 'react';
import { getAllHospitals } from '../api/HospitalApi';
import { Link } from 'react-router-dom';

interface Hospital {
  id: number;
  name: string;
  address: string;
  bloodTypes: string;
}

const HospitalsList: React.FC = () => {
  const [hospitals, setHospitals] = useState<Hospital[]>([]);

  useEffect(() => {
    const fetchHospitals = async () => {
      try {
        const data: Hospital[] = await getAllHospitals();
        console.log(data);
        setHospitals(data);
      } catch (error) {
        console.log(error);
      }
      
    };

    fetchHospitals();
  }, []);

  return (
    <div className="py-16 px-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Hospitals with Available Blood</h2>
      <div className="max-w-4xl mx-auto">
        {hospitals.map((hospital) => (
          <div key={hospital.id} className="bg-white p-6 rounded-lg shadow-md mb-6">
            <Link
              className="text-2xl font-semibold mb-2"
              to={{
                pathname: `/hospital-details`,
                // state: { hospital }
              }}
            >
              {hospital.name}
            </Link>
            <p className="text-lg mb-2">{hospital.address}</p>
            <p className="text-lg font-semibold">Available Blood Types:</p>
            <ul className="list-disc list-inside">
              {hospital.bloodTypes.split(' ').map((type, index) => (
                <li key={index}>{type}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HospitalsList;
