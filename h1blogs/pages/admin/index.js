import Link from "next/link";
import LoginForm from "../../components/loginForm";
const index = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LoginForm />
        <div>dasdas</div>
      </div>
    </div>
  );
};

export default index;
