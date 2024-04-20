import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AddSpace = () => {
  const id=localStorage.getItem('id')
  const token=localStorage.getItem('token')
  const[data,setData]=useState([''])
  const [formData, setFormData] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/parking/getspace');
        console.log(response.data);
        setData(response.data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData,'jiiii');  
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      console.log(formData,'--------------------------');
      const response = await axios.post(`http://localhost:5000/parking/addspace/${id}`, formData);
      console.log('Space added successfully:', response.data);
      // Reset form data after successful submission
      // setFormData({
      //   vehicletype: '',  
      //   totalspace: '',
      //   diffrentlyabled: ''
      // });
    } catch (error) {
      setError('Error adding space: ' + error.message);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
          <div className="max-w-md mx-auto">
            <div className="flex items-center space-x-5">
              <div className="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">i</div>
              <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                <h2 className="leading-relaxed">Create your spot</h2>
                <p className="text-sm text-gray-500 font-normal leading-relaxed">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="flex flex-col">
                  <label className="leading-loose">Vehicle type</label>
                  <div className="flex items-center mb-4">
                    <input onChange={handleChange} type="radio" value="car" name="vehicleType" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300   dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="default-radio-1" className="ms-2 text-sm text-gray-900 dark:text-gray-300">Car</label>
                  </div>
                  <div className="flex items-center">
                    <input onChange={handleChange} type="radio" value="bike" name="vehicleType" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300   dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="default-radio-2" className="ms-2 text-sm text-gray-900 dark:text-gray-300">Bike</label>
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="leading-loose">Total Spaces</label>
                  <input onChange={handleChange} type="number" name='totalSpace' className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="" />
                </div>
               
              </div>
              <div className="pt-4 flex items-center space-x-4">
                <button disabled={loading} className="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none">
                  {loading ? 'Creating...' : 'Create'}
                </button>
              </div>
            </form>
            {error && <div className="text-red-500 mt-4">{error}</div>}
          </div>
        </div>
      </div>
      <div className='flex justify-center gap-3 mt-20'>
  {data.map((item) => (
    item.userId === id ? (
      <div key={item._id} className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h1>Vehicle: {item.vehicleType}</h1>
        <h1>Total space: {item.totalSpace}</h1>
        <Link to={`/pp/addspot/${item._id}`}>
          <button type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            Name spot
          </button>
        </Link>
      </div>
    ) : null
  ))}
</div>
    </div>
  );
};

export default AddSpace;
