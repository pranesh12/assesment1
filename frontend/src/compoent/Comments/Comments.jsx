import { useQuery } from "@tanstack/react-query";

const Comments = () => {
  const { data, isFetching } = useQuery({
    queryKey: ["comments"],
    queryFn: () =>
      fetch("http://localhost:5000/comment").then((res) => res.json()),
    staleTime: Infinity,
  });

  return (
    <div>
      <div>
        {isFetching && <h1>Loading</h1>}
        {data &&
          data.map((comment) => (
            <div key={comment.blogId} className="card mt-5 mb-5">
              <div className="card-body">
                <h5 className="card-text">Email: {comment.email}</h5>
                <p className="card-text">Name: {comment.name}</p>
                <p className="card-text">{comment.body}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Comments;
