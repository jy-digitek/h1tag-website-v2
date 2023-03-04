import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { getPostById } from "../api/post";

const Post = ({}) => {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const { _id } = router.query;
  const getData = async () => {
    getPostById(_id)
      .then((response) => setPost(response.data.post))
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    setLoading(true);
    getData();
    setLoading(false);
  }, [_id]);

  return (
    <div>
      {!loading && (
        <>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <p>{post.slug}</p>
          <p>{post._id}</p>
        </>
      )}
    </div>
  );
};
export default Post;
