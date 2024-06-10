import ContactUs from "@/components/ContactUs";
import FAQ from "@/components/FAQ";

export const metadata = {
  title: "iCommission Advance - Frequently Asked Questions",
  description:
    "Any questions about iCommission Advance? Check out our FAQ page to find answers to the most common questions!",
};

function FAQPage() {
  return (
    <>
      <FAQ />
      <ContactUs />
    </>
  );
}

export default FAQPage;
