import PostForm from "../Components/postForm";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postCreate } from "../../redux/featured/actions";
const AddPost = () => {
  // const [title, setTitle] = useState("");
  // const [slug, setSlug] = useState("");
  // const [image, setImage] = useState(undefined);
  // const [summary, setSummary] = useState("");
  // const [categories, setCategories] = useState("");
  const [body, setBody] = useState("");

  const [data, setData] = useState({});

  const dispatch = useDispatch();

  const addsubmitHandle = (e) => {
    e.preventDefault();

    const formData = new FormData();

    // console.log({ body: body, slug: slug, summary: summary, image: image });

    console.log("data====>", data, "body=====>", body);

    formData.append("title", data.title);
    formData.append("slug", data.slug);
    formData.append("image", data.image);
    formData.append("summary", data.summary);
    formData.append("categories", data.categories);
    formData.append("body", body);
    dispatch(postCreate(formData));
    setData({
      title: "",
      slug: "",
      image: undefined,
      summary: "",
      categories: "",
    });
    setBody("");
  };

  return (
    <PostForm
      title="Add Post Here"
      // setTitle={setTitle}
      // setSlug={setSlug}
      // setImage={setImage}
      // setSummary={setSummary}
      // setCategories={setCategories}
      // setBody={setBody}
      addsubmitHandle={addsubmitHandle}
      // body={body}
      data={data}
      setData={setData}
      setBody={setBody}
      body={body}
    />
  );
};
export default AddPost;
