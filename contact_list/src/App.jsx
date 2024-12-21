import React, { useState } from 'react';

const App = () => {
  const [username, setUsername] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [isFavorite, setIsFavorite] = useState(false);
  const [allusers, setallusers] = useState([]);

  const submithandler = (e) => {
    e.preventDefault();
    
    if (!username.trim() || !company.trim() || !phone.trim()) {
      alert('Please fill in all fields before adding a contact.');
      return;
    }
    
    const newUser = { username, company, phone, isFavorite };
    const newArr = [...allusers, newUser];
    setallusers(newArr);
    setUsername('');
    setCompany('');
    setPhone('');
    setIsFavorite(false);
  };

  const deleteContact = (index) => {
    const updatedUsers = allusers.filter((_, idx) => idx !== index);
    setallusers(updatedUsers);
  };

  return (
    <div className="flex h-screen w-screen bg-zinc-300">
      <form
        onSubmit={submithandler}
        className="w-1/2 p-8 bg-zinc-300 flex flex-col space-y-4">
        <h1 className="text-xl font-semibold">Add Contact</h1>
        
        <div>
          <h2>Name</h2>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mb-4 px-5 py-3 border-2 border-black rounded"
            type="text"
            placeholder="Enter name"
          />
        </div>

        <div>
          <h2>Company</h2>
          <input
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="mb-4 px-5 py-3 border-2 border-black rounded"
            type="text"
            placeholder="Enter company"
          />
        </div>

        <div>
          <h2>Phone</h2>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="mb-4 px-5 py-3 border-2 border-black rounded"
            type="number"
            placeholder="Enter phone number"
          />
        </div>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={isFavorite}
            onChange={(e) => setIsFavorite(e.target.checked)}
          />
          <span className='font-semibold'>Mark as Favorite</span>
        </label>


        <button className="px-6 py-3 bg-blue-600 text-white rounded-md">
          Add Contact
        </button>
      </form>

      <div className="h-screen w-1/2 p-8">
        <h1 className="text-3xl font-semibold mb-5">Contact list</h1>
        <div className="bg-white p-5 rounded-md">
          {allusers.map((user, index) => (
            <div
              key={index}
              className='bg-gray-100 p-4 mb-4 rounded shadow-md '>
              <p>
                <strong>Name:</strong> {user.username}
              </p>
              <p>
                <strong>Company:</strong> {user.company}
              </p>
              <p>
                <strong>Phone:</strong> {user.phone}
              </p>
              {user.isFavorite && (
                <p className="text-yellow-500 font-bold">Favorite Contact</p>
              )}
              <button
                onClick={() => deleteContact(index)}
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded">
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
