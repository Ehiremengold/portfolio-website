import profile from "../../public/profile.jpg";
import { AvatarImage, Avatar, AvatarFallback } from "../components/ui/avatar";
import * as motion from "motion/react-client";

const Hero = () => {
  return (
    <section className="bg-white  dark:bg-slate-950 font-poppins">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        {/* Background Shape - Top */}
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-pink-400 to-indigo-400 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>

        {/* Main Content */}
        <div className="mx-auto max-w-4xl py-20 sm:py-30 lg:py-45">
          <Avatar className="w-24 h-24 mx-auto mb-5">
            <AvatarImage
              src={profile.src}
              className="object-cover"
              height={100}
              width={100}
            />
            <AvatarFallback>profile picture</AvatarFallback>
          </Avatar>

          <div className="hidden sm:mb-5 sm:flex sm:justify-center">
            <div className="flex items-center justify-center gap-3 rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/30 dark:ring-white hover:ring-gray-900/20">
              <span className="animate-wave text-2xl">👋</span>
              <p className="dark:text-white text-black">Hey you, Welcome!</p>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="text-center"
          >
            <h1 className="sm:text-6xl/normal text-2xl/normal dark:text-white font-semibold text-gray-900">
              Building <span className="text-primary">Digital</span> Solutions.
            </h1>
            <p className="dark:text-white subtle-text text-black !mt-6">
              Expert web development and design services. From sleek websites
              and e-commerce platforms to custom web applications, I provide
              end-to-end solutions to elevate your business online.
            </p>

            <button className="mx-auto mt-10 relative py-3 text-[15px] tracking-wider font-medium overflow-hidden rounded-lg bg-primary shadow-lg shadow-[#4F39F6]/30 text-white transition-all duration-300 group btn-primary flex items-center justify-center w-52 h-auto">
              <span className="relative z-10 font-medium font-heading">
                Let&apos;s Work Together
              </span>
              <span className="flex items-center justify-center scale-x-0 group-hover:scale-x-100 transition-all duration-300 size-0 group-hover:size-5 ml-1">
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
                  className="lucide lucide-chevron-right size-5"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </span>
              <div className="absolute inset-y-0 -left-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-500 ease-in-out group-hover:translate-x-[200%] group-hover:duration-1000"></div>
            </button>
          </motion.div>
        </div>

        <div className="gap-9 mx-auto flex flex-col sm:flex-row justify-center items-center">
          <motion.div
            className="shadow-xl px-10 py-7 w-[234px] rounded-xl flex flex-col gap-5 justify-center items-center text-black dark:text-white dark:bg-[#1B1631] dark:shadow-2xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
          >
            <h1 className="text-4xl sm:text-5xl font-semibold text-center">
              15+
            </h1>
            <p className="subtle-text !text-xl whitespace-nowrap dark:text-white">
              Clean UIs
            </p>
          </motion.div>
          <motion.div
            className="shadow-xl px-10 py-7 w-[234px] rounded-xl flex flex-col gap-5 text-black dark:bg-[#1B1631]"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.4,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
          >
            <h1 className="text-4xl sm:text-5xl font-semibold text-center dark:text-white">
              4+
            </h1>
            <p className="subtle-text !text-xl text-center dark:text-white">
              Years of Experience
            </p>
          </motion.div>
          <motion.div
            className="shadow-xl px-10 py-7 w-[234px] rounded-xl flex flex-col gap-5 text-black dark:bg-[#1B1631]"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.6,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
          >
            <h1 className="text-4xl sm:text-5xl font-semibold text-center dark:text-white">
              8+
            </h1>
            <p className="subtle-text !text-xl whitespace-nowrap dark:text-white">
              Satisfied clients
            </p>
          </motion.div>
        </div>

        {/* Background Shape - Bottom */}
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-pink-400 to-indigo-400 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
