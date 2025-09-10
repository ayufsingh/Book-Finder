# 📚 Book Finder

A simple React web app to search books by title using the **Open Library API**.  
This project was built as a take-home challenge to demonstrate **React fundamentals**, **API integration**, and **responsive UI design**.

---

## ✨ Features

- 🔍 Search books by title (Open Library API)  
- ⌨️ Trigger search by pressing **Enter** or clicking the search button  
- 📱 Responsive grid layout (mobile-friendly)  
- 🎨 Hover effects on book cards  
- ⏳ Loading spinner while fetching results  
- 📭 Empty-state message when no results are found  
- 🖼️ Placeholder cover for books without images  

---

## 🚀 Getting Started

Follow these steps to run the project locally:

### 1. Clone the repository
```bash
git clone https://github.com/your-username/book-finder.git
```

### 2. Navigate to the project folder
```bash
cd book-finder
```

### 3. Install dependencies
```bash
npm install
```

### 4. Start the development server
```bash
npm start
```

Open your browser at **http://localhost:3000** 🚀

---

## 🛠️ Tech Stack

- ⚛️ **React** (Hooks, functional components)  
- 🎨 **CSS** (Responsive grid + hover styling)  
- 🌐 **Open Library API**  

---

## 📂 Project Structure

```
src/
├── components/
│   ├── SearchBar.js   # Input & search form
│   └── BookList.js    # Grid of book cards
├── App.js             # Main app logic
└── App.css            # Styling
```

---

## 🌐 API Reference

The app uses the [Open Library API](https://openlibrary.org/developers/api).

**Search by book title:**
```http
GET https://openlibrary.org/search.json?title={book_title}
```

Example:
```http
https://openlibrary.org/search.json?title=harry+potter
```

---

## 📸 Demo

```http
https://gcnp4w.csb.app/
```

<img width="1566" height="911" alt="image" src="https://github.com/user-attachments/assets/289952b5-f2ef-4ff3-9403-c30fc6fbc706" />



---

## 📄 License

This project is released under the **MIT License**.  
Feel free to use, modify, and distribute this project.

---
