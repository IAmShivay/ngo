import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

interface HeaderContent {
  contentType: 'image' | 'video';
  url: string;
  publicId: string;
  createdAt: string;
  updatedAt: string;
}

const UpdateHeader = () => {
  const [headerContent, setHeaderContent] = useState<HeaderContent | null>(null);
  const [loading, setLoading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState('');

  useEffect(() => {
    fetchHeaderContent();
  }, []);

  const fetchHeaderContent = async () => {
    try {
      const response = await axios.get<HeaderContent>('https://collify.sanakamedical.com/api/content/header');
      if (response.data) {
        setHeaderContent(response.data);
        setPreviewUrl(response.data.url);
      }
    } catch (error) {
      console.error('Error fetching header content:', error);
      toast.error('Failed to fetch header content');
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Preview
      const objectUrl = URL.createObjectURL(file);
      setPreviewUrl(objectUrl);
      
      // Clean up
      return () => URL.revokeObjectURL(objectUrl);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formElement = event.target as HTMLFormElement;
    const fileInput = formElement.content as HTMLInputElement;
    const file = fileInput.files?.[0];
    
    if (!file) {
      toast.error('Please select a file');
      return;
    }

    const formData = new FormData();
    formData.append('content', file);

    setLoading(true);
    try {
      const response = await axios.put<HeaderContent>('https://collify.sanakamedical.com/api/content/header', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setHeaderContent(response.data);
      setPreviewUrl(response.data.url);
      toast.success('Header content updated successfully');
    } catch (error) {
      console.error('Error updating header:', error);
      toast.error('Failed to update header content');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Update Header Content</h2>
      
      {/* Current Header Preview */}
      {previewUrl && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Current Header Content</h3>
          {headerContent?.contentType === 'video' ? (
            <video 
              src={previewUrl} 
              controls 
              className="w-full max-h-[300px] object-contain border rounded"
            />
          ) : (
            <img 
              src={previewUrl} 
              alt="Header preview" 
              className="w-full max-h-[300px] object-contain border rounded"
            />
          )}
        </div>
      )}

      {/* Upload Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Upload New Header Content (Image/Video)
          </label>
          <input
            type="file"
            name="content"
            accept="image/*,video/*"
            onChange={handleFileChange}
            className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
          />
          <p className="mt-1 text-sm text-gray-500">
            Supported formats: Images (JPG, PNG, GIF) and Videos (MP4, WebM)
          </p>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 px-4 rounded-md text-white font-medium ${
            loading
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {loading ? 'Updating...' : 'Update Header'}
        </button>
      </form>
    </div>
  );
};

export default UpdateHeader;