import React, { useState } from "react";

type VideoData = {
  id: number;
  title: string;
  link: string;
};

const UpdateVideo: React.FC = () => {
  const [videos, setVideos] = useState<VideoData[]>([]);
  const [newVideo, setNewVideo] = useState<{ title: string; link: string }>({
    title: "",
    link: "",
  });
  const [editVideo, setEditVideo] = useState<VideoData | null>(null);
  const [isTableView, setIsTableView] = useState<boolean>(true);

  // Handle adding a new video
  const handleAddVideo = () => {
    if (newVideo.title && newVideo.link) {
      const newVideoData = {
        id: Date.now(),
        ...newVideo,
      };
      setVideos((prevVideos) => [...prevVideos, newVideoData]);
      setNewVideo({ title: "", link: "" });
    } else {
      alert("Please enter both title and link.");
    }
  };

  // Handle deleting a video
  const handleRemoveVideo = (id: number) => {
    if (window.confirm("Are you sure you want to delete this video?")) {
      setVideos((prevVideos) => prevVideos.filter((video) => video.id !== id));
    }
  };

  // Handle editing video (show the form with current video data)
  const handleEditVideo = (video: VideoData) => {
    setEditVideo(video);
  };

  // Handle updating video after editing
  const handleUpdateVideo = () => {
    if (editVideo && editVideo.title && editVideo.link) {
      setVideos((prevVideos) =>
        prevVideos.map((video) =>
          video.id === editVideo.id ? { ...editVideo } : video
        )
      );
      setEditVideo(null); // Reset editing state
    } else {
      alert("Please fill out both fields before updating.");
    }
  };

  return (
    <div className="p-6 max-w-8xl mx-auto border border-gray-300 rounded-lg shadow-md bg-white">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-800 border-b-2 border-gray-300 pb-3">
        Update Video Tutorials
      </h1>

      {/* Add New Video */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Add New Video</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Video Title</label>
          <input
            type="text"
            value={newVideo.title}
            onChange={(e) => setNewVideo({ ...newVideo, title: e.target.value })}
            className="mt-2 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Video Link</label>
          <input
            type="text"
            value={newVideo.link}
            onChange={(e) => setNewVideo({ ...newVideo, link: e.target.value })}
            className="mt-2 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          onClick={handleAddVideo}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
        >
          Add Video
        </button>
      </div>

      {/* Edit Video Form */}
      {editVideo && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Edit Video</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Video Title</label>
            <input
              type="text"
              value={editVideo.title}
              onChange={(e) =>
                setEditVideo({ ...editVideo, title: e.target.value })
              }
              className="mt-2 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Video Link</label>
            <input
              type="text"
              value={editVideo.link}
              onChange={(e) =>
                setEditVideo({ ...editVideo, link: e.target.value })
              }
              className="mt-2 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            onClick={handleUpdateVideo}
            className="px-6 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700"
          >
            Update Video
          </button>
          <button
            onClick={() => setEditVideo(null)}
            className="px-6 py-2 bg-gray-600 text-white rounded-lg shadow-md hover:bg-gray-700 ml-2"
          >
            Cancel
          </button>
        </div>
      )}

      {/* Toggle View Buttons */}
      <div className="mb-6 flex justify-end">
        <button
          onClick={() => setIsTableView(true)}
          className={`px-4 py-2 rounded-lg ${isTableView ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"} mr-2`}
        >
          Table View
        </button>
        <button
          onClick={() => setIsTableView(false)}
          className={`px-4 py-2 rounded-lg ${!isTableView ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"}`}
        >
          List View
        </button>
      </div>

      {/* Video List Section */}
      <div>
        {isTableView ? (
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto">
              <thead>
                <tr className="bg-gray-200 text-gray-600">
                  <th className="px-6 py-2 border-b text-left">Title</th>
                  <th className="px-6 py-2 border-b text-left">Link</th>
                  <th className="px-6 py-2 border-b text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {videos.map((video) => (
                  <tr key={video.id} className="border-b hover:bg-gray-50">
                    <td className="px-6 py-2">{video.title}</td>
                    <td className="px-6 py-2">
                      <a href={video.link} target="_blank" className="text-blue-500" rel="noreferrer">
                        Watch Video
                      </a>
                    </td>
                    <td className="px-6 py-2">
                      <button
                        onClick={() => handleEditVideo(video)}
                        className="text-blue-600 hover:text-blue-800 mr-4"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleRemoveVideo(video.id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div>
            {videos.map((video) => (
              <div
                key={video.id}
                className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow mb-4"
              >
                <h3 className="text-lg font-semibold text-gray-700 mb-3">{video.title}</h3>
                <iframe
                  className="w-full h-56 rounded-lg mb-4"
                  src={video.link}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => handleRemoveVideo(video.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleEditVideo(video)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Edit
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UpdateVideo;
