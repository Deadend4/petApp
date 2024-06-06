import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Loader from "src/components/Loader";
import useAuth from "src/hooks/useAuth";

const unAuthPaths = ["/sign-in", "/sign-up"];
const authPaths = ["/", ...unAuthPaths];

export default function AuthWrapper(): JSX.Element {
  const { status } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  switch (status) {
    case "authenticated":
      if (authPaths.includes(location.pathname)) {
        navigate("/home");
      }
      return <Outlet />;
    case "unauthenticated":
      if (!unAuthPaths.includes(location.pathname)) {
        navigate("/sign-in");
      }
      return <Outlet />;
    default:
      return <Loader />;
  }
}
