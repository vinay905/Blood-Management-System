import React, { useEffect, useState } from 'react';
import { getAllHospitals } from '../api/HospitalApi';
import { useNavigate } from 'react-router-dom';

interface Hospital {
  id: number;
  name: string;
  address: string;
  bloodTypes: string;
}

const HospitalsList: React.FC = () => {
  const [hospitals, setHospitals] = useState<Hospital[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHospitals = async () => {
      try {
        const data: Hospital[] = await getAllHospitals();
        setHospitals(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchHospitals();
  }, []);

  const handleClick = (hospital: Hospital) => {
    navigate('/hospital-details', { state: { hospital } });
  };

  return (
    <div className="py-16 px-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Hospitals with Available Blood</h2>
      <div className="max-w-4xl mx-auto">
        {hospitals.map((hospital) => (
          <div key={hospital.id} className="bg-white p-6 rounded-lg shadow-md mb-6">
            <button
              className="text-2xl font-semibold mb-2 text-blue-500 underline"
              onClick={() => handleClick(hospital)}
            >
              {hospital.name}
            </button>
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
