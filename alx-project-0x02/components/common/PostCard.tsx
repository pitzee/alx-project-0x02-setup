import { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ title, userId }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h2 className="text-xl font-semibold text-blue-700 mb-2">{title}</h2>
      <span className="text-sm text-gray-500">Posted by User #{userId}</span>
    </div>
  );
};

export default PostCard;
