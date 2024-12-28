import React from "react";

const Error = ({ error }: { error: {message: React.ReactNode} }) => {
  if (error instanceof Error) {
    return (
      <div className="flex justify-center items-center">
        <p className="text-red-500">Error: {error.message}</p>
      </div>
    );
  }
  
  return (
    <div className="flex justify-center items-center">
      <p className="text-red-500">Error: Something went wrong!</p>
    </div>
  );
};

export default Error;
