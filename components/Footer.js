import Link from "next/link";

function Footer() {
  return (
    <>
      <section class="py-10 bg-white sm:pt-16 lg:pt-24">
        <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-y-12 gap-x-8 xl:gap-x-12">
            <div class="col-span-6 md:col-span-6 xl:pr-8">
              <img class="w-auto h-24" src="/logo.png" alt="" />

              <p class="text-base leading-relaxed text-gray-600 mt-7">
                Have a firm deal but tired of waiting for your commission
                payouts? With iCommission, you can access your hard-earned money
                immediately! Here’s why you should choose our Commission Advance
                service.
              </p>

              <Link
                href="https://form.typeform.com/to/O3Tv7VA6"
                target="_blank"
                title=""
                class="inline-flex items-center justify-center px-6 py-4 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700 mt-7"
              >
                Join our waitlist
              </Link>
            </div>

            <div class="col-span-6 lg:col-span-3">
              <p class="text-base font-semibold text-gray-900">Useful Links</p>

              <ul class="mt-6 space-y-5">
                <li>
                  <Link
                    href="#"
                    title=""
                    class="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"
                  >
                    {" "}
                    Why us{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    href="/#contact"
                    title=""
                    class="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"
                  >
                    {" "}
                    FAQ{" "}
                  </Link>
                </li>
              </ul>
            </div>

            <div class="col-span-6 lg:col-span-3">
              <p class="text-base font-semibold text-gray-900">Company</p>

              <p className="mt-6">
                <span className="font-bold">Our Address</span>
                <br />
                #103 - 8 Prologis Blvd Mississauga ON L5W 1N3
                <br />
                <br />
                <span className="font-bold">Our Email</span>
                <br />
                info@icommission.ca
              </p>
            </div>
          </div>

          <hr class="mt-16 mb-10 border-gray-200" />

          <div class="sm:flex sm:items-center sm:justify-center">
            <p class="text-sm text-gray-600">
              © Copyright 2024, All Rights Reserved by iCommission
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
