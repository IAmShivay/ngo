import React, { useState } from "react";

type ImageData = {
    id: number;
    url: string;
    file: File;
};

const UpdateGallery: React.FC = () => {
    const [images, setImages] = useState<ImageData[]>([]);

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files ? Array.from(event.target.files) : [];
        const newImages = files.map((file) => ({
            id: Date.now() + Math.random(),
            url: URL.createObjectURL(file),
            file,
        }));
        setImages((prevImages) => [...prevImages, ...newImages]);
    };

    const handleRemoveImage = (id: number) => {
        setImages((prevImages) => prevImages.filter((image) => image.id !== id));
    };

    const handleSubmit = async () => {
        const formData = new FormData();
        images.forEach((image) => {
            formData.append("images", image.file);
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
        <div className="gallery-management">
            <h1>Gallery Management</h1>
            <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageUpload}
            />
            <div className="preview-container">
                {images.map((image) => (
                    <div key={image.id} className="image-preview">
                        <img src={image.url} alt="Preview" width="150" height="150" />
                        <button onClick={() => handleRemoveImage(image.id)}>Remove</button>
                    </div>
                ))}
            </div>
            {images.length > 0 && (
                <button onClick={handleSubmit} className="upload-button">
                    Upload Images
                </button>
            )}
        </div>
    );
};

export default UpdateGallery;
