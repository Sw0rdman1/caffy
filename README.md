# ☕ Caffy – Capture Your Daily Coffee Moments

**Caffy** is a minimalist mobile app for coffee lovers to document their daily brews. Users take photos directly in the app, creating a visual coffee journal that celebrates routine, ritual, and community. Built with **React Native (Expo)** and **Supabase**, Caffy focuses on authenticity, privacy, and habit-building — no likes, no comments, just coffee.

---

## ✨ Features

- 📸 **In-App Camera Only** – Capture your coffee in the moment. No uploads, just authenticity.
- 🗓️ **Calendar View** – Browse your posts by date, with streak tracking and daily photo thumbnails.
- 👥 **Mutual Friends Social Model** – Add friends via requests. No followers or global feed.
- 🔐 **Privacy Controls** – Set your account to public, private, or friends-only.
- 🔁 **Multiple Posts per Day** – Take as many coffee pics as you want each day.
- 🔥 **Streak System** – Keep your coffee streak alive by posting every day.

---

## 🛠️ Tech Stack

- **React Native (Expo)** – Cross-platform mobile development
- **Supabase** – Backend as a service (auth, database, storage)
- **Clarifai (optional)** – Image recognition for detecting coffee-related content
- **ShadCN / MUI** – Clean, responsive UI components

---

## 📦 Installation

```bash
git clone https://github.com/yourusername/caffy.git
cd caffy
npm install
npx expo start
```

Ensure you’ve set up your **Supabase** project and added the correct environment variables (`.env` or using Expo Secrets).

---

## 📁 Folder Structure

```
/app
  /screens
  /components
  /context
  /hooks
  /services
/assets
```

---

## 🧪 Development Notes

- The app does **not** support uploading images — only live photos taken in-app.
- Supabase handles:
  - Auth (email/password)
  - Image storage
  - Database for posts, users, friendships
- Image moderation (optional) via Clarifai to ensure content stays on theme.

---

## 📸 Example Screens

Coming soon...

---

## 📄 License

MIT
