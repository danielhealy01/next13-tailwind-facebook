import Layout from "../components/Layout";
import PostCard from "../components/PostCard";
import PostFormCard from "../components/PostFormCard";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useState, useEffect } from "react";
import LoginPage from "./login";
import { UserContext } from "../contexts/userContext";

export default function Home() {
  const session = useSession();
  const [posts, setPosts] = useState([]);
  const supabase = useSupabaseClient();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    if (!session?.user?.id) {
      return;
    }
    fetchProfile();
  }, [session?.user?.id, fetchProfile]);

  if (!session) {
    return <LoginPage />;
  }

  function fetchPosts() {
    supabase
      .from("posts")
      .select("id, content, created_at, profiles(id, avatar, name)")
      .order("created_at", { ascending: false })
      .then((res) => {
        setPosts(res.data);
      });
  }

  function fetchProfile() {
    supabase
      .from("profiles")
      .select()
      .eq("id", session.user.id)
      .then((result) => {
        if (result.data.length) {
          setProfile(result.data[0]);
        }
      });
  }

  return (
    <Layout>
      <UserContext.Provider value={{ profile }}>
        <PostFormCard onPost={fetchPosts} />
        {posts?.length > 0 &&
          posts.map((post) => <PostCard {...post} key={post} />)}
        {/* Spread prop passes in props from individual posts */}
        {/* Select on profiles table uses foreign key to bring in profile data per post */}
      </UserContext.Provider>
    </Layout>
  );
}
