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
    const [dragActive, setDragActive] = useState(false);

    const handleImageUpload = (files: FileList | File[]) => {
        const fileArray = Array.from(files);
        const newImages = fileArray.map((file) => ({
            id: Date.now() + Math.random(),
            url: URL.createObjectURL(file),
            file,
            name: file.name,
            description: "",
        }));
        setImages((prevImages) => [...prevImages, ...newImages]);
    };

    const handleDrag = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);

        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleImageUpload(e.dataTransfer.files);
        }
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
            const response = await fetch("https://collify.sanakamedical.com/api/content/bulk-upload", {
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
        <div className="max-w-8xl mx-auto p-6 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-xl">
            <div className="border-b border-gray-200 pb-4 mb-6">
                <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
                    <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Gallery Management
                </h1>
            </div>

            <div className="mb-8">
                <div
                    className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-colors ${dragActive
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-300 hover:border-blue-400"
                        }`}
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                >
                    <input
                        type="file"
                        multiple
                        accept="image/*"
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        onChange={(e) => e.target.files && handleImageUpload(e.target.files)}
                    />
                    <div className="space-y-2">
                        <svg className="w-12 h-12 mx-auto text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <p className="text-gray-600">Drag and drop your images here, or click to select files</p>
                        <p className="text-sm text-gray-500">Supports: JPG, PNG, GIF</p>
                    </div>
                </div>

                <div className="mt-4 flex justify-end gap-2">
                    <button
                        className={`p-2 rounded-lg transition-colors ${viewMode === "grid"
                            ? "bg-blue-600 text-white"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                            }`}
                        onClick={() => setViewMode("grid")}
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                        </svg>
                    </button>
                    <button
                        className={`p-2 rounded-lg transition-colors ${viewMode === "table"
                            ? "bg-blue-600 text-white"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                            }`}
                        onClick={() => setViewMode("table")}
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>

            {images.length > 0 ? (
                viewMode === "grid" ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {images.map((image) => (
                            <div key={image.id} className="group relative bg-white rounded-xl shadow-md overflow-hidden">
                                <div className="aspect-video relative">
                                    <img
                                        src={image.url}
                                        alt={image.name}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                                        <button
                                            onClick={() => {
                                                const name = prompt("Enter new name:", image.name) || image.name;
                                                const description = prompt("Enter new description:", image.description) || image.description;
                                                handleEditImage(image.id, name, description);
                                            }}
                                            className="p-2 bg-white rounded-full text-gray-700 hover:text-blue-600 transition-colors"
                                        >
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                            </svg>
                                        </button>
                                        <button
                                            onClick={() => handleRemoveImage(image.id)}
                                            className="p-2 bg-white rounded-full text-gray-700 hover:text-red-600 transition-colors"
                                        >
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="font-semibold text-gray-800 truncate">{image.name}</h3>
                                    <p className="text-sm text-gray-500 mt-1 truncate">{image.description || "No description"}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse bg-white rounded-lg shadow-md">
                            <thead>
                                <tr className="bg-gray-50">
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {images.map((image) => (
                                    <tr key={image.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <img
                                                src={image.url}
                                                alt={image.name}
                                                className="w-16 h-16 object-cover rounded-lg"
                                            />
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">{image.name}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{image.description || "No description"}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex gap-2">
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
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )
            ) : (
                <div className="text-center py-12 bg-gray-50 rounded-lg">
                    <svg className="w-12 h-12 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="mt-2 text-gray-500">No images uploaded yet</p>
                </div>
            )}

            {images.length > 0 && (
                <div className="mt-6 flex justify-end gap-4">
                    <button
                        onClick={handleReset}
                        className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors flex items-center gap-2"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        Clear All
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors flex items-center gap-2"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                        </svg>
                        Upload Images
                    </button>
                </div>
            )}
        </div>
    );
};

export default UpdateGallery;