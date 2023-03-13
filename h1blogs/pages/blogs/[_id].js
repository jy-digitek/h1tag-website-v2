import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Image } from "@chakra-ui/react";
import { getSinglePost } from "../redux/featured/actions";
import { useDispatch, useSelector } from "react-redux";
const Post = ({}) => {
  const router = useRouter();
  const { _id } = router.query;
  const post = useSelector((state) => state.post.data);

  const dispatch = useDispatch();

  useEffect(() => {
    if (_id) {
      dispatch(getSinglePost(_id));
    }
  }, [_id]);

  return (
    <div>
      {
        <>
          <h1>{post.title} title</h1>
          <p>{post.summary}summary</p>
          <Image src={`/${post.image}`} alt="Dan Abramov" />
          <div
            style={{ padding: "10px", fontSize: "17px", textAlign: "center" }}
            dangerouslySetInnerHTML={{ __html: post.body }}
          ></div>
        </>
      }
    </div>
  );
};
export default Post;
