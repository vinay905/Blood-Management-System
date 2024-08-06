import React, { useEffect,useState } from 'react';
import axios from 'axios';
import { getAllLocations } from '../api/HospitalApi';

const BloodRequestForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        bloodTypes: '',
        location: '',
        phone: '',
    });

    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [locations, setLocations] = useState<string[]>([]);

    useEffect(() => {
        //calling hospital api to get the hospital locations
        const fetchLocations = async () => {
            try {
                const response = await getAllLocations();
                setLocations(response.data);
            } catch (error) {
                console.error('Error fetching locations:', error);
                setErrorMessage('Failed to load locations.');
            }
        };

        fetchLocations();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
        try {
            const response = await axios.post('http://localhost:9090/api/blood-request', formData,{
                auth: {
                    username: 'user',
                    password: 'password'
                  }
            });
            if (response.status === 200) {
                setSuccessMessage('Your blood request has been submitted successfully.');
                setFormData({ name: '', bloodTypes: '', location: '', phone: '' });
                setErrorMessage('');
            }
        } catch (error) {
            setErrorMessage('There was an error submitting your request. Please try again.');
            setSuccessMessage('');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
                <h2 className="text-2xl font-bold mb-6 text-center">Request Blood from Hospitals</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label htmlFor="bloodTypes" className="block text-sm font-medium text-gray-700">Blood Type:</label>
                        <select
                            name="bloodTypes"
                            value={formData.bloodTypes} 
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                            <option value="" disabled>--Choose Blood Type--</option>
                            <option value="">Select</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                        </select>
                    </div>
                    
                    <div>{errorMessage && <p className="mt-4 text-red-600">{errorMessage}</p>}
                        <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location Name:</label>
                        <select
                            name="location"
                            value={formData.location} 
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                            <option value="" disabled>--Choose Location--</option>
                            {locations.map((location, index) => (
                                <option key={index} value={location}>
                                    {location}
                                </option>
                            ))}
                        </select>
                        
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Contact Information:</label>
                        <input
                            type="text"
                            id="contactInfo"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <button type="submit" className="w-full py-2 px-4 bg-red-600 text-white font-semibold rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                        Submit Request
                    </button>
                </form>
                {successMessage && <p className="mt-4 text-green-600">{successMessage}</p>}
                
            </div>
        </div>
    );
};

export default BloodRequestForm;
