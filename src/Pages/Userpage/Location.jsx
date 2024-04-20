import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Location = () => {
    const [data, setData] = useState([]);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://localhost:5000/user/viewpp')
            setData(response.data);
        }
        fetchData();
    }, []);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div>
            <h2 className="text-5xl pt-6 text-center font-extrabold dark:text-white">Choose Your Place among 100 + Cities</h2>
            <div className='flex flex-wrap gap-5 items-center justify-center pt-9'>

                {data.map((item) => (
                    <div key={item.id} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <div className="flex flex-col items-center pb-10">
                            <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={`http://localhost:5000/${item.file}`} alt="Bonnie image" />
                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{item.username}</h5>
                            <span className="text-sm text-gray-500 dark:text-gray-400">{item.email}</span>
                            <div className="flex mt-4 md:mt-6">
                                <button onClick={openModal} className="select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                                    Book now
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Conditionally render the modal */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
                    <div className="relative w-auto max-w-3xl mx-auto my-6">
                        {/*content*/}
                        <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                            {/*header*/}
                            <div className="flex items-start bg-gradient-to-r from-green-400 to-lime-500 justify-between  ">

                                <button onClick={closeModal} className="p-1 ml-auto bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none">
                                    <span className="text-2xl text-white block">×</span>
                                </button>
                                {/*body*/}
                            </div>
                            <div className="relative bg-gradient-to-r from-green-400 to-lime-500 p-6 flex-auto">
                                <p className="my-4 text-blueGray-500 text-center font-serif text-[2rem] leading-relaxed">
                                    Choose Your Vehicle
                                </p>
                            </div>
                            {/*footer*/}
                            <div className="flex items-center justify-center gap-10 p-6 border-t border-solid rounded-b border-blueGray-200">

                                <button onClick={closeModal} className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1" type="button">
                                    Car
                                </button>
                                <button onClick={closeModal} className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1" type="button">
                                    Bike
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Location;
