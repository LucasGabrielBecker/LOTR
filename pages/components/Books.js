import Image from "next/image";

export default function Books({ data }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center">
      {data.books.map((book) => (
        <div key={book.id} className="p-2 m-2 max-w-max bg-light shadow-xl">
          <Image
            src={book.url}
            alt={book.name}
            width="220"
            height="332"
            layout="fixed"
            className="rounded"
          />
          <p className="text-lg font-black px-2 text-text">{book.name}</p>

          <div className="flex text-text justify-between px-2">
            <p>{book.launch}</p>

            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              <p>{book.pages}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
