# 🧱 Tiles Gallery

A modern and responsive **Tile Gallery Website** built with **Next.js** to showcase a collection of aesthetic tiles. Users can browse, search, and explore detailed tile information with a clean and visually appealing interface.

This project focuses on **UI/UX design, authentication, dynamic routing, and data management**, following best practices for modern web development.

---

## 🌐 Live URL

👉 https://b13-a08-tiles-gallery.vercel.app/   

---

## 🎯 Project Purpose

The goal of this project is to create a visually engaging platform where users can:

- Explore different types of tiles  
- View detailed tile information  
- Search tiles easily  
- Experience smooth authentication and navigation  

---

## 🚀 Technologies Used

- Next.js (App Router)  
- React.js  
- Tailwind CSS  
- HeroUI  
- BetterAuth (with MongoDB Adapter)  
- JSON data  
- Animate.css   

---

## ✨ Key Features

### 🧱 Tile Gallery System
- Display tiles dynamically from JSON   
- Featured tiles on homepage  
- Detailed tile view with full information  

### 🔍 Search & Navigation
- Search tiles by title  
- Smooth navigation using Next.js routing  
- Dedicated pages for all tiles and individual tile details  

### 🔐 Authentication System
- Email & Password login/register  
- Google social login  
- Protected routes for private pages  
- Error handling with toast notifications  

---

## 🧩 Main Sections

### 🧭 Navbar
- Logo (left side → Home)  
- Navigation links (Home, All Tiles, My Profile)  
- Login / Logout functionality  
- Profile access when logged in  

### 🏠 Home Page
- Banner with CTA ("Discover Your Perfect Aesthetic")  
- Marquee section (scrolling updates)  
- Featured tiles (Top 4 from data)  

### 🖼️ All Tiles Page
- Search bar for filtering tiles  
- Grid layout of tile cards  
- "Details" button for each tile  

### 🔍 Tile Details Page
- Large tile preview  
- Title, description, tags, and full info  

### 🔐 Authentication Pages
- Login page (Email, Password, Google login)  
- Register page (Name, Email, Photo URL, Password)  
- Error handling with toast messages  

### 🦶 Footer
- Social media links  
- Contact section  

---

## 🛠️ Additional Functionalities

- 🔄 Loading spinner during data fetching  
- ❌ Custom 404 Not Found page  
- 🔐 Route protection (private routes)  
- 🔁 No reload errors on deployed routes  
- 🔑 Environment variables for secure configuration  

---

## 🚀 Challenge Features

### 👤 My Profile Page
- View logged-in user information  
- Update name and profile image  

### ✏️ Update Information
- Separate update route  
- Form with Name & Image URL  
- Update user info using BetterAuth  

### 🎞️ Animation / Library Integration
- Animate.css   

---

## 🚦 Route Permissions

| Route        | Access   |
|--------------|----------|
| /            | Public   |
| /tiles       | Public   |
| /tile/[id]   | Private  |
| /login       | Public   |
| /register    | Public   |
| /my-profile  | Private  |

---

## 📦 JSON Data Structure

```json
  {
    "id": "tile_001",
    "title": "Ceramic Blue Tile",
    "description": "Premium ceramic tile with a smooth blue glaze finish.",
    "style": "A calm, modern aesthetic inspired by ocean tones and minimalist interiors.",
    "image": "https://plus.unsplash.com/premium_photo-1675747693497-0a1d0db0740c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGlsZXxlbnwwfHwwfHx8MA%3D%3D",
    "category": "ceramic",
    "price": 45.99,
    "currency": "USD",
    "dimensions": "60x60 cm",
    "material": "Ceramic",
    "creator": "TileVerse Studio",
    "tags": ["Minimalist", "Blue", "Modern", "Glossy"],
    "inStock": true
  }


## 📬 Submission

- 🌐 **Live Link:** https://b13-a08-tiles-gallery.vercel.app/  
- 💻 **GitHub Repository:** https://github.com/mdnahidooo/B13-A08-Tiles-Gallery 