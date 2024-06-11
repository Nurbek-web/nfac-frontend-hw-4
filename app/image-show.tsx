import React from "react";

interface ImageShowProps {
  src: string;
  delete: () => void;
}

const ImageShow: React.FC<ImageShowProps> = ({ src, delete: handleDelete }) => {
  return (
    <div className="relative group aspect-square bg-gray-100 rounded-lg overflow-hidden">
      <img src={src} alt="Product" className="object-cover w-full h-full" />
      <button
        onClick={handleDelete}
        className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity opacity-0 group-hover:opacity-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6 text-white"
        >
          <polyline points="3 6 5 6 21 6"></polyline>
          <path d="M6 6V4a1 1 0 011-1h10a1 1 0 011 1v2"></path>
          <line x1="10" y1="11" x2="10" y2="17"></line>
          <line x1="14" y1="11" x2="14" y2="17"></line>
        </svg>
      </button>
    </div>
  );
};

export default ImageShow;
