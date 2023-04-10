import PostForm from "../../Components/postForm";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { updatePost } from "../../../api/post";

import { getPostById } from "../../../api/post";
import { updatePosts } from "../../../redux/featured/actions";

const UpdatePost = () => {
  const dispatch = useDispatch();
  const [loading, loadingSet] = useState(false);
  const router = useRouter();
  const { slug } = router.query;

  const [body, setBody] = useState("");
  const [spost, spostSet] = useState({});

  const updateSubmitHandle = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    console.log("image", spost.image);
    formData.append("title", spost.title);
    formData.append("slug", spost.slug);
    formData.append("image", spost.image);
    formData.append("summary", spost.summary);
    formData.append("categories", spost.categories);
    formData.append("body", body);
    Object.assign(spost, { body: body });
    const data = [slug, spost];
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
    console.log("responsedats", res.data.post[0]);
    var copied = Object.assign({}, res.data.post[0]);
    delete copied._id;
    delete copied.body;
    spostSet(copied);

    spostSet(res.data.post[0]);
    setBody(res.data.post[0].body);
  };

  return (
    <>
      {!loading && spost && (
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
