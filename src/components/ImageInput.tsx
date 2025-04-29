import { useState } from "react";

export const ImageUpload: React.FC = () => {
    const [imagePreview, setImagePreview] = useState<string | null>(null);
  
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreview(reader.result as string);
        };
        reader.readAsDataURL(file);
      }
    };
  
    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      const file = e.dataTransfer.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreview(reader.result as string);
        };
        reader.readAsDataURL(file);
      }
    };
  
    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
    };
  
    return (
      <div className="flex flex-col items-center gap-y-4">
        <div className="flex space-x-4 border">
        <div
          className="border-2 border-dashed border-gray-400 rounded-lg w-[81px] h-[81px] flex justify-center items-center relative"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          {imagePreview ? (
            <img
              src={imagePreview}
              alt="Preview"
              className="object-cover w-full h-full rounded-lg"
            />
          ) : (
            ''
          )}
          
        </div>
        <div className="text-gray-500 text-center text-sm ">
              <p>Drag image here</p>
              <p>or</p>
              <label
                htmlFor="file-upload"
                className="text-blue-500 cursor-pointer text-primary"
              >
                Browse image
              </label>
            </div>
        <input
            id="file-upload"
            type="file"
            className="absolute inset-0 opacity-0 cursor-pointer"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
        {imagePreview && (
          <button
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={() => setImagePreview(null)}
          >
            Remove Image
          </button>
        )}
      </div>
    );
  };
  