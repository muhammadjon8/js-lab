export type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

// Initial mock posts
let posts: Post[] = [
  {
    id: 1,
    title: "Mock Post 1",
    body: "This is the body of Mock Post 1",
    userId: 1,
  },
  {
    id: 2,
    title: "Mock Post 2",
    body: "This is the body of Mock Post 2",
    userId: 1,
  },
  {
    id: 3,
    title: "Mock Post 3",
    body: "This is the body of Mock Post 3",
    userId: 2,
  },
  {
    id: 4,
    title: "Mock Post 4",
    body: "This is the body of Mock Post 4",
    userId: 2,
  },
  {
    id: 5,
    title: "Mock Post 5",
    body: "This is the body of Mock Post 5",
    userId: 1,
  },
  {
    id: 6,
    title: "Mock Post 6",
    body: "This is the body of Mock Post 6",
    userId: 1,
  },
  {
    id: 7,
    title: "Mock Post 7",
    body: "This is the body of Mock Post 7",
    userId: 3,
  },
  {
    id: 8,
    title: "Mock Post 8",
    body: "This is the body of Mock Post 8",
    userId: 3,
  },
  {
    id: 9,
    title: "Mock Post 9",
    body: "This is the body of Mock Post 9",
    userId: 1,
  },
  {
    id: 10,
    title: "Mock Post 10",
    body: "This is the body of Mock Post 10",
    userId: 2,
  },
  {
    id: 11,
    title: "Mock Post 11",
    body: "This is the body of Mock Post 11",
    userId: 2,
  },
];
export const fetchMockPostsPaginated = async (page: number, limit: number) => {
  return new Promise<{ posts: Post[]; hasMore: boolean }>((resolve) => {
    setTimeout(() => {
      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;
      const paginatedPosts = posts.slice(startIndex, endIndex);
      const hasMore = endIndex < posts.length;
      resolve({ posts: paginatedPosts, hasMore });
    }, 500);
  });
};

export const fetchMockPostById = async (
  id: number
): Promise<Post | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const post = posts.find((post) => post.id === id);
      resolve(post);
    }, 500); // Simulate network latency
  });
};

// Simulate creating a new post
export const createMockPost = async (post: Post): Promise<Post> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      posts = [...posts, post];
      resolve(post);
    }, 500); // Simulate network latency
  });
};
