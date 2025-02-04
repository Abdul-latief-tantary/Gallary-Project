
import './App.css';
import React from 'react';
import Card from './components/Card';

function App() {
  const cardDetails = [
    { title: 'Nature-1', description: ' This is first nature pic', imageUrl: 'image1.jpeg' },
    { title: 'Nature-2', description: 'This is  second nature pic ', imageUrl: 'image2.jpeg' },
    { title: 'Nature-3', description: 'This is  third nature pic', imageUrl: 'image3.jpeg' },
    { title: 'Nature-4', description: 'This is  fourth nature pic ', imageUrl: 'image4.jpeg' },
    { title: 'Nature-5', description: 'This is  fifth nature pic ', imageUrl: 'image5.jpeg' },
    { title: 'Nature-6', description: 'This is sixth nature pic ', imageUrl: 'image6.jpeg' },
    { title: 'Nature-7', description: 'This is seventh nature pic ', imageUrl: 'image7.jpeg' },
    { title: 'Nature-8', description: 'This is eighth nature pic ', imageUrl: 'image8.jpeg' }
  ];

  return (
    <div className="App">
      <div className='container'>
        <h1> Nature -Gallery React</h1>
        <Card details={cardDetails} />
      </div>
    </div>
  );
}

export default App;
