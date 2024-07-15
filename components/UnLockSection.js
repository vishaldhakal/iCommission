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
            {/* <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-900 bg-gray-100 p-2 rounded-md leading-7">
              Join our waitlist today and get{" "}
              <span className="font-bold">$25 Amazon Gift Card</span> upon your
              first successful iCommission Advance!
            </p> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default UnLockSection;
