import PostForm from "../../Components/postForm";
import { useRouter } from "next/router";
import { useState, useEffect, use } from "react";
import { getPostById } from "../../../api/post";
const UpdatePost = () => {
  const [data, setData] = useState({});
  const [loading, loadingSet] = useState(false);
  const router = useRouter();
  // console.log(router.query);

  const { id } = router.query;
  const getPost = async (params) => {
    try {
      const response = await getPostById(params);
      //console.log(response.data.post);
      return response.data.post;
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  useEffect(() => {
    const k = getPost(id)
      .then((res) => {
        console.log(res);
        setData(res);
      })
      .catch((error) => console.log(error));
    //console.log(k);
  }, [id]);

  return (
    <>
      {console.log(data)}
      {!loading}
      <PostForm title="Update Here" _id={id} loading={loading} data={data} />
    </>
  );
};
export default UpdatePost;
