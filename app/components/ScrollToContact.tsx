"use client";



const ScrollToContact = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      className="mx-auto mt-10 relative py-3 text-[15px] tracking-wider font-medium overflow-hidden rounded-lg bg-primary shadow-lg shadow-[#4F39F6]/30 text-white transition-all duration-300 group btn-primary flex items-center justify-center w-52 h-auto"
      onClick={() => scrollToSection("contact-me")}
    >
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
  );
};
export default ScrollToContact;
