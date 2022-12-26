import Layout from "../components/Layout";
import PostCard from "../components/PostCard";

function SavedPostPage() {
  return (
    <Layout>
      <h1 className="text-4xl mb-4 text-gray-500">Your Saved Posts</h1>
      <PostCard />
      <PostCard />
    </Layout>
  );
}

export default SavedPostPage