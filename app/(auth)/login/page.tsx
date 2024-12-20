import { LoginForm } from "@/app/components";
import "./styles.scss"

export default function Login() {
  return (
    <div className="login-page-wrapper">
      <div className="insert">
        <LoginForm />
      </div>
    </div>
  );
}
