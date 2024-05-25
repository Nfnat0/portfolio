const config = {
  projects: [
    {
      id: 1,
      name: "Task Management App",
      description: "A web application to manage tasks efficiently.",
      url: "https://example.com/task-management-app",
      imageUrl: "/images/task-management/top.jpg",
      detailImages: ["/images/task-management/detail1.jpg", "/images/task-management/detail2.jpg"],
      technologies: ["React", "Node.js", "MongoDB"],
      features: ["Create, edit, and delete tasks", "Set task priorities", "Track task progress"]
    },
    {
      id: 2,
      name: "Real-Time Chat App",
      description: "A real-time chat application for seamless communication.",
      url: "https://example.com/real-time-chat-app",
      imageUrl: "/images/chat/top.jpg",
      detailImages: ["/images/chat/detail1.jpg", "/images/chat/detail2.jpg"],
      technologies: ["Vue", "Django", "WebSocket"],
      features: ["Real-time messaging", "User authentication", "Group chats"]
    },
    {
      id: 3,
      name: "Weather Forecast App",
      description: "An app to get real-time weather forecasts and updates.",
      url: "https://example.com/weather-forecast-app",
      imageUrl: "/images/weather/top.jpg",
      detailImages: ["/images/weather/detail1.jpg", "/images/weather/detail2.jpg"],
      technologies: ["Angular", "Spring Boot", "REST API"],
      features: ["Current weather updates", "Weekly weather forecast", "Weather alerts"]
    }
  ]
};

export default config;
