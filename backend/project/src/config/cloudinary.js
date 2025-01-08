import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config();

cloudinary.config({ 
  cloud_name: 'dyiso4ohk', 
  api_key: '629196268468662', 
  api_secret: 'DWtBLCiYmHRthGaioqZ-4y8Lsew' // Click 'View API Keys' above to copy your API secret
});

export default cloudinary;