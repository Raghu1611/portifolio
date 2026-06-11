export const projectsData = [
    {
        id: 1,
        title: "AI-Powered Enterprise Knowledge Chatbot",
        tagline: "Fine-tuned domain-specific chatbot using Qwen 2.5 and QLoRA",
        tech: ["Qwen 2.5", "AWS SageMaker", "QLoRA", "LLM Fine-Tuning", "Python"],
        liveUrl: "", // Deep backend focus
        githubUrl: "https://github.com/Raghu1611",
        image: "/projects/chatbot.png",
        highlights: [
            "Fine-tuned Qwen 2.5 1.5B Instruct model",
            "Supervised training with 195+ custom pairs",
            "Deployed pipelines on AWS SageMaker instances",
            "Applied 4-bit quantization for GPU resource efficiency"
        ],
        problem: "Enterprise technical documentation is often extensive and difficult to query quickly, leading to slow onboarding and high developer support ticket counts. Off-the-shelf LLMs lack domain specialization and hallucinate product-specific API details.",
        solution: "Engineered a custom supervised fine-tuning pipeline using QLoRA adapters to align the Qwen 2.5 1.5B model to the enterprise documentation. Created 195+ structured Q&A training examples, and optimized hyperparameters on AWS SageMaker.",
        architecture: "Data Ingestion (Markdown parser) → Tokenization (Qwen tokenizer) → Model Fine-Tuning (4-bit quantization with LoRA adapters on g5.xlarge GPU) → Evaluation (Rogue/BLEU scores) → Inference Endpoint (AWS SageMaker Hosting).",
        impact: "Reduced GPU memory utilization during training by 68% using PEFT techniques. The domain chatbot achieved 92% accuracy on custom technical query tests, reducing support response lookup times from minutes to seconds.",
        metrics: {
            "Memory Saved": "68%",
            "Dataset Size": "195+ QA Pairs",
            "Accuracy": "92%"
        }
    },
    {
        id: 2,
        title: "Online Grocery Delivery Platform",
        tagline: "High-performance MERN stack online e-commerce platform",
        tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux", "JWT"],
        liveUrl: "https://freshmart-client.vercel.app/",
        githubUrl: "https://github.com/Raghu1611/freshmart.git",
        image: "/projects/freshmart.png",
        highlights: [
            "Secure session handling via JWT and HTTP-only cookies",
            "Role-Based Access Control (RBAC) for admins & customers",
            "Database lookup query indexes for faster catalog search",
            "Live transaction processing and orders dashboard"
        ],
        problem: "Traditional online storefronts face scalability bottlenecks due to poorly optimized database queries, unsecure authentication mechanisms, and lack of real-time administrative insights on inventory shifts.",
        solution: "Built FreshMart, a complete e-commerce solution with custom admin panel, secure role-based routes, and payment integration. Optimized Mongo schema design and leveraged DB query indexes to speed up responses.",
        architecture: "Client Layer (React with Redux state) → API Server (Express REST gateway) → Security Shield (JWT checks + rate limiters) → Persistent Layer (MongoDB Atlas cluster).",
        impact: "Achieved sub-100ms API response times by indexing product categories. The platform handles secure order creation, real-time status updates (Pending → Delivered), and secure dashboard analytics.",
        metrics: {
            "API Latency": "< 100ms",
            "Security System": "JWT + RBAC",
            "Uptime Status": "99.9%"
        }
    },
    {
        id: 3,
        title: "Real-Time Chat Application",
        tagline: "Low-latency messaging platform with Socket.io & MySQL",
        tech: ["React.js", "Node.js", "Socket.io", "MySQL", "Cloudinary"],
        liveUrl: "https://chat-app-client-murex-xi.vercel.app/",
        githubUrl: "https://github.com/Raghu1611/chatApp.git",
        image: "/projects/chatapp.png",
        highlights: [
            "Bi-directional message streaming via WebSockets",
            "Persistent chat message logs in indexed MySQL databases",
            "Instant typing status, active status indicators",
            "Asynchronous media sharing using Cloudinary CDN"
        ],
        problem: "Users require low-latency messaging, but scaling active socket pools while ensuring persistent storage and accurate synchronization is a major engineering hurdle.",
        solution: "Created a modern real-time messaging application. Used Socket.io for instantaneous socket events and MySQL to handle high-write message logs. Media is managed asynchronously to avoid blocking the main thread.",
        architecture: "React Frontend (Socket.io-client) ⇄ Node.js Web Server (Socket.io-server) ⇄ MySQL Database (Message logs / user index). Images uploaded to Cloudinary CDN.",
        impact: "Achieved near-zero messaging lag with structured WebSocket message frames. Enabled full support for group chats, private messaging, online status indicators, and file sharing with high database retrieval efficiency.",
        metrics: {
            "Delivery Lag": "~0ms",
            "Database": "MySQL Logs",
            "Asset Upload": "Cloudinary CDN"
        }
    }
];
