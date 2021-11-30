import { useEffect, useState } from "react";

function useProjects() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("/project.data.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.log(err.code));
  }, []);
  return { projects };
}
export default useProjects;
