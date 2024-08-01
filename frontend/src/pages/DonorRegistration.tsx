import axios from 'axios';
import { donorRegistration } from '../api/DonorApi';
import React, { useState } from 'react';
import Header from '../components/Header';
const DonorRegistration = () => {
    const [responseStatus, setStatus] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        age: 0,
        bloodType: '',
        email: '',
        phone: '',
        address: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await donorRegistration(formData);
            console.log('Form Data Submitted:', response);
            setFormData({
                name: '',
                age: 0,
                bloodType: '',
                email: '',
                phone: '',
                address: ''
            });
            setStatus(true);
        } catch (error) {
            console.error('Error submitting form data:', error);
            setStatus(true);
        }
    };

    return (
        <div>
            <Header/>
        
        <div className="flex justify-center items-center min-h-screen bg-white">
            <div className="w-full max-w-lg p-8 bg-red-100 shadow-md rounded-lg">
                <h2 className="text-2xl font-bold text-center text-red-700 mb-6">Blood Donor Registration</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-red-700" htmlFor="name">Name</label>
                        <input
                            className="w-full px-3 py-2 border border-red-300 rounded focus:outline-none focus:border-red-500"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-red-700" htmlFor="age">Age</label>
                        <input
                            className="w-full px-3 py-2 border border-red-300 rounded focus:outline-none focus:border-red-500"
                            type="number"
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-red-700" htmlFor="bloodType">Blood Type</label>
                        <select
                            className="w-full px-3 py-2 border border-red-300 rounded focus:outline-none focus:border-red-500"
                            name="bloodType"
                            value={formData.bloodType}
                            onChange={handleChange}
                            required
                        >
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
                    <div>
                        <label className="block text-red-700" htmlFor="email">Email</label>
                        <input
                            className="w-full px-3 py-2 border border-red-300 rounded focus:outline-none focus:border-red-500"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-red-700" htmlFor="phone">Phone</label>
                        <input
                            className="w-full px-3 py-2 border border-red-300 rounded focus:outline-none focus:border-red-500"
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-red-700" htmlFor="address">Address</label>
                        <input
                            className="w-full px-3 py-2 border border-red-300 rounded focus:outline-none focus:border-red-500"
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="text-center">
                        <button
                            className="w-full px-4 py-2 bg-red-700 text-white font-bold rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                            type="submit">Register
                        </button>
                    </div>
                </form>
                
            </div>
            
        </div>
        </div>
    );
}
export default DonorRegistration;