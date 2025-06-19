# HIMITCO Landing Page - Next.js

This project has been converted from Vite to Next.js for better performance, SEO, and API route handling.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   Create a `.env.local` file in the root directory:
   ```env
   # Next.js environment variables
   NEXT_PUBLIC_LANGFLOW_CHAT_ID=your_langflow_chat_flow_id_here
   
   # Server-side environment variables (not exposed to client)
   LANGFLOW_API_KEY=your_langflow_api_key_here
   LANGFLOW_ID=your_langflow_id_here
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   └── voicechat/     # Langflow API endpoint
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── not-found.tsx      # 404 page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   └── [your components]
├── hooks/                # Custom React hooks
└── lib/                  # Utility libraries
```

## 🔧 Key Changes from Vite

1. **File-based routing**: Pages are now in `src/app/` directory
2. **API routes**: Server-side API endpoints in `src/app/api/`
3. **Environment variables**: Use `NEXT_PUBLIC_` prefix for client-side variables
4. **Metadata**: Handled by Next.js metadata API instead of client-side manipulation
5. **No React Router**: Next.js handles routing automatically

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📦 Dependencies

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **Radix UI** - Headless UI primitives
- **React Query** - Data fetching
- **GSAP** - Animations
- **Langflow Client** - AI integration

## 🚀 Deployment

This project can be deployed to:
- Vercel (recommended)
- Netlify
- AWS
- Any Node.js hosting platform

## 📝 Notes

- The project uses the Next.js App Router (newer routing system)
- API routes are server-side only and don't expose sensitive environment variables
- All components have been updated to work with Next.js patterns