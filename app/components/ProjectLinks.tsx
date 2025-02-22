import Link from "next/link";

const ProjectLinks = ({
  github,
  liveURL,
}: {
  github: string;
  liveURL: string;
}) => {
  return (
    <div className="flex gap-5 flex-row">
      <Link target="_blank" href={github}>
        <div className="cursor-pointer gap-4 ring-1 ring-slate-700/22 px-4 py-2 dark:ring-white rounded-lg  flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-github size-5"
          >
            <path d="M16 22v-2a4 4 0 0 0-1.1-2.9c3.7-.4 7.6-1.8 7.6-8A6 6 0 0 0 21 5.3a5.6 5.6 0 0 0-.1-3.8S19.7 1.3 16 3a14.3 14.3 0 0 0-8 0C4.3 1.3 3.1 1.5 3.1 1.5a5.6 5.6 0 0 0-.1 3.8A6 6 0 0 0 2.5 9c0 6.1 3.9 7.5 7.6 8A4 4 0 0 0 9 19.9V22"></path>
          </svg>
          <span>GitHub</span>
        </div>
      </Link>
      <Link href={liveURL} target="_blank">
        <div className="cursor-pointer gap-4 ring-1 ring-slate-700/22 px-5 py-2 dark:ring-white rounded-lg flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-external-link size-5"
          >
            <path d="M15 3h6v6"></path>
            <path d="M10 14 21 3"></path>
            <path d="M21 14v7H3V3h7"></path>
          </svg>
          <span>View</span>
        </div>
      </Link>
    </div>
  );
};
export default ProjectLinks;
