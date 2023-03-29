import PostForm from "../Components/postForm";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postCreate } from "../../redux/featured/actions";
const AddPost = () => {
  const [body, setBody] = useState("");

  const [data, setData] = useState({});

  const dispatch = useDispatch();

  const addsubmitHandle = (e) => {
    e.preventDefault();

    const formData = new FormData();

    // console.log({ body: body, slug: slug, summary: summary, image: image });

    console.log("data====>", data, "body=====>", body);

    formData.append("title", data.title);
    formData.append(
      "slug",
      data.title
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/[\s_-]+/g, "-")
        .replace(/^-+|-+$/g, "")
    );
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
      addsubmitHandle={addsubmitHandle}
      data={data}
      setData={setData}
      setBody={setBody}
      body={body}
    />
  );
};
export default AddPost;
