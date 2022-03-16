import React from 'react';

const Notifide = () => {
    const date = new Date();
    const hour = date.getHours();
  return (
   <div>
       <h2 className='header'>WeleCome to Notifide</h2>
   <h2 className='time'> {hour >= 12 ? (hour >= 16 ? 'Good Evening' : 'Good AfterNoon') : 'Good Morning'}</h2>
   </div>

  )
}

export default Notifide;