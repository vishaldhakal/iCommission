function WhyUs() {
  return (
    <>
      <section class="py-12 bg-white sm:py-16 lg:20">
        <div class="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
          <div class="grid grid-cols-1 gap-y-12 lg:grid-cols-5 gap-x-16">
            <div class="lg:col-span-2">
              <h2 class="text-4xl font-bold text-black sm:text-6xl lg:text-7xl leading-loose">
                <div class="relative inline-flex">
                  <span class="absolute inset-x-0 bottom-0 border-b-[10px] border-[#f8ff2b]"></span>
                  <h2 class="relative text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                    Why us?
                  </h2>
                </div>
              </h2>
              <img
                class="w-24 rotate-90 sm:w-full sm:rotate-0"
                src="/arrow.png"
                alt=""
              />
            </div>

            <div class="space-y-5 lg:col-span-3">
              <div class="relative rounded-lg bg-dark-gray">
                <div class="py-8 pl-8 pr-12 lg:px-12 bg-white shadow-2xl rounded-md">
                  <div class="max-w-md">
                    <h3 class="font-sans text-2xl font-bold sm:text-3xl lg:text-4xl text-black">
                      Instant Payout
                    </h3>
                    <p class="mt-3 font-sans text-lg font-normal text-opacity-50 text-black">
                      No more waiting for weeks or months to get paid. With
                      iCommission, receive your commission instantly, reinvest
                      to capture more businesses, and enjoy the financial
                      freedom you deserve.
                    </p>
                  </div>
                </div>

                <div class="absolute z-10 right-8 md:right-24 -bottom-16 ">
                  <svg
                    class="w-6 h-auto text-neutral"
                    viewBox="0 0 24 92"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.9393 91.0607C11.5251 91.6464 12.4749 91.6464 13.0607 91.0607L22.6066 81.5147C23.1924 80.9289 23.1924 79.9792 22.6066 79.3934C22.0208 78.8076 21.0711 78.8076 20.4853 79.3934L12 87.8787L3.51472 79.3934C2.92894 78.8076 1.97919 78.8076 1.3934 79.3934C0.807615 79.9792 0.807615 80.9289 1.3934 81.5147L10.9393 91.0607ZM10.5 6.55671e-08L10.5 90L13.5 90L13.5 -6.55671e-08L10.5 6.55671e-08Z" />
                  </svg>
                </div>
              </div>

              <div class="relative rounded-lg bg-white shadow-2xl">
                <div class="py-8 pl-8 pr-12 lg:px-12">
                  <div class="max-w-md">
                    <h3 class="font-sans text-2xl font-bold sm:text-3xl lg:text-4xl text-black">
                      Competitive Rate
                    </h3>
                    <p class="mt-3 font-sans text-lg font-normal text-opacity-50 text-black">
                      We offer some of the most competitive rates in the
                      industry, ensuring you get maximum value for your money.
                      Our transparent pricing model means no hidden fees, no
                      reserve holdback, just straightforward service.
                    </p>
                  </div>
                </div>

                <div class="absolute z-10 right-8 md:right-24 -bottom-16">
                  <svg
                    class="w-6 h-auto text-neutral"
                    viewBox="0 0 24 92"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.9393 91.0607C11.5251 91.6464 12.4749 91.6464 13.0607 91.0607L22.6066 81.5147C23.1924 80.9289 23.1924 79.9792 22.6066 79.3934C22.0208 78.8076 21.0711 78.8076 20.4853 79.3934L12 87.8787L3.51472 79.3934C2.92894 78.8076 1.97919 78.8076 1.3934 79.3934C0.807615 79.9792 0.807615 80.9289 1.3934 81.5147L10.9393 91.0607ZM10.5 6.55671e-08L10.5 90L13.5 90L13.5 -6.55671e-08L10.5 6.55671e-08Z" />
                  </svg>
                </div>
              </div>

              <div class="relative bg-white shadow-2xl rounded-md">
                <div class="py-8 pl-8 pr-12 lg:px-12">
                  <div class="max-w-md">
                    <h3 class="font-sans text-2xl font-bold sm:text-3xl lg:text-4xl text-black">
                      Ultimate Convenience
                    </h3>
                    <p class="mt-3 font-sans text-lg font-normal text-opacity-50 text-black">
                      Our process is simple, fast, and hassle-free. Apply
                      online, get approved in minutes, and access your funds
                      without the wait. We prioritize your convenience so you
                      can focus on what you do best.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WhyUs;
