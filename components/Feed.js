import { SparklesIcon } from "@heroicons/react/outline";
import Input from "./Input";
import Post from "./Post";

const Feed = () => {
  const posts = [
    {
      id: "1",
      name: "Sahand Ghavidel",
      username: "codewithsahand",
      userImg: "https://www.adscientificindex.com/pictures/0b/50734.jpg",
      img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80",
      text: "nice view!",
      timestamp: "2 hours ago",
    },
    {
      id: "2",
      name: "Sahand Ghavidel",
      username: "codewithsahand",
      userImg: "https://www.adscientificindex.com/pictures/0b/50734.jpg",
      img: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      text: "wow!",
      timestamp: "2 days ago",
    },
  ];
  return (
    <div className="xl:ml-[385px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
      <div className="flex justify-between py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
        <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
        <div className="hoverEffect flex items-center justify-center px-0 w-9 h-9">
          <SparklesIcon className="h-5" />
        </div>
      </div>
      <Input />
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Feed;
