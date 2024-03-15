import AuthButton from "../components/Buttons/AuthButton";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    router.push("/auth/login");
  }

  const handleRegister = (e) => {
    e.preventDefault();
    router.push("/auth/signup");

  }
  return (
    <main>
      <h1>Welcome to HutsyConnect!</h1>
      <AuthButton style={{ padding: "4em" }} onClick={handleLogin} size="Large">
        LOGIN
      </AuthButton>
      <br />
      <AuthButton
        style={{ padding: "4em" }}
        onClick={handleRegister}
        size="Large"
      >
        REGISTER
      </AuthButton>
    </main>
  );
}
