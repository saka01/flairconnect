import AuthButton from "../components/Buttons/AuthButton";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

export default function Home({ isAuthenticated }) {
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    router.push("/auth/login");
  }

  const handleRegister = (e) => {
    e.preventDefault();
    router.push("/auth/signup");
  }
  const handleLogout = (e) => {
    e.preventDefault();
    Cookies.remove("token"); // Ensure you specify the correct path if it was set on the cookie

    router.push("/auth/login");
  }
  return (
    <main>
      <h1>Welcome to HutsyConnect!</h1>
      <AuthButton
        style={{ padding: "2em", marginLeft: "2em" }}
        onClick={handleLogin}
        size="Large"
      >
        LOGIN
      </AuthButton>
      <AuthButton
        style={{ padding: "2em", marginLeft: "2em" }}
        onClick={handleRegister}
        size="Large"
      >
        REGISTER
      </AuthButton>
      <br />
      {isAuthenticated && (
        <AuthButton
          style={{ padding: "1em", marginLeft: "2em" }}
          color="secondary"
          onClick={handleLogout}
          size="Large"
        >
          LOGOUT
        </AuthButton>
      )}
    </main>
  );
}
export async function getServerSideProps({ req }) {
  const token = req.cookies.token; 
  let isAuthenticated = false;

  isAuthenticated = !!token; 

  return {
    props: { isAuthenticated },
  };
}