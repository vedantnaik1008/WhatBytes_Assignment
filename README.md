# 🛒 Whatbytes Frontend Assignment – QuickKart

> ✅ **All functionalities are complete and working as per the assignment.**
> 
> ⚠️ **Note on Commit History & UI**  
> I started implementing the project before fully reading the final submit assignment instructions. As a result, I pushed ~80% of the code in one go instead of following a feature-based commit structure. I sincerely apologize for this and assure you it won’t happen again in future.  
> 
> Additionally, to save time due to multiple overlapping deadlines, I used the UI from a prior project I built and modified it to match all required functionalities. While the UI design doesn't exactly match the given image, every required feature is fully implemented with proper logic, state management, performance optimizations, and best practices.  
> 
> I am confident in my frontend skills and would greatly appreciate an opportunity to prove myself further.

---

## 🚀 Live Demo

🔗 [Live Deployment on Vercel](https://your-vercel-url.vercel.app)  
🔗 [GitHub Repository](https://github.com/vedantnaik1008/WhatBytes_Assignment)

---

## 📁 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **State Management**: Redux Toolkit
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Image Optimization**: Next/Image
- **Persistence**: localStorage for Cart

---

## 📦 Features

### ✅ 1. Home Page (`/`)
- **Header**
  - Logo (left)
  - Centered search bar
  - Cart icon with badge and user avatar (right)
- **Sidebar Filters**
  - Category checkboxes
  - Price range slider
  - (Optional) Brand filter
- **Product Grid**
  - Responsive layout (3-cols on desktop, 2-cols on tablet, 1-col on mobile)
  - Product cards with:
    - Image
    - Title
    - Price
    - Add to Cart button
    - (Optional) Star rating
- **Footer**
  - Copyright
  - Social media icons

### ✅ 2. Product Detail Page (`/product/[id]`)
- **Image Section**
  - Large image or carousel
- **Details Section**
  - Product title, price, category, and description
  - Quantity selector
  - Add to Cart button
  - (Optional) Reviews section

### ✅ 3. (Bonus) Cart Page (`/cart`)
- List of added products with:
  - Quantity update controls
  - Remove item option
- Price summary and total
- Cart persists in `localStorage`

---

## ⚙️ Logic Implemented

- Product filtering by category and price
- Search filtering by product title
- Query-string based filters (`?category=xyz&price=0-500`)
- Client-side cart management using Redux
- Dynamic routing for product detail pages
- Conditional rendering for empty states
- Cart state persistence in localStorage

---

## 🧪 Best Practices Followed

- Functional components with React Hooks
- Global state using Redux Toolkit
- Debounced search and optimized filtering
- Accessibility and responsive design
- Lazy loading images and components
- Reusable UI components

---

## 📝 To Reviewers

Thank you for reviewing this submission. I understand the importance of following instructions like commit structure and exact design fidelity, and I acknowledge my oversight in those aspects. However, I’ve worked diligently to ensure **feature completeness, performance, and quality code** in this project.

I look forward to the opportunity to demonstrate my frontend skills further.

—

**Created by:** Vedant Naik  