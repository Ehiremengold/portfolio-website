import Link from "next/link";
import ToggleTheme from "./ToggleTheme";

const FloatNav = () => {
  return (
    <div className="z-50 dark:ring-1 dark:ring-transparent dark:shadow-2xl fixed left-1/2 bottom-8 -translate-x-1/2  transition-all supports-backdrop-blur:bg-white/40 supports-backdrop-blur:dark:bg-black/40 mx-auto mt-8 flex px-4 py-1 w-max gap-1 rounded-2xl border-border shadow-md p-2 backdrop-blur-xl items-center">
      <div
        className="flex group aspect-square cursor-pointer items-center justify-center rounded-xl hover:ml-3 text-black transition-all dark:text-white"
        style={{ width: "50px" }}
      >
        <div className="absolute bg-slate-700 transition-all -top-12 text-white rounded-lg p-2 opacity-0 translate-y-20 pointer-events-none group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
          Home
        </div>
        <Link
          aria-label="Home"
          className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95 transition ease-out select-none size-10 rounded-xl"
          data-state="closed"
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
          >
            <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
            <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          </svg>
        </Link>
      </div>
      {/* <div
        className="flex group aspect-square cursor-pointer items-center justify-center rounded-xl hover:ml-3 text-black transition-all dark:text-white"
        style={{ width: "50px" }}
      >
        <div className="absolute bg-slate-700 transition-all -top-12 text-white rounded-lg p-2 opacity-0 translate-y-20 pointer-events-none group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
          Projects
        </div>
        <Link
          aria-label="Projects"
          className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95 transition ease-out select-none size-10 rounded-xl"
          data-state="closed"
          href="/projects"
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
            className="lucide lucide-briefcase size-6"
          >
            <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            <rect width="20" height="14" x="2" y="6" rx="2"></rect>
          </svg>
        </Link>
      </div> */}
      {/* <div
        className="flex aspect-square cursor-pointer items-center justify-center rounded-xl hover:bg-primary hover:ml-3 hover:text-white transition-all"
        style={{ width: "40px" }}
      >
        <Link
          aria-label="Blog"
          className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95 transition ease-out select-none hover:bg-accent hover:text-accent-foreground size-10 rounded-xl"
          data-state="closed"
          href="/blog"
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
            className="lucide lucide-notebook size-6"
          >
            <path d="M2 6h4"></path>
            <path d="M2 10h4"></path>
            <path d="M2 14h4"></path>
            <path d="M2 18h4"></path>
            <rect width="16" height="20" x="4" y="2" rx="2"></rect>
            <path d="M16 2v20"></path>
          </svg>
        </Link>
      </div> */}
      <div
        data-orientation="vertical"
        role="none"
        className="shrink-0 bg-gray-900 w-[1px] h-full"
      ></div>
      <div
        className="flex group aspect-square cursor-pointer items-center justify-center rounded-xl hover:ml-3 text-black transition-all dark:text-white"
        style={{ width: "50px" }}
      >
        <div className="absolute bg-slate-700 transition-all -top-12 text-white rounded-lg p-2 opacity-0 translate-y-20 pointer-events-none group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
          GitHub
        </div>
        <Link
          target="_blank"
          aria-label="GitHub"
          className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95 transition ease-out select-none size-12 rounded-xl"
          data-state="closed"
          href="https://github.com/Ehiremengold"
        >
          <svg
            className="size-6"
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
          </svg>
        </Link>
      </div>
      <div
        className="flex group aspect-square cursor-pointer items-center justify-center rounded-xl hover:ml-3 text-black transition-all dark:text-white"
        style={{ width: "50px" }}
      >
        <div className="absolute bg-slate-700 transition-all -top-12 text-white rounded-lg p-2 opacity-0 translate-y-20 pointer-events-none group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
          LinkedIn
        </div>
        <Link
          target="_blank"
          aria-label="LinkedIn"
          className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95 transition ease-out select-none size-12 rounded-xl"
          data-state="closed"
          href="https://www.linkedin.com/in/ehiremen-ibhafidon-456661175/"
        >
          <svg
            className="size-6"
            fill="currentColor"
            viewBox="0 0 1920 1920"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M1168 601.321v74.955c72.312-44.925 155.796-71.11 282.643-71.11 412.852 0 465.705 308.588 465.705 577.417v733.213L1438.991 1920v-701.261c0-117.718-42.162-140.06-120.12-140.06-74.114 0-120.12 23.423-120.12 140.06V1920l-483.604-4.204V601.32H1168Zm-687.52-.792v1318.918H0V600.53h480.48Zm-120.12 120.12H120.12v1078.678h240.24V720.65Zm687.52.792H835.267v1075.316l243.364 2.162v-580.18c0-226.427 150.51-260.18 240.24-260.18 109.55 0 240.24 45.165 240.24 260.18v580.18l237.117-2.162v-614.174c0-333.334-93.573-457.298-345.585-457.298-151.472 0-217.057 44.925-281.322 98.98l-16.696 14.173H1047.88V721.441ZM240.24 0c132.493 0 240.24 107.748 240.24 240.24 0 132.493-107.747 240.24-240.24 240.24C107.748 480.48 0 372.733 0 240.24 0 107.748 107.748 0 240.24 0Zm0 120.12c-66.186 0-120.12 53.934-120.12 120.12s53.934 120.12 120.12 120.12 120.12-53.934 120.12-120.12-53.934-120.12-120.12-120.12Z"
                fillRule="evenodd"
              ></path>{" "}
            </g>
          </svg>
        </Link>
      </div>
      {/* <div
        className="flex aspect-square cursor-pointer items-center justify-center rounded-xl hover:bg-primary hover:ml-3 hover:text-white transition-all"
        style={{ width: "40px" }}
      >
        <Link
          target="_blank"
          aria-label="YouTube"
          className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95 transition ease-out select-none hover:bg-accent hover:text-accent-foreground size-12 rounded-xl"
          data-state="closed"
          href="https://www.youtube.com/channel/UCrqsZYcbNVO2F8FS-xIIiZg"
        >
          <svg
            className="size-4"
            width="20"
            height="16"
            viewBox="0 0 20 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 4.5L14 8L8 11.5V4.5Z" fill="currentColor"></path>
            <path
              d="M10 1C19 1 19 1 19 8C19 15 19 15 10 15C1 15 1 15 1 8C1 1 1 1 10 1Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </Link>
      </div> */}
      <div
        className="relative group flex aspect-square cursor-pointer items-center justify-center rounded-xl hover:ml-3 text-black transition-all dark:text-white"
        style={{ width: "50px" }}
      >
        <div className="absolute bg-slate-700 transition-all -top-12 text-white rounded-lg p-2 opacity-0 translate-y-20 pointer-events-none group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
          Resume
        </div>
        <Link
          target="_blank"
          aria-label="Resume"
          className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95 transition ease-out select-none size-12 rounded-xl"
          data-state="closed"
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
          >
            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
            <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
            <path d="M10 9H8"></path>
            <path d="M16 13H8"></path>
            <path d="M16 17H8"></path>
          </svg>
        </Link>
      </div>
      {/* <div
        className="flex aspect-square cursor-pointer items-center justify-center rounded-full md:!hidden md:w-0"
        style={{ width: "40px" }}
      >
        <Link
          target="_blank"
          aria-label="Buy me a coffee"
          className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95 transition ease-out select-none hover:bg-accent hover:text-accent-foreground size-12 rounded-xl"
          data-state="closed"
          href="https://www.buymeacoffee.com/shreyas29"
        >
          <svg
            className="size-4"
            width="18"
            height="24"
            viewBox="0 0 18 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.2151 6.41499L17.0831 5.74899C16.9641 5.15099 16.6951 4.58599 16.0821 4.36999C15.8851 4.30099 15.6621 4.27199 15.5121 4.12899C15.3601 3.98599 15.3161 3.76299 15.2811 3.55699C15.2161 3.17899 15.1561 2.80099 15.0891 2.42399C15.0321 2.09899 14.9871 1.73399 14.8391 1.43699C14.6441 1.03699 14.2421 0.802987 13.8431 0.648987C13.6381 0.572964 13.4291 0.508201 13.2171 0.454987C12.2171 0.191987 11.1671 0.0949868 10.1401 0.0389868C8.90684 -0.0282529 7.67037 -0.00753373 6.44008 0.100987C5.52508 0.183987 4.56008 0.284987 3.69008 0.600987C3.37208 0.716987 3.04408 0.856987 2.80208 1.10199C2.50508 1.40399 2.40908 1.87199 2.62508 2.24799C2.77908 2.51499 3.04008 2.70399 3.31708 2.82799C3.67708 2.98999 4.05408 3.11199 4.44008 3.19399C5.51508 3.43199 6.62908 3.52499 7.72708 3.56399C8.94641 3.61332 10.1631 3.57399 11.3771 3.44599C11.6764 3.41265 11.9751 3.37299 12.2731 3.32699C12.6251 3.27299 12.8511 2.81399 12.7471 2.49299C12.6231 2.10999 12.2901 1.96199 11.9131 2.01999C11.4471 2.09399 10.9531 2.12799 10.5311 2.16599C9.35308 2.24599 8.17441 2.24799 6.99508 2.17199C6.60853 2.14651 6.22273 2.11083 5.83808 2.06499C5.75208 2.05499 5.65808 2.03999 5.58008 2.02899C5.33741 1.99232 5.09608 1.94899 4.85608 1.89899C4.74508 1.87199 4.74508 1.71399 4.85608 1.68699H4.86108C5.13841 1.62699 5.41774 1.57799 5.69908 1.53999H5.70108C5.83208 1.53099 5.96408 1.50799 6.09508 1.49199C7.23298 1.37364 8.37768 1.33355 9.52108 1.37199C10.1951 1.39132 10.8674 1.43932 11.5381 1.51599L11.7661 1.54699C12.0327 1.58699 12.2987 1.63532 12.5641 1.69199C12.9561 1.77699 13.4591 1.80499 13.6341 2.23399C13.6891 2.37099 13.7141 2.52199 13.7451 2.66499L14.0641 4.14899C14.0708 4.18081 14.071 4.21368 14.0645 4.24555C14.058 4.27743 14.045 4.30763 14.0264 4.33427C14.0077 4.36091 13.9837 4.38343 13.956 4.40041C13.9282 4.41739 13.8973 4.42848 13.8651 4.43299H13.8621L13.7501 4.44799C12.177 4.64785 10.5928 4.74639 9.00708 4.74299C7.43588 4.74153 5.86637 4.63999 4.30808 4.43899C4.16808 4.42199 4.01508 4.39699 3.89108 4.37899C3.56508 4.33099 3.24208 4.27099 2.91808 4.21799C2.52508 4.15299 2.15008 4.18599 1.79508 4.37899C1.50508 4.53899 1.26808 4.78299 1.12008 5.07999C0.966076 5.39599 0.921076 5.73999 0.853076 6.07999C0.784076 6.41999 0.677076 6.78699 0.718076 7.13599C0.805076 7.88899 1.33108 8.50099 2.08808 8.63799C5.83156 9.30591 9.65158 9.43254 13.4311 9.01399C13.5029 9.00582 13.5756 9.01386 13.6439 9.03753C13.7122 9.06121 13.7743 9.0999 13.8256 9.15076C13.8769 9.20162 13.9162 9.26335 13.9405 9.33141C13.9648 9.39946 13.9736 9.47211 13.9661 9.54399L13.8951 10.241L12.8771 20.148C12.8361 20.558 12.8301 20.98 12.7521 21.385C12.6301 22.022 12.1991 22.413 11.5701 22.556C10.9914 22.6873 10.4061 22.7557 9.81408 22.761C9.15808 22.765 8.50408 22.736 7.84808 22.739C7.14908 22.743 6.29208 22.679 5.75308 22.159C5.27808 21.701 5.21308 20.985 5.14808 20.366L4.41708 13.353L4.09508 10.259C4.05808 9.90799 3.80908 9.56399 3.41708 9.58099C3.08108 9.59599 2.69908 9.88099 2.73908 10.26L2.96708 12.445L3.91608 21.557C4.06308 22.901 5.09008 23.625 6.36208 23.829C7.10408 23.949 7.86508 23.973 8.61908 23.985C9.58508 24.001 10.5611 24.038 11.5111 23.863C12.9191 23.605 13.9761 22.665 14.1271 21.206L15.1511 11.211L15.3661 9.12399C15.376 9.02027 15.4195 8.92262 15.4898 8.84577C15.5602 8.76892 15.6536 8.71705 15.7561 8.69799C16.1581 8.61999 16.5431 8.48599 16.8301 8.17999C17.2851 7.69199 17.3761 7.05699 17.2151 6.41499ZM15.7371 7.18699C15.5921 7.32399 15.3741 7.38799 15.1591 7.41999C12.7431 7.77899 10.2931 7.95999 7.85108 7.87999C6.10308 7.81999 4.37408 7.62599 2.64408 7.38199C2.47408 7.35799 2.29108 7.32699 2.17408 7.20199C1.95408 6.96599 2.06308 6.49199 2.12008 6.20699C2.17208 5.94699 2.27208 5.59799 2.58308 5.56099C3.06708 5.50399 3.62908 5.70899 4.10908 5.78099C4.68574 5.86899 5.26474 5.93965 5.84608 5.99299C8.32608 6.21899 10.8481 6.18299 13.3181 5.85299C13.7681 5.79299 14.2164 5.72299 14.6631 5.64299C15.0621 5.57099 15.5031 5.43699 15.7431 5.84899C15.9091 6.12999 15.9311 6.50599 15.9051 6.82299C15.8976 6.96152 15.8371 7.09187 15.7361 7.18699H15.7371ZM9.57808 11.087C8.71608 11.457 7.73808 11.875 6.46908 11.875C5.93878 11.8723 5.41119 11.7993 4.90008 11.658L5.77708 20.662C5.84208 21.442 6.49408 22.042 7.27708 22.042C7.27708 22.042 8.52008 22.107 8.93508 22.107C9.38208 22.107 10.7211 22.042 10.7211 22.042C11.5041 22.042 12.1551 21.442 12.2201 20.662L13.1601 10.712C12.736 10.5587 12.289 10.4782 11.8381 10.474C11.0121 10.474 10.3471 10.758 9.57808 11.087Z"
              fill="currentColor"
            ></path>
          </svg>
        </Link>
      </div> */}

      <ToggleTheme />
    </div>
  );
};
export default FloatNav;
