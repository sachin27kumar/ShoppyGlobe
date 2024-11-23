import React from 'react'

function Loading() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-700 to-gray-600 text-white">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-opacity-50"></div>
        <p className="mt-6 text-lg font-semibold">Loading... Please wait</p>
      </div>
  )
}

export default Loading