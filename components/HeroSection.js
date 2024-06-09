function HeroSection() {
  return (
    <>
      <div class="bg-gradient-to-b from-blue-50 to-blue-100">
        <section class="py-10 sm:py-16 lg:pt-12 lg:pb-24">
          <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <h1 class="text-4xl font-bold text-black sm:text-6xl lg:text-7xl leading-loose">
                  <div class="relative inline-flex">
                    <span class="absolute inset-x-0 bottom-0 border-b-[10px] border-[#f8ff2b]"></span>
                    <h1 class="relative text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                      Why wait?
                    </h1>
                  </div>
                </h1>
                <h2 className="text-4xl font-bold text-black sm:text-6xl lg:text-4xl leading-loose mt-2">
                  When you can get paid instantly
                </h2>

                <p class="mt-2 mb-6 text-base text-black">
                  Providing Access to Commissions Whenever Agents Need
                </p>

                <section className="w-[75%]">
                  <div class="relative pt-3">
                    <span
                      class="absolute w-px h-full -ml-px bg-gray-200 top-8 left-12"
                      aria-hidden="true"
                    ></span>

                    <div class="relative p-1 overflow-hidden bg-white border border-gray-200 rounded-2xl">
                      <div class="flex items-start sm:items-center">
                        <div class="inline-flex items-center justify-center flex-shrink-0 text-md font-bold text-white bg-gray-900 w-14 h-14 rounded-xl font-pj">
                          1
                        </div>
                        <p class="ml-6 text-md font-medium text-gray-900 font-pj">
                          Reinvest in Your Business
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="relative pt-3">
                    <span
                      class="absolute w-px h-full -ml-px bg-gray-200 top-8 left-12"
                      aria-hidden="true"
                    ></span>

                    <div class="relative p-1 overflow-hidden bg-white border border-gray-200 rounded-2xl">
                      <div class="flex items-start sm:items-center">
                        <div class="inline-flex items-center justify-center flex-shrink-0 text-md font-bold text-white bg-gray-900 w-14 h-14 rounded-xl font-pj">
                          2
                        </div>
                        <p class="ml-6 text-md font-medium text-gray-900 font-pj">
                          Maintain Financial Stability
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="relative pt-3">
                    <span
                      class="absolute w-px h-full -ml-px bg-gray-200 top-8 left-12"
                      aria-hidden="true"
                    ></span>

                    <div class="relative p-1 overflow-hidden bg-white border border-gray-200 rounded-2xl">
                      <div class="flex items-start sm:items-center">
                        <div class="inline-flex items-center justify-center flex-shrink-0 text-md font-bold text-white bg-gray-900 w-14 h-14 rounded-xl font-pj">
                          3
                        </div>
                        <p class="ml-6 text-md font-medium text-gray-900 font-pj">
                          Expand Your Opportunities
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <div class="mt-10 sm:flex sm:items-center sm:space-x-8">
                  <a
                    href="#"
                    title=""
                    class="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-700 hover:bg-blue-600 focus:bg-blue-600"
                    role="button"
                  >
                    {" "}
                    Get Started Now{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-arrow-right ms-3"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                      />
                    </svg>
                  </a>

                  <a
                    href="#"
                    title=""
                    class="inline-flex items-center mt-6 text-base font-semibold transition-all duration-200 sm:mt-0 hover:opacity-80"
                  >
                    <svg
                      class="w-10 h-10 mr-3"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        fill="#F97316"
                        stroke="#F97316"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Watch video
                  </a>
                </div>
              </div>

              <div>
                <img class="w-full" src="/heroimg.png" alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default HeroSection;
