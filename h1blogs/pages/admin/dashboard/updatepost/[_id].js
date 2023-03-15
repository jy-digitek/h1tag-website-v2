import PostForm from "../../Components/postForm";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSinglePost } from "../../../redux/featured/actions";
const UpdatePost = () => {
  //const [data, setData] = useState({ abc: "abc" });
  const [loading, loadingSet] = useState(false);

  const dispatch = useDispatch();
  // console.log(router.query);
  const router = useRouter();
  const { _id } = router.query;
  const { data, isLoading, isSuccess } = useSelector((state) => state.post);

  console.log("data", data, isLoading);

  useEffect(() => {
    dispatch(getSinglePost(_id));
  }, [_id]);

  return (
    <>
      {!isLoading && data && isSuccess}
      <PostForm title="Update Post here" data={data} />
    </>
  );
};
export default UpdatePost;
