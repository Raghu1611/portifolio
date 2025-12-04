export const projectsData = [
    {
        id: 1,
        title: "Real-Time Chat Application",
        tagline: "Seamless communication with rich media sharing",
        tech: ["React", "Socket.IO", "Node.js", "MongoDB", "Tailwind"],
        liveUrl: "https://chat-app-client-murex-xi.vercel.app/",
        githubUrl: "https://github.com/Raghu1611/chatApp.git",
        image: "/projects/chatapp.png",
        highlights: [
            "Real-time messaging with Socket.IO",
            "Typing & online status indicators",
            "Group & private chats",
            "File sharing with Cloudinary",
            "Message editing & deletion"
        ],
        fullDescription: "A modern, full-stack real-time messaging platform built to facilitate seamless communication. This application features instant messaging, rich media sharing, and secure authentication, all wrapped in a responsive, aesthetically pleasing interface.",
        features: [
            "⚡ Real-Time Communication: Instant messaging powered by Socket.IO",
            "🔐 Secure Authentication: JWT & Bcrypt for robust security",
            "📸 Rich Media Sharing: Drag-and-drop file uploads via Cloudinary",
            "💬 Advanced Messaging: Edit, delete, react, and reply to messages",
            "👥 Group & Private Chats: Multi-user and 1-on-1 conversations",
            "🎨 Modern UI/UX: Sleek dark mode with Tailwind CSS"
        ],
        learned: [
            "Implementing WebSockets for bi-directional communication",
            "Managing complex global state in React",
            "Handling secure file uploads",
            "Designing scalable MongoDB schemas"
        ]
    },
    {
        id: 2,
        title: "AI-Powered Resume Analyzer",
        tagline: "Gemini AI Resume Matcher & Mock Interview Coach",
        tech: ["React", "Gemini Pro API", "Node.js", "MongoDB", "Tailwind"],
        liveUrl: "https://resume-matcher-udii.vercel.app/",
        githubUrl: "https://github.com/Raghu1611/resume-matcher.git",
        image: "/projects/resumematcher.png",
        highlights: [
            "AI resume scoring (0-100%)",
            "Missing keyword detection",
            "AI mock interview coach",
            "Resume builder",
            "PDF parsing"
        ],
        fullDescription: "A full-stack web application designed to bridge the gap between job seekers and their dream roles. Leveraging Google's Gemini AI, it provides deep insights into resume-job alignment and offers a holistic career toolkit.",
        features: [
            "📄 Smart Resume Analysis: Instant ATS compatibility score",
            "🔍 Keyword Gap Detection: Identifies missing hard/soft skills",
            "🤖 AI Mock Interview Coach: Custom questions & real-time feedback",
            "📝 Resume Builder: Create ATS-compliant resumes",
            "🔐 Secure Authentication: Email verification & session management"
        ],
        learned: [
            "Integrating Google Gemini AI for text analysis",
            "Parsing PDFs to extract raw text",
            "Prompt engineering for structured AI feedback",
            "Building responsive UIs with Framer Motion"
        ]
    },
    {
        id: 3,
        title: "FreshMart Online Grocery",
        tagline: "Premium E-commerce Shopping Experience",
        tech: ["React", "Redux", "Node.js", "MongoDB", "Razorpay"],
        liveUrl: "https://freshmart-client.vercel.app/",
        githubUrl: "https://github.com/Raghu1611/freshmart.git",
        image: "/projects/freshmart.png",
        highlights: [
            "Dark UI + animations",
            "Live cart system",
            "Order tracking (Pending → Delivered)",
            "Admin dashboard",
            "Payment integration (Razorpay)"
        ],
        fullDescription: "FreshMart is a robust full-stack e-commerce solution designed to modernize the online grocery shopping experience. It bridges the gap between functionality and aesthetics with a user-centric design.",
        features: [
            "User-Centric Design: Custom dark mode & smooth animations",
            "Smart Shopping: Advanced filtering & real-time search",
            "Order Management: Real-time status tracking",
            "Admin Powerhouse: Dashboard for sales & inventory",
            "Secure & Scalable: JWT auth & multiple payment methods"
        ],
        learned: [
            "Building complex e-commerce state management",
            "Integrating payment gateways like Razorpay",
            "Designing admin dashboards for data visualization",
            "Implementing order tracking logic"
        ]
    }
];
