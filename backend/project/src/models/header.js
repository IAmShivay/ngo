import mongoose from 'mongoose';

const headerSchema = new mongoose.Schema({
    contentType: {
        type: String,
        enum: ['image', 'video'],
        required: true
    },
    url: {
        type: String,
        required: true
    },
    publicId: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

// Pre-save middleware to update the updatedAt timestamp
headerSchema.pre('save', function (next) {
    this.updatedAt = new Date();
    next();
});

const Header = mongoose.model('Header', headerSchema);
export default Header;
