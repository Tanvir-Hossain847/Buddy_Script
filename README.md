# BuddyScript — Social Feed Application

A full-stack social media feed built with **Next.js 16**, **Tailwind CSS v4**, **Firebase Auth**, and a **Node.js + MongoDB** backend.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js 16 (App Router), React 19, Tailwind CSS v4 |
| Auth | Firebase Authentication (email/password + Google OAuth) |
| Backend API | Express.js + MongoDB (via MongoClient) |
| Image Hosting | ImgBB API |
| UI Components | shadcn/ui (Dropdown), Lucide / React Icons |

---

## Project Structure

```
src/
├── app/
│   ├── (feed)/              # Protected route group
│   │   ├── layout.jsx       # Wraps feed in PrivateRoute + Navbar + ThemeToggle
│   │   └── page.jsx         # Main feed page
│   ├── login/               # Login page
│   ├── register/            # Registration page
│   ├── globals.css          # Global styles + dark mode overrides
│   └── layout.jsx           # Root layout — AuthProvider + ThemeProvider
├── components/
│   ├── feed/
│   │   ├── FeedMiddle.jsx   # Fetches posts, handles new post prepend
│   │   ├── PostCard.jsx     # Post display, likes, comments, replies
│   │   ├── CreatePost.jsx   # Post composer with ImgBB image upload
│   │   ├── LeftSidebar.jsx  # Explore, Suggested People, Events
│   │   ├── RightSidebar.jsx # You Might Like, Your Friends
│   │   └── StoriesCard.jsx  # Stories row
│   ├── Navbar.jsx           # Top nav with auth user info + logout
│   ├── PrivateRoute.jsx     # Auth guard — redirects to /login if unauthenticated
│   ├── ThemeProvider.jsx    # Dark/light mode context + localStorage persistence
│   └── ThemeToggle.jsx      # Fixed right-edge pill toggle button
├── context/
│   ├── authContext.jsx      # React context for auth state
│   └── authProvider.jsx     # Firebase auth methods + onAuthStateChanged
└── firebase/
    └── firebase.init.js     # Firebase app + auth initialisation from env vars
```

---

## Features

### Authentication
- Email/password registration with first name, last name, email, password
- Email/password login
- Google OAuth (popup) for both login and registration
- Forgot password — sends Firebase reset email
- `updateProfile` called after registration to store display name
- Auth state persisted via `onAuthStateChanged`

### Protected Routes
- The entire `(feed)` route group is wrapped in `PrivateRoute`
- Unauthenticated users are redirected to `/login`
- A spinner is shown while Firebase resolves the initial auth state

### Feed
- Posts fetched from `GET /posts` on mount, sorted newest-first by `created_at`
- New posts prepended to the top immediately on submit (optimistic)
- Post composer supports plain text and image upload (JPG/PNG only)
- Images uploaded to ImgBB — the returned URL is stored as `media_url`

### Post Interactions
All interactions hit dedicated backend endpoints and use optimistic UI updates:

| Action | Endpoint |
|---|---|
| Like / unlike post | `PATCH /posts/:id/likes` |
| Add comment | `POST /posts/:id/comments` |
| Like / unlike comment | `PATCH /posts/:id/comments/:comment_id/likes` |
| Reply to comment | `POST /posts/:id/comments` with `parent_comment_id` |

Comment structure stored:
```json
{
  "comment_id": "cmt_...",
  "user_id": "user_101",
  "user_name": "Dylan Field",
  "user_profile": "/assets/images/profile.png",
  "created_at": "ISO string",
  "message": "comment text",
  "like": []
}
```

### Dark Mode
- Toggle button fixed to the vertical center of the right edge of the screen
- Adds/removes `dark` class on `<html>`
- Preference persisted to `localStorage`
- All text turns white in dark mode; comment bubble text and placeholders stay muted

### Navbar
- Displays authenticated user's `displayName` and `photoURL` from Firebase
- Falls back to email prefix if no display name is set
- Log Out calls `signOut` then redirects to `/login`

---

## Environment Variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_IMGBB_API_KEY=your_imgbb_key
NEXT_PUBLIC_API_URL=http://localhost:4000

NEXT_PUBLIC_FIREBASE_API_KEY=your_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

---

## Backend API

The Express + MongoDB server must be running at `NEXT_PUBLIC_API_URL` (default `http://localhost:4000`).

Key endpoints:

```
GET    /posts                              — fetch all posts
POST   /posts                              — create a post
PATCH  /posts/:id/likes                    — toggle post like
POST   /posts/:id/comments                 — add a comment
PATCH  /posts/:id/comments/:cid/likes      — toggle comment like
```

---

## Getting Started

```bash
npm install
npm run dev
```

The app runs at `http://localhost:3000`. Make sure the backend API is running separately.

---

## Key Decisions

- **Route groups** — `(feed)` groups the protected pages so the Navbar and PrivateRoute only apply there, keeping login/register clean with no nav.
- **Optimistic UI** — all likes and comments update the local state immediately and revert on API failure, making interactions feel instant.
- **ImgBB over Firebase Storage** — simpler setup with no additional Firebase config; the public URL is stored directly in the post document.
- **`same-origin-allow-popups` COOP header** — required in `next.config.mjs` to allow Firebase's Google OAuth popup to communicate back to the page without browser security warnings.
- **`NEXT_PUBLIC_` prefix** — all secrets that need to be read client-side use this prefix; nothing sensitive is hardcoded.
