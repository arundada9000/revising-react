import { useLoaderData } from "react-router-dom";

const Github = () => {
  const data = useLoaderData();
  // const [data, setData] = useState({});
  // useEffect(() => {
  //   fetch("https://api.github.com/users/arundada9000")
  //     .then((response) => response.json())
  //     .then((data) => setData(data));
  // }, []);

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl flex flex-col items-center justify-center gap-2">
      <h1>Github Followers: {data.followers}</h1>
      <img src={data.avatar_url} alt="Arun Neupane" />
    </div>
  );
};

export default Github;
