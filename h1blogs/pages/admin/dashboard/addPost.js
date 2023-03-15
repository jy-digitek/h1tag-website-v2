import PostForm from "../Components/postForm";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postCreate } from "../../redux/featured/actions";
const AddPost = () => {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [image, setImage] = useState(undefined);
  const [summary, setSummary] = useState("");
  const [categories, setCategories] = useState("");
  const [body, setBody] = useState("");

  const dispatch = useDispatch();

  const addsubmitHandle = (e) => {
    e.preventDefault();

    const formData = new FormData();

    console.log({ body: body, slug: slug, summary: summary, image: image });

    formData.append("title", title);
    formData.append("slug", slug);
    formData.append("image", image);
    formData.append("summary", summary);
    formData.append("categories", categories);
    formData.append("body", body);
    dispatch(postCreate(formData));
  };

  return (
    <PostForm
      title="Add Post Here"
      setTitle={setTitle}
      setSlug={setSlug}
      setImage={setImage}
      setSummary={setSummary}
      setCategories={setCategories}
      setBody={setBody}
      addsubmitHandle={addsubmitHandle}
    />
  );
};
export default AddPost;
