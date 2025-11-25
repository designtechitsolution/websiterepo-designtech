# News Portal Application

A modern news portal built with React, Vite, and Node.js backend with MongoDB. This application allows users to read, upload, and manage news articles with a clean and responsive user interface.

## 🚀 Features

- 📰 View latest news articles
- 📤 Upload and manage news content
- 🔍 Search and filter news
- 🔄 Real-time updates
- 📱 Responsive design for all devices

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite, TailwindCSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JWT
- **Deployment**: Vercel, Netlify, or any static site hosting

## 📦 Prerequisites

- Node.js (v16 or later)
- npm (v8 or later) or yarn
- MongoDB Atlas account or local MongoDB instance

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/news-portal.git
cd news-portal
```

### 2. Install Dependencies
```bash
# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

### 3. Environment Setup

Create a `.env` file in the backend directory with the following variables:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
NODE_ENV=development
```

### 4. Run the Application

#### Development Mode

Start the backend server:
```bash
cd backend
npm run dev
```

In a new terminal, start the frontend development server:
```bash
cd frontend
npm run dev
```

The application will be available at `http://localhost:5173`

#### Production Build

1. Build the frontend:
```bash
cd frontend
npm run build
```

2. The production build will be in the `frontend/dist` directory

## 🌐 Deployment

### Domain and IP Configuration

#### Frontend Deployment
When deploying your frontend, you'll receive a deployment URL (e.g., `https://your-app.vercel.app`). For production, you can:

1. **Custom Domain Setup**
   - Purchase a domain from providers like Namecheap, Google Domains, or Cloudflare
   - In your Vercel/Netlify dashboard, go to project settings > Domains
   - Add your custom domain and follow the DNS verification steps
   - Update DNS records (A, CNAME) as instructed by your hosting provider

2. **IP Address** (if using a VPS or dedicated server)
   - Your server will have a public IP address (e.g., `123.456.78.90`)
   - Point your domain's A record to this IP address
   - Example DNS records:
     ```
     @    A     123.456.78.90
     www  CNAME yourdomain.com
     ```

#### Backend Deployment
For the backend, you'll need to configure:

1. **Environment Variables**
   ```env
   # In production
   FRONTEND_URL=https://yourdomain.com
   ALLOWED_ORIGINS=https://yourdomain.com,https://www.yourdomain.com
   ```

2. **CORS Configuration**
   Update your backend CORS settings to allow requests from your frontend domain:
   ```javascript
   app.use(cors({
     origin: process.env.ALLOWED_ORIGINS.split(','),
     credentials: true
   }));
   ```

3. **Production Endpoints**
   Update your frontend API calls to use the production backend URL:
   ```javascript
   // In your frontend config
   const API_URL = process.env.NODE_ENV === 'production' 
     ? 'https://api.yourdomain.com' 
     : 'http://localhost:5000';
   ```

### Deployment Guides

#### Vercel (Recommended for Frontend)
1. Push your code to a GitHub repository
2. Import the project in Vercel
3. Set the build command: `npm run build`
4. Set the output directory: `frontend/dist`
5. Add environment variables:
   - `VITE_API_URL`: Your backend API URL (e.g., `https://api.yourdomain.com`)
6. Configure custom domain in Vercel project settings
7. Deploy!

#### Backend Deployment (Example: Render.com)
1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Set build command: `npm install && npm run build`
4. Set start command: `node dist/index.js`
5. Add environment variables:
   - `PORT`: 10000 (or your preferred port)
   - `MONGODB_URI`: Your MongoDB connection string
   - `JWT_SECRET`: Your JWT secret key
   - `NODE_ENV`: production
   - `FRONTEND_URL`: Your frontend URL
6. Deploy and note the provided URL (e.g., `https://your-backend.onrender.com`)

### SSL/HTTPS Setup
- Vercel/Netlify provide automatic SSL certificates
- For custom domains, ensure SSL is enabled in your hosting provider's settings
- For backend services, most platforms (Render, Railway, etc.) provide automatic SSL
- For self-hosted backends, use Let's Encrypt for free SSL certificates

## 🔧 Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Backend server port | 5000 |
| `MONGODB_URI` | MongoDB connection string | - |
| `JWT_SECRET` | Secret for JWT token generation | - |
| `NODE_ENV` | Environment mode | development |

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Vite for the amazing build tooling
- React for the component-based architecture
- All the open-source libraries used in this project
