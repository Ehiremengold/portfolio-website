import profile from "../../public/profile.jpg";
import { AvatarImage, Avatar, AvatarFallback } from "../components/ui/avatar";
import * as motion from "motion/react-client";
import { NumberTicker } from "../components/number-ticker";
import { AnimatedGradientText } from "../components/animated-gradient-text";
import { cn } from "@/lib/utils";
import ScrollToContact from "../components/ScrollToContact";

const Hero = () => {
  return (
    <section className="bg-white  dark:bg-slate-950 font-poppins">
      <div className="relative isolate px-2 pt-14 lg:px-10">
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
            <AvatarFallback className="h-25 w-25 rounded-full bg-slate-600"></AvatarFallback>
          </Avatar>

          <div className="w-fit group relative mx-auto flex items-center justify-center rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f] ">
            <span
              className={cn(
                "absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:300%_100%] p-[1px]"
              )}
              style={{
                WebkitMask:
                  "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "destination-out",
                mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                maskComposite: "subtract",
                WebkitClipPath: "padding-box",
              }}
            />
            🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-neutral-500" />
            <AnimatedGradientText className="text-sm font-medium">
              Hey you, Welcome
            </AnimatedGradientText>
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
            <h1 className="md:text-6xl/normal sm:text-4xl/normal text-3xl/normal dark:text-white font-semibold text-gray-900">
              Bringing ideas to life, one&nbsp;
              <span className="text-primary">pixel</span> at a time.
            </h1>
            {/* <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl">
              Ship <AuroraText>beautiful</AuroraText>
            </h1> */}
            <p className="dark:text-white subtle-text text-black !mt-6">
              Hey there! I’m a front-end developer who loves turning creative
              ideas into vibrant, user-friendly websites. If you’re ready to
              make a real splash online, let’s team up and bring your vision to
              life.
            </p>

            <ScrollToContact />
            
          </motion.div>
        </div>

        <div className="container gap-6 pl-2 pr-2 lg:pl-0 lg:pr-0 flex flex-col md:flex-row justify-center md:items-stretch items-center">
          <motion.div
            className="shadow-xl px-10 py-7 w-[234px] flex-1 rounded-xl flex flex-col gap-5 justify-center items-center text-black dark:text-white dark:bg-[#1B1631] dark:shadow-2xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
          >
            <span className="text-4xl sm:text-5xl font-semibold text-center flex gap-1 items-center">
              <NumberTicker value={15} />+
            </span>
            <p className="subtle-text !text-base lg:!text-xl dark:text-white text-center line-clamp-2">
              Products from Idea to Launch
            </p>
          </motion.div>
          <motion.div
            className="shadow-xl px-10 py-7 w-[234px] flex-1 rounded-xl flex flex-col gap-5 justify-center items-center text-black dark:text-white dark:bg-[#1B1631] dark:shadow-2xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.4,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
          >
            <span className="text-4xl sm:text-5xl font-semibold text-center flex gap-1 items-center">
              <NumberTicker value={4} />+
            </span>
            <p className="subtle-text !text-base lg:!text-xl dark:text-white text-center line-clamp-2">
              Years of Experience
            </p>
          </motion.div>
          <motion.div
            className="shadow-xl px-10 py-7 w-[234px] flex-1 rounded-xl flex flex-col gap-5 justify-center items-center text-black dark:text-white dark:bg-[#1B1631] dark:shadow-2xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.6,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
          >
            <span className="text-4xl sm:text-5xl font-semibold text-center flex gap-1 items-center">
              <NumberTicker value={8} />+
            </span>
            <p className="subtle-text !text-base lg:!text-xl dark:text-white text-center">
              Satisfied Brands
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
