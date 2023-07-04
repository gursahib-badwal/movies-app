import { Link } from "react-router-dom";

export default function MovieCard(props) {
  return (
    <Link to={`/${props.id}`}>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          src={`https://image.tmdb.org/t/p/original${props.poster_path}`}
          alt=""
          className="w-full h-64 object-cover"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-black-500 text-xl mb-2 mt-2">
            {props.title}
          </div>
          <ul>
            <li>
              <strong>Votes: </strong>
              {props.vote_count}
            </li>
            <li>
              <strong>Rating: </strong>
              {props.vote_average}
            </li>
            <li>
              <strong>Release: </strong>
              {props.release_date}
            </li>
          </ul>
        </div>
        {/* <div className="px-6 py-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >
            #{tag}
          </span>
        ))}
      </div> */}
      </div>
    </Link>
  );
}
