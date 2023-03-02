import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { Box, Text } from "@chakra-ui/react";

const Post = ({}) => {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  //console.log("vhjhjhvjh", _id);

  const getData = async () => {
    const { _id } = router.query;

    if (_id) {
      const res = await axios.get(`http://localhost:5000/api/vi/post/${_id}`);
      setPost(res.data.post);
    }

    //console.log(res.data.post);
    //console.log(post);
  };
  useEffect(() => {
    setLoading(true);
    getData();
    setLoading(false);
  });
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
