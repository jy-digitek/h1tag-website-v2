import LoginForm from "./Components/loginForm";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../redux/featured/actions";

const index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const { isLogin, userToken } = useSelector((state) => state.auth);
  console.log({ isLogin: isLogin, userToken: userToken });
  const onSubmitHandle = (e) => {
    e.preventDefault();
    //console.log(email, password);
    dispatch(userLogin({ email, password }));
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LoginForm
          setEmail={setEmail}
          setPassword={setPassword}
          onSubmitHandle={onSubmitHandle}
        />
        {/* <Button onClick={onSubmitHandle}> submit</Button> */}
      </div>
    </div>
  );
};

export default index;
