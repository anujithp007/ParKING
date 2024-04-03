import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const AddSpot = () => {
    const { id } = useParams();
    const [data, setData] = useState('');
    const [data1, setData1] = useState('');
    const [maxSpotNo, setMaxSpotNo] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/parking/getspaceid/${id}`);
                setData(response.data);
                setMaxSpotNo(response.data.totalspace); // Assuming your data structure has a property named 'totalSpace'
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [id]);
const handleChange=(e)=>{
    setData1({...data1,[e.target.name]:e.target.value})
    console.log(data1,'uu');
}

    const handleSubmit = async (e) => {
        e.preventDefault();
        setData1(data1)
        console.log(data1);

        try{
            let response= await axios.post('http://localhost:5000/parking/addspot',data1)
            console.log(response.data,'juu');
            toast.success('added spot successfully')

        }
        catch(e){
            console.log(e);
        }
    };

    return (
        <div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"

            />
            <ToastContainer />
            <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
                <div className="mb-5">
                    <label htmlFor="number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Slot number</label>
                    <input onChange={handleChange} type="number" id="number" name="spotno" max={maxSpotNo} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Slot number" />
                </div>
                <div className="mb-5">
                    <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Slot name</label>
                    <input onChange={handleChange} type="text" id="text" name="spotname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Slot name" />
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
        </div>
    );
};

export default AddSpot;
