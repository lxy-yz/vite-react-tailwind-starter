import routesConfig from "~react-pages";

export default function useRouter() {
  const location = useLocation();
  const params = useParams();
  const navigate = useNavigate();

  const routes = useRoutes(routesConfig);

  return useMemo(() => {
    return {
      Link,
      NavLink,
      Outlet,
      routes,
      navigate,
      params,
      location,
      searchParams: new URL(window.location.href).searchParams,
    };
  }, [params, location]);
}
