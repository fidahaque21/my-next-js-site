const Hero = () => {
  return (
    <section className="px-4 py-4 sm:px-6 md:px-8 lg:px-10">
      <div
        className="
          relative mx-auto flex max-w-7xl flex-col
          overflow-hidden rounded-3xl border border-gray-800 bg-[#15171c]
          px-5 py-8
          
          sm:px-8 sm:py-10
          
          md:min-h-[560px] md:flex-row md:items-center
          md:px-10 md:py-12
          
          lg:min-h-[600px] lg:px-14 lg:py-14
          
          xl:min-h-[650px] xl:px-16
        "
      >
        {/* Hero Content */}
        <div
          className="
            relative z-10 w-full max-w-2xl
            text-center
            sm:text-center
            md:text-left
          "
        >
          <p
            className="
              mb-4 text-xs font-bold tracking-[2px] text-lime-400
              sm:mb-5 sm:text-sm
              md:mb-6
            "
          >
            WORKOUT LIBRARY
          </p>

          <h1
            className="
              mx-auto max-w-2xl text-4xl font-black uppercase
              leading-[0.95] tracking-tight text-white
              
              sm:text-5xl
              
              md:mx-0 md:text-6xl
              
              lg:text-7xl
            "
          >
            Train with intent. Log every set.
          </h1>

          <p
            className="
              mx-auto mt-5 max-w-xl text-sm leading-6 text-gray-400
              
              sm:mt-6 sm:text-base sm:leading-7
              
              md:mx-0 md:mt-7 md:text-lg
            "
          >
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <button
            className="
              mt-6 rounded-lg bg-lime-400 px-6 py-3
              text-sm font-bold uppercase text-black
              transition duration-200 hover:bg-lime-300
              
              sm:mt-8 sm:px-7 sm:py-4
            "
          >
            Browse Workouts
          </button>
        </div>

        {/* Hero Image */}
        <div
          className="
    relative mx-auto mt-8 shrink-0
    h-[260px] w-[240px]

    sm:h-[350px] sm:w-[300px]

    md:absolute md:right-0 md:bottom-0
    md:mt-0 md:h-[420px] md:w-[400px]

    lg:right-4
    lg:h-[550px] lg:w-[540px]

    xl:right-0
    xl:h-[620px] xl:w-[600px]
  "
        >
          <img
            src="/banner.png"
            alt="Workout"
            className="h-full w-full object-contain object-bottom"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

