import React from "react";

function ReviewCard({ name, review, rating, videoUrl }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center">
        <div className="ml-4">
          <h3 className="text-xl font-bold">{name}</h3>
          <div className="mt-2 text-yellow-500">
            {Array(rating)
              .fill(0)
              .map((_, i) => (
                <span key={i}>⭐</span>
              ))}
          </div>
        </div>
      </div>
      <p className="mt-4 text-gray-600">{review}</p>
      {videoUrl && (
        <div className="mt-4">
          <video className="w-full rounded-lg" controls>
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
}

export default ReviewCard;
