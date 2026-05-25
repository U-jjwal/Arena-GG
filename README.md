# 🎮 Arena GG — Grassroots Mobile Esports Platform

<div align="center">

![Arena GG](https://img.shields.io/badge/Arena-GG-00B47E?style=for-the-badge&logo=gamepad&logoColor=white)
![Prototype](https://img.shields.io/badge/Phase-1%20Prototype-orange?style=for-the-badge)
![Build Target](https://img.shields.io/badge/Deadline-30%20May-red?style=for-the-badge)
![Frontend](https://img.shields.io/badge/Frontend-React.js-blue?style=for-the-badge)
![Backend](https://img.shields.io/badge/Backend-Node.js-green?style=for-the-badge)

### “Every gamer deserves a stage.”

Arena GG is a mobile-first grassroots esports tournament platform built for casual and mid-level gamers in India & Southeast Asia.

</div>

---

## ✅ Phase 1 Completion Status

*Check the boxes below as features are completed.*

### Core Platform
- [ ] Frontend setup (React + Vite)
- [ ] Backend setup (Node.js + Express)
- [ ] MongoDB database connected
- [ ] Environment variables configured

### Authentication
- [ ] Phone/email registration API
- [ ] Login API with JWT
- [ ] Get current user API
- [ ] Login page UI
- [ ] Register page UI
- [ ] Protected routes middleware

### Tournament System
- [ ] Tournament model (Mongoose)
- [ ] GET /api/tournaments (list)
- [ ] GET /api/tournaments/:id (details)
- [ ] POST /api/tournaments (admin create)
- [ ] POST /api/tournaments/:id/register (player join)
- [ ] Tournament listing page
- [ ] Tournament detail page
- [ ] Registration form component

### Match Flow
- [ ] Match room ID & password display
- [ ] Match status tracking
- [ ] Match timer UI
- [ ] GET /api/matches/:id

### Result Submission
- [ ] Screenshot upload (Multer + Cloudinary)
- [ ] Winner claim system
- [ ] POST /api/matches/:id/result
- [ ] Submit Result page UI

### Admin Panel
- [ ] Admin dashboard page
- [ ] Create tournament form
- [ ] View registered players
- [ ] Upload room credentials UI
- [ ] Verify results page
- [ ] Approve/reject verification API
- [ ] Mark payout completed manually

### Player Features
- [ ] Player dashboard
- [ ] My tournaments list
- [ ] Profile page
- [ ] Basic leaderboard

### Deployment
- [ ] Frontend deployed (Vercel)
- [ ] Backend deployed (Railway/Render)
- [ ] Database on MongoDB Atlas
- [ ] Cloudinary image storage configured

### Final Validation
- [ ] 20–50 real players joined
- [ ] 1 successful tournament conducted
- [ ] Prize paid within 24 hours
- [ ] Player satisfaction ≥ 4/5
- [ ] Major bugs minimal

---

# 📌 Project Goal

The goal of this repository is to build the **Phase 1 Prototype** of Arena GG before **30 May**.

This prototype is focused on validating the **core tournament loop**:

```txt
Player Registers →
Joins Tournament →
Gets Room ID →
Plays Match →
Uploads Winning Screenshot →
Admin Verifies →
Prize Paid via UPI
For Phase 1, tournaments will be hosted manually by the Arena GG team only.

No external organisers, no automated payments, and no advanced esports infrastructure yet.

The purpose is to prove that:

Players are interested

The tournament flow works

Players trust the platform

Prize distribution works smoothly

Users enjoy the experience

Target:

20–50 real players

1 successful tournament

Real prize payout

Positive player feedback

🚨 The Problem We Are Solving
Current grassroots tournaments in India mostly happen through:

WhatsApp groups

Discord servers

Google Forms

Manual spreadsheets

Problems:

Fake tournaments

Fake screenshots

No guaranteed payout

No proper structure

No player profiles/history

No trusted platform for casual gamers

Arena GG aims to become:

The infrastructure layer between casual gaming and professional esports.

🎯 Phase 1 Scope (Till 30 May)
✅ What We ARE Building
Authentication

Phone/email registration

Login system

JWT authentication

User profile creation

Tournament System

Create tournaments manually (admin only)

Tournament listing page

Tournament detail page

Join tournament flow

Player registration with:

In-game name

Free Fire UID

Team name (optional)

Match Flow

Room ID & password display

Match status updates

Match timing display

Result Submission

Screenshot upload

Winner claim system

Admin verification panel

Admin Panel

Admin can:

Create tournaments

View registered players

Upload room credentials

Verify screenshots

Declare winners

Mark payout completed

Manual Prize Distribution

For Phase 1:

No Razorpay

No automated gateway

Prize payout will happen manually through:

UPI ID

PhonePe

Paytm

Mobile number

The admin will mark payout status manually.

Basic Leaderboard

Tournament winners

Basic rankings

Match result display

Responsive Mobile UI

The platform is mobile-first because:

Most target users are mobile gamers

Majority use budget Android devices

Most traffic will come from phones

❌ What We Are NOT Building Yet
These features are intentionally postponed for later phases:

Razorpay integration

Automated payouts

Team finder

Real-time WebSockets

Organisation portal

College dashboards

Advanced brackets

Anti-cheat AI

Mobile app

BGMI support

Sponsorship system

Wallet system

Streaming features

Subscription plans

Discord integration

🧠 Product Vision
Arena GG is not just a tournament website.

The long-term vision is to build:

India’s grassroots esports infrastructure

Community tournament ecosystem

College esports platform

Trusted mobile esports network

Future support:

Free Fire

BGMI

COD Mobile

Valorant Mobile

🛠 Tech Stack (Phase 1)
Frontend
Technology	Purpose
React.js	Frontend UI
React Router DOM	Routing
Tailwind CSS	Styling
Axios	API requests
React Hook Form	Forms
Zod	Validation
Zustand / Context API	State management
Vite	Fast development
Backend
Technology	Purpose
Node.js	Runtime
Express.js	API server
MongoDB	Database
Mongoose	ODM
JWT	Authentication
Multer	Screenshot upload
Cloudinary	Image storage
bcrypt	Password hashing
Deployment
Service	Usage
Vercel	Frontend hosting
Railway / Render	Backend hosting
MongoDB Atlas	Database
Cloudinary	Screenshot/image storage
🏗 Planned Project Structure
text
arena-gg/
│
├── client/                 # React Frontend
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── layouts/
│   │   ├── hooks/
│   │   ├── store/
│   │   ├── services/
│   │   └── utils/
│
├── server/                 # Node.js Backend
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── services/
│   │   ├── utils/
│   │   └── uploads/
│
├── docs/
├── README.md
└── package.json
🎨 Frontend Pages (Phase 1)
Public Pages
Landing Page

Tournament List

Tournament Details

Login/Register

About

Player Pages
Dashboard

My Tournaments

Match Details

Submit Result

Profile

Admin Pages
Admin Dashboard

Create Tournament

Tournament Management

Player Registrations

Result Verification

Payout Management

🔌 Backend API Plan
Auth APIs
POST /api/auth/register

POST /api/auth/login

GET /api/auth/me

Tournament APIs
GET /api/tournaments

GET /api/tournaments/:id

POST /api/tournaments

POST /api/tournaments/:id/register

Match APIs
GET /api/matches/:id

POST /api/matches/:id/result

Admin APIs
POST /api/admin/tournament

PATCH /api/admin/match/:id

PATCH /api/admin/result/:id

🗄 Database Models
User
js
{
  name,
  email,
  phone,
  password,
  freeFireUID,
  role,
  createdAt
}
Tournament
js
{
  title,
  game,
  mode,
  prizePool,
  entryFee,
  startTime,
  roomId,
  roomPassword,
  status
}
Registration
js
{
  userId,
  tournamentId,
  gameUID,
  teamName
}
Match Result
js
{
  tournamentId,
  userId,
  screenshot,
  claimedPosition,
  status
}
📅 Development Timeline
Week 1
Goal: Build core platform structure

Tasks:

Setup frontend

Setup backend

Setup database

Authentication system

Tournament APIs

Tournament pages

Admin panel basic setup

Week 2
Goal: Run real tournament

Tasks:

Result submission

Screenshot upload

Admin verification

UI improvements

Bug fixing

Deploy prototype

Conduct tournament

Collect feedback

👥 Team Responsibilities
Frontend Team
UI/UX

React pages

API integration

Responsive design

State management

Backend Team
REST APIs

Authentication

Database models

Admin controls

File uploads

Security

Admin/Operations
Creating tournaments

Managing players

Sending room credentials

Verifying winners

Sending payouts manually

🔐 Security Considerations
Even in prototype stage:

Passwords must be hashed

JWT authentication required

Admin routes protected

Screenshot uploads validated

Basic rate limiting

Secure environment variables

📈 Success Metrics for Phase 1
The prototype is successful if we achieve:

Metric	Goal
Players	20–50
Tournament Completion	1 successful event
Prize Payout Time	<24 hours
Player Satisfaction	≥ 4/5
Major Bugs During Tournament	Minimal
🚀 Future Roadmap
Phase 2

Razorpay integration

Auto brackets

Player profiles

Real-time updates

BGMI support

Phase 3

Organisation portal

College tournaments

Custom branding

Phase 4

Team finder

Sponsorships

Monetisation

Phase 5

Mobile app

Streaming

Esports scouting

⚠ Important Notes
Manual Operations in Phase 1
Some systems are intentionally manual:

Room creation

Prize payout

Match verification

This helps us:

Build faster

Validate the idea

Learn real user behavior

Avoid overengineering early

💡 Long-Term Mission
Arena GG wants to become:

“The home of grassroots mobile esports in India & Southeast Asia.”

We are building for:

Casual gamers

College players

Small esports communities

Future competitive talent

📄 Internal Documents
Project planning and architecture documents are available in:

/docs

These include:

Product strategy

Architecture planning

Market research

Future roadmap

Technical planning

🤝 Contribution Rules
Before pushing:

bash
npm run lint
Branch naming:

text
feature/auth-system
feature/tournament-ui
fix/login-bug
Commit style:

text
feat: add tournament registration
fix: resolve login token issue
ui: improve mobile navbar
🏁 Final Goal Before 30 May
By 30 May we want:

✅ A working prototype

✅ Real players using it

✅ One successful tournament completed

✅ Winners paid successfully

✅ Positive feedback from gamers

That is the ONLY goal of Phase 1.

Everything else comes later.

📁 Detailed Project Folder Structure (Phase 1 Prototype)
This section explains the exact folder structure, pages, components, backend architecture, and files we are planning to create for the first prototype build till 30 May.

The goal is to keep the architecture:

scalable

beginner-friendly

production-ready

easy for team collaboration

🖥 FRONTEND STRUCTURE (React + Vite)
txt
client/
│
├── public/
│   ├── logo.png
│   ├── favicon.ico
│   └── images/
│
├── src/
│   │
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│   │
│   ├── assets/
│   │   ├── icons/
│   │   ├── banners/
│   │   └── illustrations/
│   │
│   ├── pages/
│   │   │
│   │   ├── public/
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Tournaments.jsx
│   │   │   ├── TournamentDetails.jsx
│   │   │   ├── About.jsx
│   │   │   └── NotFound.jsx
│   │   │
│   │   ├── player/
│   │   │   ├── Dashboard.jsx
│   │   │   ├── MyTournaments.jsx
│   │   │   ├── MatchRoom.jsx
│   │   │   ├── SubmitResult.jsx
│   │   │   ├── Leaderboard.jsx
│   │   │   └── Profile.jsx
│   │   │
│   │   └── admin/
│   │       ├── AdminDashboard.jsx
│   │       ├── CreateTournament.jsx
│   │       ├── ManageTournament.jsx
│   │       ├── Registrations.jsx
│   │       ├── MatchManagement.jsx
│   │       ├── VerifyResults.jsx
│   │       └── PayoutManagement.jsx
│   │
│   ├── components/
│   │   │
│   │   ├── common/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Loader.jsx
│   │   │   ├── ProtectedRoute.jsx
│   │   │   ├── Button.jsx
│   │   │   ├── Input.jsx
│   │   │   ├── Modal.jsx
│   │   │   ├── EmptyState.jsx
│   │   │   └── ErrorMessage.jsx
│   │   │
│   │   ├── tournament/
│   │   │   ├── TournamentCard.jsx
│   │   │   ├── TournamentBanner.jsx
│   │   │   ├── TournamentInfo.jsx
│   │   │   ├── RegistrationForm.jsx
│   │   │   ├── PrizePoolCard.jsx
│   │   │   └── TournamentStatus.jsx
│   │   │
│   │   ├── match/
│   │   │   ├── RoomCard.jsx
│   │   │   ├── MatchTimer.jsx
│   │   │   ├── ResultUpload.jsx
│   │   │   ├── WinnerCard.jsx
│   │   │   └── MatchStatus.jsx
│   │   │
│   │   ├── leaderboard/
│   │   │   ├── LeaderboardTable.jsx
│   │   │   ├── PlayerRankCard.jsx
│   │   │   └── TopPlayers.jsx
│   │   │
│   │   └── admin/
│   │       ├── AdminSidebar.jsx
│   │       ├── TournamentTable.jsx
│   │       ├── ResultReviewCard.jsx
│   │       ├── RegistrationTable.jsx
│   │       └── PayoutCard.jsx
│   │
│   ├── layouts/
│   │   ├── MainLayout.jsx
│   │   ├── AdminLayout.jsx
│   │   └── AuthLayout.jsx
│   │
│   ├── routes/
│   │   └── AppRoutes.jsx
│   │
│   ├── services/
│   │   ├── axios.js
│   │   ├── authService.js
│   │   ├── tournamentService.js
│   │   ├── matchService.js
│   │   ├── adminService.js
│   │   └── uploadService.js
│   │
│   ├── store/
│   │   ├── authStore.js
│   │   ├── tournamentStore.js
│   │   └── userStore.js
│   │
│   ├── context/
│   │   └── AuthContext.jsx
│   │
│   ├── hooks/
│   │   ├── useAuth.js
│   │   ├── useTournament.js
│   │   └── useUpload.js
│   │
│   ├── utils/
│   │   ├── formatDate.js
│   │   ├── toast.js
│   │   ├── validateImage.js
│   │   └── constants.js
│   │
│   └── styles/
│       └── global.css
│
├── .env
├── package.json
└── vite.config.js
🌐 FRONTEND PAGES FLOW
Public User Flow
txt
Home Page
   ↓
Login/Register
   ↓
Tournament List
   ↓
Tournament Details
   ↓
Join Tournament
Player Flow
txt
Dashboard
   ↓
My Tournament
   ↓
Match Room
   ↓
Upload Winning Screenshot
   ↓
Wait For Verification
Admin Flow
txt
Admin Dashboard
   ↓
Create Tournament
   ↓
View Registrations
   ↓
Add Room ID & Password
   ↓
Verify Winner Screenshot
   ↓
Mark Prize Paid
⚙ BACKEND STRUCTURE (Node.js + Express)
txt
server/
│
├── src/
│   │
│   ├── server.js
│   ├── app.js
│   │
│   ├── config/
│   │   ├── db.js
│   │   ├── cloudinary.js
│   │   └── env.js
│   │
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── tournamentController.js
│   │   ├── matchController.js
│   │   ├── adminController.js
│   │   └── uploadController.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── tournamentRoutes.js
│   │   ├── matchRoutes.js
│   │   ├── adminRoutes.js
│   │   └── uploadRoutes.js
│   │
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   ├── adminMiddleware.js
│   │   ├── errorMiddleware.js
│   │   ├── uploadMiddleware.js
│   │   └── validateMiddleware.js
│   │
│   ├── models/
│   │   ├── User.js
│   │   ├── Tournament.js
│   │   ├── Registration.js
│   │   ├── Match.js
│   │   └── Result.js
│   │
│   ├── services/
│   │   ├── authService.js
│   │   ├── tournamentService.js
│   │   ├── matchService.js
│   │   ├── adminService.js
│   │   └── uploadService.js
│   │
│   ├── utils/
│   │   ├── generateToken.js
│   │   ├── responseHandler.js
│   │   ├── asyncHandler.js
│   │   ├── logger.js
│   │   └── validators.js
│   │
│   ├── uploads/
│   │
│   └── validations/
│       ├── authValidation.js
│       ├── tournamentValidation.js
│       └── resultValidation.js
│
├── .env
├── package.json
└── nodemon.json
🗄 DATABASE COLLECTIONS
1. Users Collection
js
{
  name,
  email,
  phone,
  password,
  role,
  freeFireUID,
  avatar,
  createdAt
}
2. Tournament Collection
js
{
  title,
  description,
  game,
  mode,
  prizePool,
  entryFee,
  maxPlayers,
  startTime,
  roomId,
  roomPassword,
  status
}
3. Registration Collection
js
{
  userId,
  tournamentId,
  inGameName,
  freeFireUID,
  joinedAt
}
4. Result Collection
js
{
  tournamentId,
  userId,
  screenshot,
  claimedPosition,
  verificationStatus,
  verifiedBy
}
🔌 API STRUCTURE
Auth APIs
http
POST /api/auth/register
POST /api/auth/login
GET  /api/auth/me
Tournament APIs
http
GET    /api/tournaments
GET    /api/tournaments/:id
POST   /api/tournaments
POST   /api/tournaments/:id/register
PATCH  /api/tournaments/:id
DELETE /api/tournaments/:id
Match APIs
http
GET   /api/matches/:id
POST  /api/matches/:id/result
POST  /api/matches/:id/upload
Admin APIs
http
GET    /api/admin/dashboard
GET    /api/admin/registrations
PATCH  /api/admin/verify-result/:id
PATCH  /api/admin/payout/:id
🎨 IMPORTANT UI SCREENS
1. Landing Page
Hero section

Features

Tournament highlights

CTA buttons

Footer

2. Tournament Details Page
Banner

Prize pool

Entry fee

Date & time

Rules

Join button

3. Match Room Page
Room ID

Room Password

Match timer

Instructions

Upload result button

4. Result Upload Page
Screenshot uploader

Position input

Submit button

5. Admin Verification Page
Uploaded screenshots

Player info

Approve/Reject buttons

🚀 INITIAL DEVELOPMENT START ORDER
FRONTEND START ORDER
Day 1
Setup React + Vite

Setup Tailwind

Setup Routing

Setup Layouts

Day 2
Authentication pages

Navbar/Footer

Tournament cards

Day 3
Tournament detail page

Registration form

Dashboard

Day 4
Match room page

Result upload page

Day 5
Admin dashboard

Verification UI

BACKEND START ORDER
Day 1
Setup Express server

Setup MongoDB

Folder structure

Day 2
Auth APIs

JWT auth

User model

Day 3
Tournament CRUD APIs

Day 4
Match APIs

Result upload APIs

Day 5
Admin APIs

Deployment

📦 NPM PACKAGES
Frontend
bash
npm install react-router-dom axios react-hook-form zod zustand react-hot-toast
bash
npm install -D tailwindcss postcss autoprefixer
Backend
bash
npm install express mongoose dotenv bcryptjs jsonwebtoken cors multer cloudinary
bash
npm install -D nodemon
🔥 FINAL PHASE 1 DELIVERABLE
By 30 May we should have:

✅ Fully working frontend

✅ Fully working backend

✅ Tournament registration system

✅ Match room system

✅ Screenshot upload system

✅ Admin verification panel

✅ Manual UPI payout system

✅ Hosted prototype

✅ Real tournament conducted

That is the only target for Phase 1.

❤️ Arena GG
Built for the next generation of grassroots gamers