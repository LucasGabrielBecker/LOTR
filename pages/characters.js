import Nav from "./components/Nav";
import data from "../utils/content.json";
import Image from "next/image";
import Link from "next/link";
function Movies() {
  const { characters } = data;

  return (
    <div>
      <Nav />
      <div className="grid md:grid-cols-2 p-8 lg:grid-cols-5 justify-center">
        {characters.map((character) => (
          <div
            key={character.id}
            className="px-2 py-5 m-2 max-w-max bg-light shadow-xl"
          >
            {character.image && (
              <Image
                alt={character.name}
                width="220"
                height="332"
                src={character.image}
                layout="fixed"
                className="rounded"
              />
            )}
            <Link href={character.wikiUrl || ""} passHref>
              <p className="text-lg font-black px-2 text-text cursor-pointer">
                {character.name}
              </p>
            </Link>
            <div className="flex text-text justify-between px-2">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1 text-textSecondary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                  />
                </svg>{" "}
                <p className="text-textSecondary">{character.race}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movies;
