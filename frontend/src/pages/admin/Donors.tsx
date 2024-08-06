import React, { useEffect, useState } from 'react';
import { getAllDonors } from '../../api/adminApi'; // Update the path as necessary

interface Donor {
    id: number;
    name: string;
    address: string;
    bloodTypes: string;
}

const Donors = () => {
    const [donors, setDonors] = useState<Donor[]>([]);

    useEffect(() => {
        const fetchDonors = async () => {
            try {
                const data: Donor[] = await getAllDonors();
                console.log(data);
                setDonors(data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchDonors();
    }, []);

    const handleAccept = (id: number) => {
        console.log(`Accepted donor with ID: ${id}`);
        // Add your logic here to handle accepting the donor
    };

    const handleReject = (id: number) => {
        console.log(`Rejected donor with ID: ${id}`);
        // Add your logic here to handle rejecting the donor
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-6">All Donors</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                    <thead className="bg-gray-800 text-white">
                        <tr>
                            <th className="px-6 py-3 text-left">Name</th>
                            <th className="px-6 py-3 text-left">Address</th>
                            <th className="px-6 py-3 text-left">Blood Type</th>
                            <th className="px-6 py-3 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {donors.map((donor) => (
                            <tr key={donor.id} className="bg-white border-b border-gray-200 hover:bg-gray-100">
                                <td className="px-6 py-4">{donor.name}</td>
                                <td className="px-6 py-4">{donor.address}</td>
                                <td className="px-6 py-4">{donor.bloodTypes}</td>
                                <td className="px-6 py-4 text-center">
                                    <button
                                        onClick={() => handleAccept(donor.id)}
                                        className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700 mr-2"
                                    >
                                        Accept
                                    </button>
                                    <button
                                        onClick={() => handleReject(donor.id)}
                                        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700"
                                    >
                                        Reject
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

export default Donors;
