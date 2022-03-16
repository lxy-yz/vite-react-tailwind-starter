import useRouter from "../../hooks/use-router";

const Component = () => {
  const { params } = useRouter();
  return (
    <>
      <p>blog/$id.tsx: {params.id}</p>
    </>
  );
};

export default Component;
