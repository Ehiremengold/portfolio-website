import Link from "next/link";
import ToggleTheme from "./ToggleTheme";

const FloatNav = () => {
  return (
    <div className="h-[60px] fixed z-50 bottom-8 left-1/2 -translate-x-1/2 mx-auto mt-8 flex w-max gap-1 rounded-2xl border border-border p-2 shadow-md backdrop-blur-xl dark:ring-1 dark:ring-transparent dark:shadow-2xl supports-backdrop-blur:bg-white/40 supports-backdrop-blur:dark:bg-black/40 items-center">
      <div className="flex group aspect-square cursor-pointer items-center justify-center rounded-xl text-black transition-all dark:text-white w-[50px] hover:ml-3">
        <div
          id="home-tooltip"
          role="tooltip"
          className="absolute -top-12 whitespace-nowrap bg-slate-700 text-white rounded-lg p-2 opacity-0 translate-y-20 pointer-events-none group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 transition-all"
        >
          Home
        </div>
        <Link
          aria-label="Home"
          className="inline-flex items-center justify-center text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95 transition ease-out select-none size-10 rounded-xl"
          href="/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-house size-6"
            aria-hidden="true"
          >
            <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
            <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          </svg>
        </Link>
      </div>
      <div className="flex group aspect-square cursor-pointer items-center justify-center rounded-xl text-black transition-all dark:text-white w-[50px] hover:ml-3">
        <div
          id="github-tooltip"
          role="tooltip"
          className="absolute -top-12 whitespace-nowrap bg-slate-700 text-white rounded-lg p-2 opacity-0 translate-y-20 pointer-events-none group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 transition-all"
        >
          GitHub
        </div>
        <Link
          target="_blank"
          aria-label="GitHub"
          className="inline-flex items-center justify-center text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95 transition ease-out select-none size-12 rounded-xl"
          href="https://github.com/Ehiremengold"
        >
          <svg
            className="size-6"
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
          </svg>
        </Link>
      </div>
      <div className="flex group aspect-square cursor-pointer items-center justify-center rounded-xl text-black transition-all dark:text-white w-[50px] hover:ml-3">
        <div
          id="linkedin-tooltip"
          role="tooltip"
          className="absolute -top-12 whitespace-nowrap bg-slate-700 text-white rounded-lg p-2 opacity-0 translate-y-20 pointer-events-none group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 transition-all"
        >
          LinkedIn
        </div>
        <Link
          target="_blank"
          aria-label="LinkedIn"
          className="inline-flex items-center justify-center text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95 transition ease-out select-none size-12 rounded-xl"
          href="https://www.linkedin.com/in/ehiremen-ibhafidon-456661175/"
        >
          <svg
            className="size-6"
            fill="currentColor"
            viewBox="0 0 1920 1920"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M1168 601.321v74.955c72.312-44.925 155.796-71.11 282.643-71.11 412.852 0 465.705 308.588 465.705 577.417v733.213L1438.991 1920v-701.261c0-117.718-42.162-140.06-120.12-140.06-74.114 0-120.12 23.423-120.12 140.06V1920l-483.604-4.204V601.32H1168Zm-687.52-.792v1318.918H0V600.53h480.48Zm-120.12 120.12H120.12v1078.678h240.24V720.65Zm687.52.792H835.267v1075.316l243.364 2.162v-580.18c0-226.427 150.51-260.18 240.24-260.18 109.55 0 240.24 45.165 240.24 260.18v580.18l237.117-2.162v-614.174c0-333.334-93.573-457.298-345.585-457.298-151.472 0-217.057 44.925-281.322 98.98l-16.696 14.173H1047.88V721.441ZM240.24 0c132.493 0 240.24 107.748 240.24 240.24 0 132.493-107.747 240.24-240.24 240.24C107.748 480.48 0 372.733 0 240.24 0 107.748 107.748 0 240.24 0Zm0 120.12c-66.186 0-120.12 53.934-120.12 120.12s53.934 120.12 120.12 120.12 120.12-53.934 120.12-120.12-53.934-120.12-120.12-120.12Z"
              fillRule="evenodd"
            ></path>
          </svg>
        </Link>
      </div>
      <div className="relative group flex aspect-square cursor-pointer items-center justify-center rounded-xl text-black transition-all dark:text-white w-[50px] hover:ml-3">
        <div
          id="resume-tooltip"
          role="tooltip"
          className="absolute -top-12 whitespace-nowrap bg-slate-700 text-white rounded-lg p-2 opacity-0 translate-y-20 pointer-events-none group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 transition-all"
        >
          Resume
        </div>
        <Link
          target="_blank"
          aria-label="Resume"
          className="inline-flex items-center justify-center text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95 transition ease-out select-none size-12 rounded-xl"
          href="/me.pdf"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-file-text size-6"
            aria-hidden="true"
          >
            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
            <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
            <path d="M10 9H8"></path>
            <path d="M16 13H8"></path>
            <path d="M16 17H8"></path>
          </svg>
        </Link>
      </div>
      <div className="border-l-black dark:border-l-white border h-full"></div>
      <ToggleTheme />
    </div>
  );
};

export default FloatNav;
