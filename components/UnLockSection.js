import Link from "next/link";

function UnLockSection() {
  return (
    <>
      <section class="py-10 bg-white sm:py-16 lg:py-24">
        <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div class="max-w-2xl mx-auto text-center sm:text-center">
            <h2 class="text-3xl font-bold text-black sm:text-4xl lg:text-5xl">
              Unlock Your Earnings with iCommission Advance.
            </h2>
            <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600 mb-12">
              Have a firm deal but tired of waiting for your commission payouts?
              With iCommission, you can access your hard-earned money
              immediately! Here’s why you should choose our Commission Advance
              service.
            </p>
            <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-900 bg-gray-100 p-2 rounded-md leading-7">
              Join our waitlist today and get{" "}
              <span className="font-bold">$25 Amazon Gift Card</span> upon your
              first successful iCommission Advance!
            </p>
          </div>

          <form
            action="#"
            method="POST"
            class="max-w-xl mx-auto mt-12"
            id="why-us"
          >
            <div class="sm:p-2 sm:bg-white sm:border-2 sm:border-transparent sm:rounded-full ">
              <div class="flex items-start justify-center">
                <Link
                  href="https://form.typeform.com/to/O3Tv7VA6"
                  target="_blank"
                >
                  <button
                    type="submit"
                    class="inline-flex items-center justify-center w-auto px-4 py-4 mt-4 font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-full sm:ml-4 sm:mt-0 sm:w-auto hover:bg-blue-700 focus:bg-blue-700"
                  >
                    Join our waitlist
                    <svg
                      class="w-5 h-5 ml-3 -mr-1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default UnLockSection;
