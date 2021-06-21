import Nav from "./components/Nav";
import data from "../utils/content.json";
import Image from "next/image";
function Movies() {
  const { movies } = data;

  function minutesToHourAndMinutes(timeInMinutes) {
    var hours = timeInMinutes / 60;
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return `${rhours}:${rminutes}`;
  }

  return (
    <div>
      <Nav />
      <div className="grid md:grid-cols-2 p-8 lg:grid-cols-4 justify-center">
        {movies.map((movie) => (
          <div
            key={movie._id}
            className="p-2 m-2 max-w-max bg-light shadow-xl group"
          >
            <Image
              alt={movie.name}
              width="220"
              height="332"
              src={movie.url}
              className="rounded group-hover:transform scale-105"
            />
            <p className="text-lg font-black px-2 text-text">{movie.name}</p>
            <div className="flex text-text justify-between px-2">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p>{minutesToHourAndMinutes(movie.runtimeInMinutes)}</p>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p>{movie.boxOfficeRevenueInMillions}M</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movies;
