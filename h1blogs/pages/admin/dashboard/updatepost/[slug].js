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
  const { slug } = router.query;
  console.log("updatePost_id", slug);
  const [body, setBody] = useState("");
  // const { data, isLoading, isSuccess } = useSelector((state) => state.post);
  const post = useSelector((state) => state.post);
  console.log("post", post);
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

    const data = [slug, spost];

    //  const res = await updatePost(_id, spost);
    // console.log(res);
    dispatch(updatePosts(data));
  };

  useEffect(() => {
    if (slug) {
      loadingSet(true);
      getSinglePostData({ slug });
      loadingSet(false);
    }
  }, [slug]);

  const getSinglePostData = async (slug) => {
    const res = await getPostById(slug);
    console.log("res", res);
    var copied = Object.assign({}, res.data.post);
    delete copied._id;
    delete copied.body;
    spostSet(copied);
    setBody(res.data.post.body);
  };

  const [spost, spostSet] = useState({});
  console.log("spost", spost[0]);

  return (
    <>
      {!loading && spost && (
        <PostForm
          title="Update Post here"
          spost={spost[0]}
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
