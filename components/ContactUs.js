"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { sendEmail } from "@/actions/resend";

function ContactUs() {
  const [submitbtn, setSubmitbtn] = useState("Send a message");
  const router = useRouter();
  const [credentials, setCredentials] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setCredentials((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  const getArrayFromObj = (obj) => {
    let arr = [];
    for (const [key, value] of Object.entries(obj)) {
      arr.push(`${key.toUpperCase()}: ${value}`);
    }
    console.log(arr);
    return arr;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    sendEmail({ content: getArrayFromObj(credentials) })
      .then((res) => router.push("/thank-you"))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <section class="py-12 bg-gray-50 sm:py-16 lg:py-20 xl:py-24" id="contact">
        <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-x-16 xl:gap-x-32">
            <div class="flex flex-col self-stretch justify-between">
              <div class="flex-1">
                <h2 class="text-3xl font-bold leading-loose tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                  We love to answer your Queries 👋
                </h2>
                <p className="mt-10">
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

              <div class="relative mt-10 overflow-hidden bg-blue-700 lg:mt-0 rounded-3xl -rotate-3">
                <div class="absolute bottom-0 right-0 -mb-72 -mr-24 border-[6px] opacity-20 border-white rounded-full w-96 h-96"></div>

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1933.6843871601534!2d-79.69298031441271!3d43.63458753291713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3f7ed0f102f1%3A0x43f6951212cb674!2s8%20Prologis%20Blvd%20%23103d%2C%20Mississauga%2C%20ON%20L5W%201N3%2C%20Canada!5e0!3m2!1sen!2snp!4v1717940866210!5m2!1sen!2snp"
                  width="600"
                  height="450"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            <div class="bg-white shadow-xl rounded-2xl">
              <div class="p-6 sm:p-10">
                <h3 class="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
                  Send us a message
                </h3>
                <form
                  method="POST"
                  onSubmit={(e) => handleFormSubmit(e)}
                  class="mt-8 space-y-6"
                >
                  <div>
                    <label for="fullName" class="sr-only">
                      {" "}
                      Your name{" "}
                    </label>
                    <div>
                      <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        id="name"
                        value={credentials.name}
                        onChange={(e) => handleChange(e)}
                        class="block w-full py-4 text-base text-gray-900 placeholder-gray-600 bg-white border-2 focus:outline-none focus:border-blue-600 focus:ring-0 p-2 rounded-md"
                      />
                    </div>
                  </div>

                  <div>
                    <label for="email" class="sr-only">
                      {" "}
                      Email address{" "}
                    </label>
                    <div>
                      <input
                        type="email"
                        aria-describedby="emailHelp"
                        placeholder="Your email"
                        name="email"
                        id="email"
                        value={credentials.email}
                        onChange={(e) => handleChange(e)}
                        class="block w-full py-4 text-base text-gray-900 placeholder-gray-600 bg-white border-2 focus:outline-none focus:border-blue-600 focus:ring-0 rounded-md p-2"
                      />
                    </div>
                  </div>

                  <div>
                    <label for="phone" class="sr-only">
                      {" "}
                      Phone{" "}
                    </label>
                    <div>
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        placeholder="Phone"
                        value={credentials.phone}
                        onChange={(e) => handleChange(e)}
                        required={true}
                        class="block w-full py-4 text-base text-gray-900 placeholder-gray-600 bg-white border-2 focus:outline-none focus:border-blue-600 focus:ring-0 rounded-md p-2"
                      />
                    </div>
                  </div>

                  <div>
                    <label for="message" class="sr-only">
                      {" "}
                      Write your message{" "}
                    </label>
                    <div>
                      <textarea
                        id="message"
                        name="message"
                        rows="3"
                        cols="50"
                        placeholder="Enter your message here"
                        value={credentials.message}
                        onChange={(e) => handleChange(e)}
                        class="block w-full py-4 text-base text-gray-900 placeholder-gray-600 bg-white border-2 focus:outline-none focus:border-blue-600 focus:ring-0 p-2 rounded-md"
                      ></textarea>
                    </div>
                  </div>

                  <input
                    type="submit"
                    value={submitbtn}
                    class="inline-flex items-center justify-center w-full px-12 py-4 text-base font-medium text-white transition-all duration-200 bg-blue-700 border border-transparent rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
