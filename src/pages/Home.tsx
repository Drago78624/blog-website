import Header from "../components/Header";
import Posts from "../components/Posts";
import Sidebar from "../components/Sidebar";
import CustomContainer from "../components/CustomContainer";
import { useEffect, useState } from "react";
import type PostType from "../models/PostType";
import axios from "axios";

const Home = () => {
  const [posts, setPosts] = useState<PostType[]>([])

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get("http://localhost:8000/api/v1/blogs")
      setPosts(response.data.blogs)
    }
    fetchPosts()
  }, [])

  console.log(posts)
  return (
    <>
      <Header />
      <CustomContainer>
        <Posts posts={posts} />
        <Sidebar />
      </CustomContainer>
    </>
  );
};

export default Home;
