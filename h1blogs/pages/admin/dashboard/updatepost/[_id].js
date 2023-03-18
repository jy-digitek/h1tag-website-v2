import PostForm from "../../Components/postForm";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { getSinglePost } from "../../../redux/featured/actions";

// import { updatePosts } from "../../../redux/featured/actions";

import { updatePost } from "../../../api/post";

import { getPostById } from "../../../api/post";
import { updatePosts } from "../../../redux/featured/actions";
const UpdatePost = () => {
  const dispatch = useDispatch();
  const [loading, loadingSet] = useState(false);
  const router = useRouter();
  const { _id } = router.query;
  const [body, setBody] = useState("");
  // const { data, isLoading, isSuccess } = useSelector((state) => state.post);

  const updateSubmitHandle = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    console.log("slug", spost.slug);

    // console.log("spost", body, spost);
    console.log("image", spost.image);

    formData.append("title", spost.title);
    formData.append("slug", spost.slug);
    formData.append("image", spost.image);
    formData.append("summary", spost.summary);
    formData.append("categories", spost.categories);
    formData.append("body", body);

    Object.assign(spost, { body: body });

    const data = [_id, spost];

    //  const res = await updatePost(_id, spost);
    // console.log(res);
    dispatch(updatePosts(data));
  };

  useEffect(() => {
    if (_id) {
      loadingSet(true);
      getSinglePostData(_id);
      loadingSet(false);
    }
  }, [_id]);

  const getSinglePostData = async (_id) => {
    const res = await getPostById(_id);
    var copied = Object.assign({}, res.data.post);
    delete copied._id;
    delete copied.body;
    spostSet(copied);
    setBody(res.data.post.body);
  };

  const [spost, spostSet] = useState({});

  return (
    <>
      {!loading && (
        <PostForm
          title="Update Post here"
          spost={spost}
          spostSet={spostSet}
          body={body}
          setBody={setBody}
          updateSubmitHandle={updateSubmitHandle}
        />
      )}
    </>
  );
};
export default UpdatePost;
