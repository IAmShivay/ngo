import React, { useState } from "react";

type ImageData = {
    id: number;
    url: string;
    file: File;
    name: string;
    description: string;
};

const UpdateGallery: React.FC = () => {
    const [images, setImages] = useState<ImageData[]>([]);
    const [viewMode, setViewMode] = useState<"grid" | "table">("grid");
    const [isEditing, setIsEditing] = useState<number | null>(null);

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files ? Array.from(event.target.files) : [];
        const newImages = files.map((file) => ({
            id: Date.now() + Math.random(),
            url: URL.createObjectURL(file),
            file,
            name: file.name,
            description: "",
        }));
        setImages((prevImages) => [...prevImages, ...newImages]);
    };

    const handleRemoveImage = (id: number) => {
        if (confirm("Are you sure you want to delete this image?")) {
            setImages((prevImages) => prevImages.filter((image) => image.id !== id));
        }
    };

    const handleEditImage = (id: number, name: string, description: string) => {
        setImages((prevImages) =>
            prevImages.map((image) =>
                image.id === id ? { ...image, name, description } : image
            )
        );
        setIsEditing(null);
    };

    const handleReset = () => {
        if (confirm("Are you sure you want to clear all images?")) {
            setImages([]);
        }
    };

    const handleSubmit = async () => {
        const formData = new FormData();
        images.forEach((image) => {
            formData.append("images", image.file);
            formData.append(
                "metadata",
                JSON.stringify({ name: image.name, description: image.description })
            );
        });

        try {
            const response = await fetch("/upload", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                alert("Images uploaded successfully!");
                setImages([]);
            } else {
                alert("Failed to upload images.");
            }
        } catch (error) {
            console.error("Upload error:", error);
            alert("An error occurred while uploading images.");
        }
    };

    return (
        <div className="p-6 max-w-8xl mx-auto border border-gray-300 rounded-lg shadow-lg bg-white">
            <h1 className="text-3xl font-bold text-center mb-6 text-gray-800 border-b-2 border-gray-300 pb-3">
                Gallery Management
            </h1>

            {/* File Upload Section */}
            <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">Upload Images</h2>
                <div className="flex justify-between items-center">
                    <input
                        type="file"
                        multiple
                        accept="image/*"
                        className="block w-full max-w-xs text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border file:border-gray-300 file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100"
                        onChange={handleImageUpload}
                    />
                    <div className="space-x-4">
                        <button
                            className={`px-4 py-2 rounded-lg shadow-md text-white ${viewMode === "grid"
                                    ? "bg-blue-600 hover:bg-blue-700"
                                    : "bg-gray-300 hover:bg-gray-400"
                                }`}
                            onClick={() => setViewMode("grid")}
                        >
                            Grid View
                        </button>
                        <button
                            className={`px-4 py-2 rounded-lg shadow-md text-white ${viewMode === "table"
                                    ? "bg-blue-600 hover:bg-blue-700"
                                    : "bg-gray-300 hover:bg-gray-400"
                                }`}
                            onClick={() => setViewMode("table")}
                        >
                            Table View
                        </button>
                    </div>
                </div>
            </div>

            {/* Gallery Section */}
            <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">
                    {viewMode === "grid" ? "Image Grid" : "Image List"}
                </h2>
                {viewMode === "grid" ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {images.map((image) => (
                            <div key={image.id} className="relative border rounded-lg p-4 shadow-lg">
                                <img
                                    src={image.url}
                                    alt="Preview"
                                    className="w-full h-40 object-cover rounded-md"
                                />
                                <div className="mt-4">
                                    <p className="font-semibold text-gray-800 truncate">{image.name}</p>
                                    <p className="text-sm text-gray-600">
                                        {image.description || "No description"}
                                    </p>
                                    <div className="mt-2 flex justify-between">
                                        <button
                                            onClick={() => {
                                                const name = prompt("Enter new name:", image.name) || image.name;
                                                const description = prompt("Enter new description:", image.description) || image.description;
                                                handleEditImage(image.id, name, description);
                                            }}
                                            className="text-blue-600 hover:text-blue-800"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleRemoveImage(image.id)}
                                            className="text-red-600 hover:text-red-800"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <table className="w-full text-left border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-100 text-gray-700">
                                <th className="px-4 py-2 border border-gray-300">Image</th>
                                <th className="px-4 py-2 border border-gray-300">Name</th>
                                <th className="px-4 py-2 border border-gray-300">Description</th>
                                <th className="px-4 py-2 border border-gray-300">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {images.map((image) => (
                                <tr key={image.id} className="hover:bg-gray-50">
                                    <td className="px-4 py-2 border border-gray-300">
                                        <img
                                            src={image.url}
                                            alt="Preview"
                                            className="w-16 h-16 object-cover rounded-md"
                                        />
                                    </td>
                                    <td className="px-4 py-2 border border-gray-300">{image.name}</td>
                                    <td className="px-4 py-2 border border-gray-300">
                                        {image.description || "No description"}
                                    </td>
                                    <td className="px-4 py-2 border border-gray-300">
                                        <button
                                            onClick={() => setIsEditing(image.id)}
                                            className="text-blue-600 hover:text-blue-800 mr-2"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleRemoveImage(image.id)}
                                            className="text-red-600 hover:text-red-800"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>

            {/* Action Buttons */}
            <div className="border-t-2 border-gray-300 pt-4 mt-6 flex justify-end space-x-4">
                {images.length > 0 && (
                    <>
                        <button
                            onClick={handleSubmit}
                            className="px-6 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700"
                        >
                            Upload Images
                        </button>
                        <button
                            onClick={handleReset}
                            className="px-6 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700"
                        >
                            Clear All
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default UpdateGallery;
