# Firebase Setup for View Tracking

This application uses Firebase Realtime Database to track article views globally across all users in real-time.

## Setup Instructions

### 1. Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" or select existing project
3. Follow the setup wizard

### 2. Enable Realtime Database

1. In Firebase Console, go to "Build" → "Realtime Database"
2. Click "Create Database"
3. Choose location: **asia-southeast1** (Singapore) for better performance in Southeast Asia
4. Start in **test mode** for development (remember to secure later)

### 3. Get Firebase Configuration

1. Go to Project Settings (gear icon)
2. Scroll down to "Your apps"
3. Click on Web app icon (</>) or "Add app"
4. Register your app
5. Copy the `firebaseConfig` object

### 4. Update Firebase Configuration

Edit `src/config/firebase.js` and replace the configuration with your own:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT_ID-default-rtdb.YOUR_REGION.firebasedatabase.app",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

### 5. Database Structure

The app uses this structure:

```
articleViews/
  ├── general-knowledge-1/
  │   ├── handbookId: "general-knowledge"
  │   ├── chapterId: 1
  │   ├── title: "Abbreviation"
  │   ├── views: 42
  │   └── lastViewed: "2025-12-23T10:30:00.000Z"
  ├── general-knowledge-2/
  │   └── ...
  └── wk-rokan-1/
      └── ...
```

### 6. Security Rules (Production)

Before deploying to production, update your Firebase Realtime Database rules:

```json
{
  "rules": {
    "articleViews": {
      ".read": true,
      "$articleId": {
        ".write": true,
        ".validate": "newData.hasChildren(['handbookId', 'chapterId', 'title', 'views', 'lastViewed'])"
      }
    }
  }
}
```

This allows:
- Everyone can read view counts
- Everyone can write (increment) view counts
- Validates data structure

### 7. Environment Variables (Optional)

For better security, you can use environment variables:

Create `.env` file:

```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_DATABASE_URL=your_database_url
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

Update `src/config/firebase.js`:

```javascript
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};
```

### 8. Vercel Deployment

Add environment variables in Vercel:

1. Go to your Vercel project
2. Settings → Environment Variables
3. Add all `VITE_FIREBASE_*` variables
4. Redeploy

## Features

- **Global View Counting**: All users contribute to the same counter
- **Real-time Updates**: View counts update live without refresh
- **Top Articles**: Automatically shows most viewed articles
- **Persistent**: Data stored in Firebase, not lost on browser clear

## Testing

1. Open the app in multiple browsers/devices
2. Click on different chapters
3. Check "Popular Handbook Articles" on home page
4. View counts should increment globally and update in real-time

## Monitoring

View your data in Firebase Console:
1. Go to Realtime Database
2. See `articleViews` node
3. Monitor view counts in real-time
