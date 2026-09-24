
import Image from "next/image";

const Hero = () => {
  return (
    <section className="px-4 py-4 sm:px-6 md:px-8 lg:px-10">
      <div className="relative mx-auto flex min-h-[650px] max-w-7xl flex-col justify-between overflow-hidden rounded-3xl border border-gray-800 bg-[#15171c] px-6 py-10 sm:px-8 md:min-h-[520px] md:flex-row md:items-center md:px-10 lg:px-16">

        <div className="relative z-10 max-w-2xl">
          <p className="mb-4 text-xs font-bold tracking-[2px] text-lime-400 sm:mb-6 sm:text-sm">
            WORKOUT LIBRARY
          </p>

          <h1 className="max-w-2xl text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Train with intent. Log every set.
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-6 text-gray-400 sm:mt-7 sm:text-base sm:leading-7 md:text-lg">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <button className="mt-6 rounded-lg bg-lime-400 px-6 py-3 text-sm font-bold uppercase text-black transition duration-200 hover:bg-lime-300 sm:mt-8 sm:px-7 sm:py-4">
            Browse Workouts
          </button>
        </div>

        <div className="relative mx-auto mt-8 h-[300px] w-[280px] shrink-0 sm:h-[350px] sm:w-[330px] md:absolute md:bottom-0 md:right-2 md:mt-0 md:h-[400px] md:w-[380px] lg:right-10 lg:h-[480px] lg:w-[470px]">
          <Image
            src="/banner.png"
            alt="Workout"
            fill
            className="object-contain object-bottom"
            priority
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;

