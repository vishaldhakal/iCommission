import Head from "next/head";

export default function Privacy() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Privacy Policy</title>
        <meta name="description" content="Our commitment to your privacy" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Privacy Policy</h1>

        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">
            Our Commitment to Privacy
          </h2>
          <p className="mb-4">
            iCommission is committed to respecting the privacy of individuals
            and recognizes a need for the appropriate management and protection
            of any personal information that you agree to provide to us.
          </p>
          <p className="mb-4">
            We will not share your information with any third party outside of
            our organization, other than as necessary to fulfill your request.
          </p>
          <p>
            Your privacy is extremely important to us. The trust placed in us by
            our customers is absolutely essential to our success. We understand
            that and do all we can to earn and protect that trust.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">
            Information Collection and Use
          </h2>
          <p className="mb-4">
            We do not share your personal information with any outside companies
            nor collect any information.
          </p>
          <p>We do not keep a mailing list nor distribute a newsletter.</p>
        </div>
      </main>
      <div className="pb-40"></div>
    </div>
  );
}
