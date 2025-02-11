import React, { useState } from "react";

type MediaType = "image" | "video";

type MediaData = {
    id: number;
    url: string;
    file: File;
    name: string;
    description: string;
    type: MediaType;
};

const UpdateMedia: React.FC = () => {
    const [mediaItems, setMediaItems] = useState<MediaData[]>([]);
    const [viewMode, setViewMode] = useState<"grid" | "table">("grid");
    const [dragActive, setDragActive] = useState(false);
    const [selectedType, setSelectedType] = useState<MediaType>("image");

    const handleMediaUpload = (files: FileList | File[]) => {
        const fileArray = Array.from(files);
        const validFiles = fileArray.filter(file => {
            if (selectedType === "image") {
                return file.type.startsWith("image/");
            } else {
                return file.type.startsWith("video/");
            }
        });

        if (validFiles.length !== fileArray.length) {
            alert(`Some files were skipped because they weren't ${selectedType}s`);
        }

        const newMedia = validFiles.map((file) => ({
            id: Date.now() + Math.random(),
            url: URL.createObjectURL(file),
            file,
            name: file.name,
            description: "",
            type: selectedType,
        }));
        setMediaItems((prevMedia) => [...prevMedia, ...newMedia]);
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
            handleMediaUpload(e.dataTransfer.files);
        }
    };

    const handleRemoveMedia = (id: number) => {
        if (confirm("Are you sure you want to delete this item?")) {
            setMediaItems((prevMedia) => prevMedia.filter((item) => item.id !== id));
        }
    };

    const handleEditMedia = (id: number, name: string, description: string) => {
        setMediaItems((prevMedia) =>
            prevMedia.map((item) =>
                item.id === id ? { ...item, name, description } : item
            )
        );
    };

    const handleReset = () => {
        if (confirm("Are you sure you want to clear all items?")) {
            setMediaItems([]);
        }
    };

    const handleSubmit = async () => {
        const formData = new FormData();
        mediaItems.forEach((item) => {
            formData.append("files", item.file);
            formData.append(
                "metadata",
                JSON.stringify({
                    name: item.name,
                    description: item.description,
                    type: item.type
                })
            );
        });

        try {
            const response = await fetch("https://your-api-endpoint.com/upload", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                alert("Files uploaded successfully!");
                setMediaItems([]);
            } else {
                alert("Failed to upload files.");
            }
        } catch (error) {
            console.error("Upload error:", error);
            alert("An error occurred while uploading files.");
        }
    };

    const renderMediaPreview = (item: MediaData) => {
        if (item.type === "video") {
            return (
                <video
                    src={item.url}
                    className="w-full h-full object-cover"
                    controls
                />
            );
        }
        return (
            <img
                src={item.url}
                alt={item.name}
                className="w-full h-full object-cover"
            />
        );
    };

    return (
        <div className="max-w-8xl mx-auto p-6 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-xl">
            <div className="border-b border-gray-200 pb-4 mb-6">
                <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
                    <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                    </svg>
                    Media Upload Manager
                </h1>
            </div>

            <div className="mb-6">
                <div className="flex gap-4 mb-4">
                    <button
                        onClick={() => setSelectedType("image")}
                        className={`px-4 py-2 rounded-lg ${selectedType === "image"
                            ? "bg-blue-600 text-white"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                            }`}
                    >
                        Images
                    </button>
                    <button
                        onClick={() => setSelectedType("video")}
                        className={`px-4 py-2 rounded-lg ${selectedType === "video"
                            ? "bg-blue-600 text-white"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                            }`}
                    >
                        Videos
                    </button>
                </div>

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
                        accept={selectedType === "image" ? "image/*" : "video/*"}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        onChange={(e) => e.target.files && handleMediaUpload(e.target.files)}
                    />
                    <div className="space-y-2">
                        <svg className="w-12 h-12 mx-auto text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <p className="text-gray-600">
                            Drag and drop your {selectedType}s here, or click to select files
                        </p>
                        <p className="text-sm text-gray-500">
                            {selectedType === "image"
                                ? "Supports: JPG, PNG, GIF"
                                : "Supports: MP4, WebM, MOV"}
                        </p>
                    </div>
                </div>
            </div>

            {mediaItems.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {mediaItems.map((item) => (
                        <div key={item.id} className="group relative bg-white rounded-xl shadow-md overflow-hidden">
                            <div className="aspect-video relative">
                                {renderMediaPreview(item)}
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                                    <button
                                        onClick={() => {
                                            const name = prompt("Enter new name:", item.name) || item.name;
                                            const description = prompt("Enter new description:", item.description) || item.description;
                                            handleEditMedia(item.id, name, description);
                                        }}
                                        className="p-2 bg-white rounded-full text-gray-700 hover:text-blue-600 transition-colors"
                                    >
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                        </svg>
                                    </button>
                                    <button
                                        onClick={() => handleRemoveMedia(item.id)}
                                        className="p-2 bg-white rounded-full text-gray-700 hover:text-red-600 transition-colors"
                                    >
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="p-4">
                                <h3 className="font-semibold text-gray-800 truncate">{item.name}</h3>
                                <p className="text-sm text-gray-500 mt-1 truncate">
                                    {item.description || "No description"}
                                </p>
                                <p className="text-xs text-blue-600 mt-1">
                                    Type: {item.type}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-12 bg-gray-50 rounded-lg">
                    <svg className="w-12 h-12 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="mt-2 text-gray-500">No media uploaded yet</p>
                </div>
            )}

            {mediaItems.length > 0 && (
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
                        Upload Files
                    </button>
                </div>
            )}
        </div>
    );
};

export default UpdateMedia;