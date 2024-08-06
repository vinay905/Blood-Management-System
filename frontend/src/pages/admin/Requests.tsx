import React, { useEffect, useState } from 'react';
import { allRequests } from '../../api/adminApi';

interface Request {
    id: number;
    name: string;
    location: string;
    bloodTypes: string;
    phone: string;
}

const Requests = () => {
    const [requests, setRequests] = useState<Request[]>([]);  // Specify the type of requests
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRequests = async () => {
            try {
                const response = await allRequests();
                setRequests(response.data);
                console.log(response.data);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        };

        fetchRequests();
    }, []); 

    if (loading) return <div>Loading...</div>;

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-6">All Blood Requests</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                    <thead className="bg-gray-800 text-white">
                        <tr>
                            <th className="px-6 py-3 text-left">Name</th>
                            <th className="px-6 py-3 text-left">Blood Type</th>
                            <th className="px-6 py-3 text-left">Phone</th>
                            <th className="px-6 py-3 text-left">Location</th>
                            <th className="px-6 py-3 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {requests.map((request) => (
                            <tr key={request.id} className="bg-white border-b border-gray-200 hover:bg-gray-100">
                                <td className="px-6 py-4">{request.name}</td>
                                <td className="px-6 py-4">{request.bloodTypes}</td>
                                <td className="px-6 py-4">{request.phone}</td>
                                <td className="px-6 py-4">{request.location}</td>
                                <td className="px-6 py-4 text-center">
                                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mr-2">
                                        Edit
                                    </button>
                                    <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Requests;
