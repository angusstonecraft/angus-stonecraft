// Blog post data structure for easy management and rendering
export type BlogPost = {
  title: string;
  date: string; // ISO format
  image: string; // path to image in public/
  content: string; // can be markdown or plain text
};

export const blogPosts: BlogPost[] = [
  // Example post
  {
    title: "Hello, World!",
    date: "2026-02-17T09:00:00Z",
    image: "/log.jpeg",
    content: `Welcome to the blog! I plan to update this blog with ongoing projects, upcoming events and anything else that crosses my mind so stay tuned. Pictured is me hugging (petrified) trees at Dobell's Ranch in AZ, as one does!`,
  },
  // Add more posts here
];
