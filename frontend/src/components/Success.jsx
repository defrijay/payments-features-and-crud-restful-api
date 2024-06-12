import React from 'react';

const Success = () => {
  return (
    <div className="flex items-center justify-center h-screen text-center">
      <div className="flex flex-col space-y-4">
        <h1 className="font-bold text-2xl">Thank's for paying the order!</h1>
        <button className="btn btn-outline btn-accent">Successful</button>
        <p className="font-medium text-xl">We wait for the next order at We Shop!</p>
      </div>
    </div>
  );
}

export default Success;
