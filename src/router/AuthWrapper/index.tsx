import { Outlet, useNavigate, useLocation } from "react-router-dom";
import useAuth from "src/hooks/useAuth";

const unAuthPaths = ["/", "/sign-in", "/sign-up"];

export default function AuthWrapper(): JSX.Element {
  const { status } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  switch (status) {
    case "authenticated":
      if (unAuthPaths.includes(location.pathname)) {
        navigate("/home");
      }
      return <Outlet />;
    case "unauthenticated":
      navigate("/sign-in");
      return <h1>Loading...</h1>;
    default:
      return <h1>Loading...</h1>;
  }
}
