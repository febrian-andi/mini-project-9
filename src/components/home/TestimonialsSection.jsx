import React from "react";
import QuoteLeftIcon from "../../assets/icons/QuoteLeftIcon";

function TestomonialsSection() {
  return (
    <section className="py-20 px-6 md:px-12">
      <h1 className="text-3xl font-bold pl-32 mb-12">What our clients say about us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="flex flex-row space-x-4">
          <div>
            <QuoteLeftIcon width="35" height="35" />
          </div>
          <div>
            <p className="md:h-full">
              I would like to say that this experience was great. The team was
              very professional and answered all our questions and was committed
              to completing our project on time. We are happy to have worked
              with dsgnr. and would hire them again and would recommend them to
              anyone else looking for a designer and developer. They know their
              stuff!
            </p>
            <div className="flex space-x-4 items-center mt-4 md:mt-0">
              <img
                src="https://via.placeholder.com/150"
                alt="photo profile"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="font-bold">Milton Austin</h3>
                <p className="text-sm">Product Manager, Slack</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row space-x-4">
          <div>
            <QuoteLeftIcon width="35" height="35" />
          </div>
          <div>
            <p className="md:h-full">
              Great work ethic and very reliable! Brooklyn was our logo
              designer. She walked us through many iterations and guided us on
              all aspects of the process. Very professional, will use them again
              soon!”
            </p>
            <div className="flex space-x-4 items-center mt-4 md:mt-0">
              <img
                src="https://via.placeholder.com/150"
                alt="photo profile"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="font-bold">John Doe</h3>
                <p className="text-sm">Co-founder, catco.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestomonialsSection;
