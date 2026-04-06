export const blogPosts = [
  {
    id: 1,
    title: "How I Built My Portfolio with React and Tailwind",
    excerpt:
      "A practical breakdown of how I structured components, chose design patterns, and improved performance while building my personal portfolio website.",
    date: "April 2026",
    readTime: "6 min read",
    tags: ["React", "Tailwind CSS", "Portfolio"],
    content: [
      "When I started building my portfolio, I wanted the site to feel clean, fast, and personal instead of template-like. I chose React because it made it easy to split the UI into reusable sections like About, Experience, Projects, and Contact.",
      "Tailwind CSS helped me move quickly while keeping a consistent visual style. I created repeated patterns for cards, section spacing, text hierarchy, and hover effects so the full page felt connected.",
      "One of the biggest improvements came from optimizing images and reducing unnecessary re-renders in interactive components. This made scroll and transitions much smoother on lower-end devices.",
      "If you are building your own portfolio, focus first on clarity: show what you do, what you built, and how someone can contact you. Fancy UI is great, but structure and readability matter most.",
    ],
  },
  {
    id: 2,
    title: "What I Learned from My MERN Stack Internship",
    excerpt:
      "Real lessons from working on production tasks: API integration, debugging strategies, writing cleaner code, and collaborating in a team workflow.",
    date: "March 2026",
    readTime: "8 min read",
    tags: ["MERN", "Internship", "Web Development"],
    content: [
      "During my internship, I learned that production code is less about writing clever logic and more about writing reliable, maintainable features. Small things like naming, validation, and error handling become very important.",
      "I worked on API integration tasks where debugging network requests taught me to inspect payloads, status codes, and backend assumptions carefully. Most bugs were data mismatch issues, not complex algorithm problems.",
      "Code reviews helped me improve quickly. I learned to break large components into smaller ones, avoid duplicated logic, and write code that the next developer can read in minutes.",
      "The key takeaway was teamwork: communicate blockers early, share progress clearly, and ask questions before assumptions turn into rework.",
    ],
  },
  {
    id: 3,
    title: "Beginner-Friendly Guide to REST API Integration",
    excerpt:
      "A step-by-step guide to calling APIs in frontend apps, handling loading and errors, and keeping code maintainable as your project grows.",
    date: "February 2026",
    readTime: "7 min read",
    tags: ["REST API", "JavaScript", "Frontend"],
    content: [
      "Start with a clear API layer in your project. Keep fetch logic in dedicated functions instead of mixing everything directly inside UI components.",
      "Always handle three states: loading, success, and error. This gives users immediate feedback and makes the app feel stable even on slow internet.",
      "Use try-catch around async calls and display friendly error messages. Log technical details to the console for debugging, but keep user-facing messages simple.",
      "As your app grows, centralizing API calls and response mapping saves time and prevents repeated bugs across different pages.",
    ],
  },

  {
    id: 4,
    title: "How I Enabled Back Swipe Gesture in a WebView App (Expo + Website Fix)",
    excerpt:
      "A practical guide to fixing swipe-back gestures in a WebView-based app by splitting responsibilities between the website and React Native.",
    date: "April 2026",
    readTime: "7 min read",
    tags: ["React Native", "Expo", "WebView", "JavaScript"],
    content: [
      "Building an app using a website inside a WebView is fast and efficient, but adding native-like gestures such as swipe back can be tricky. Initially, everything worked fine except the swipe gesture, which was completely unresponsive.",
      
      "The core issue is that a WebView behaves like a browser. Touch and gesture events are handled inside the webpage, not by React Native. So trying to implement swipe gestures purely in the native layer does not work reliably.",
      
      "The correct approach is to divide responsibilities. Swipe gestures should be handled inside the website, while system-level controls like the Android back button should be handled in React Native. Navigation history is shared between both.",
      
      "To implement swipe back, add a touch listener in your website code. Detect a swipe starting from the left edge and trigger window.history.back(). This mimics native iOS behavior and works perfectly inside WebView.",
      
      "On the React Native side, handle the Android hardware back button using BackHandler. If the WebView can go back, trigger webview.goBack(). Otherwise, show an exit confirmation dialog.",
      
      "Also ensure external links are handled properly using Linking so they open outside your app instead of inside the WebView.",
      
      "Many developers fail because they try to control gestures entirely from React Native or ignore how WebView actually works. The right mindset is simple: WebView is a browser, so gesture logic belongs in the website.",
      
      "There are some limitations. WebView apps are not fully native, complex gestures may feel limited, and performance can drop with heavy interactions. If your app becomes highly interactive, consider moving navigation to native.",
      
      "After applying this architecture, swipe back works smoothly, Android back behaves correctly, and the app feels stable without hacks or crashes.",
      
      "The key takeaway is to not fight the system. Let the website handle gestures and let React Native handle system controls. This separation is what makes the solution scalable and reliable."
    ],
  },
];
