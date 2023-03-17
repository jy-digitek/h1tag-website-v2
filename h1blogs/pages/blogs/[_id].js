import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Image } from "@chakra-ui/react";
import { getSinglePost } from "../redux/featured/actions";
import { useDispatch, useSelector } from "react-redux";
const Post = ({}) => {
  const router = useRouter();
  const { _id } = router.query;
  const post = useSelector((state) => state.post);
  console.log("post", post);

  const dispatch = useDispatch();

  useEffect(() => {
    if (_id) {
      dispatch(getSinglePost(_id));
    }
  }, [_id]);

  return (
    <div>
      {!post.isLoading && (
        <div>
          <h1>{post.data.title} title</h1>
          <p>{post.summary}summary</p>
          {console.log("images", post.data.image)}
          <Image src={`../uploads/${post.data.image}`} alt="Dan Abramov" />
          <div
            style={{ padding: "10px", fontSize: "17px" }}
            dangerouslySetInnerHTML={{ __html: post.data.body }}
          ></div>
          <div>
            <h2>Summary</h2>
            <p>{post.data.summary}</p>
          </div>
        </div>
      )}
    </div>
  );
};
export default Post;
