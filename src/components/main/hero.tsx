import { ReactNode } from "react";
import SimpleButton, { GhostButton } from "../buttons";
import PageHeading, { ColorHeading, PageHeading2 } from "../heading";
import PageCard from "../card";
import PageCounter from "../counter";

const PageSection = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <section className={className + " container mx-auto px-2 mt-20"}>
    {children}
  </section>
);

const Hero = () => {
  return (
    <>
      <div className="hero-section">
        <div className="container mx-auto px-2 grid grid-cols-1 lg:grid-cols-3 gap-2">
          <div className="shrink grow basis-5 pt-10 lg:pt-24">
            <h1 className="text-4xl md:text-6xl text-white font-bold">
              <span className="text-blue-500">DELTA</span> Tech &amp;
              Entrepreneurship Summit 2024
            </h1>
            <p className="text-white  mt-5">
              The Delta Tech and Entrepreneurship (TxE) Summit 2nd edition.
              Delta TxE aims to ignite innovation, foster collaboration, and
              empower the local entrepreneurial community. The summit aims to
              drive economic growth and position Delta as a leading center for
              innovation in South East, Nigeria.
            </p>

            <div className="flex flex-wrap gap-5 mt-8">
              <GhostButton
                className="basis-[10rem] shrink grow"
                buttonText="Get a Booth"
              />
              <SimpleButton
                className="basis-[10rem] shrink grow"
                buttonText="Register"
              />
            </div>

            {/* cursor animation */}
            <div className="flex w-auto justify-end items-end mt-4 cursor-animation">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
              >
                <path
                  d="M35.8839 15.8287L7.00885 5.32873C6.77444 5.24417 6.52079 5.22809 6.27757 5.28237C6.03435 5.33666 5.81161 5.45906 5.6354 5.63528C5.45919 5.81149 5.33678 6.03423 5.2825 6.27745C5.22821 6.52067 5.24429 6.77431 5.32885 7.00873L15.8289 35.8837C15.9206 36.1374 16.0882 36.3566 16.309 36.5116C16.5297 36.6666 16.7929 36.7499 17.0626 36.75C17.3255 36.7502 17.5824 36.6716 17.8 36.5241C18.0176 36.3767 18.186 36.1673 18.2832 35.9231L23.3232 23.3231L35.9232 18.2831C36.1723 18.1887 36.3866 18.0207 36.5379 17.8015C36.6892 17.5823 36.7703 17.3223 36.7703 17.0559C36.7703 16.7896 36.6892 16.5296 36.5379 16.3104C36.3866 16.0912 36.1723 15.9232 35.9232 15.8287H35.8839ZM21.827 21.0787L21.302 21.2887L21.092 21.8137L17.0626 31.7625L8.75448 8.75436L31.7626 17.0625L21.827 21.0787Z"
                  fill="white"
                ></path>
              </svg>
              <p>Click here</p>
            </div>
          </div>
          <div className="col-span-2 relative max-lg:pt-32">
            <div className="w-full h-[90svh] max-lg:hidden bg-teach-image" />
          </div>
        </div>
        <div className="relative lg:absolute bottom-4 w-full -right-4 sm:-right-24 flex justify-end">
          <div className="bg-white p-8 pr-12 sm:pr-32 rounded-lg flex gap-5">
            <p className="text-black">
              In partnership with{" "}
              <span className="text-blue-500 font-bold">
                DELTA STATE <br />
                GOVERNMENT
              </span>
            </p>
            <div className="shrink-0 content-center">
              <img
                className="w-32"
                src="https://deltastate.gov.ng/wp-content/uploads/2024/02/logo-1.png"
              />
            </div>
          </div>
        </div>
      </div>

      <PageSection>
        <PageHeading title="Event Highlights" subtitle="TxE Summit 2024" />
        <div className="grid justify-center lg:grid-cols-9 gap-5">
          <PageCard
            className="lg:col-span-2"
            heading="Business Grant"
            desc="Top Qualified Applicants & Participants will be going home with Business Grants 🎉🏆"
            image="/imgs/teach-one.jpeg"
          />
          <PageCard
            className="lg:col-span-3"
            heading="Free Laptops"
            desc="Top Qualified Applicants & Participants will be going home with Laptops 🎉🏆"
            image="/imgs/teach-one-l.jpeg"
          />
          <PageCard
            className="lg:col-span-2"
            heading="Tech Scholarships"
            desc="Top Qualified Applicants & Participants will be going home with valuable scholarships 🎉🏆"
            image="/imgs/teach-one.jpeg"
          />
          <PageCard
            className="lg:col-span-2"
            heading="Get Certificate"
            desc="Earn a certificate of participation for joining our incredible tech event!"
            image="/imgs/teach-one.jpeg"
          />
        </div>
      </PageSection>

      <PageSection>
        <PageHeading2
          title="Event Schedule"
          text2="The Delta tech Summit 2024 will be a one day event focusing on variety of different themes."
          subtitle="18th November, 2024"
        />

        <div className="grid grid-cols-2 lg:grid-cols-3 items-start">
          <div className="">
            <ColorHeading text="Enterprenuership" />
            <div className="flex flex-col gap-10">
              <p className="max-w-72">
                A 1-day interactive workshop and fireside chat with leading
                experts from leading tech companies including Google
              </p>

              <div className="max-w-72">
                <b className="block mb-2">Idea Pitch Session</b>
                <p className="">
                  Innovative businesses will be given an opportunity to pitch
                  their ideas and businesss solutions to a panel of judges and
                  recieve feedback.
                </p>
              </div>
              <div className="max-w-72">
                <b className="block mb-2">Enterprenuership</b>
                <p className="">
                  A 1-day interactive workshop and fireside chat with leading
                  experts from leading tech companies including Google
                </p>
              </div>
              <div className="max-w-72">
                <b className="block mb-2">Grants and Support for Startups</b>
                <p className="">
                  Innovative businesses will stand a chance to be awarded seed
                  fund grants to encourage their ventures.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 border-l-[1px] border-blue-500">
            <div className="flex flex-col gap-10">
              <div className="flex gap-2">
                <div className="w-12"></div>
                <div className="">
                  <ColorHeading text="Tech Skill Boost" />
                  <p className="">
                    An interactive workshop and fireside chat with leading
                    experts from leading tech companies including Google.
                  </p>
                </div>
              </div>

              <div className="flex gap-2">
                <div className="w-12 bullet"></div>
                <div className="">
                  <b className="block mb-2">In-demand skills</b>
                  <p className="">
                  Learn which skills are most sort after
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="w-12 bullet"></div>
                <div className="">
                  <b className="block mb-2">Learning opportunities & resources</b>
                  <p className="">
                  How and where to learn those skills</p>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="w-12 bullet"></div>
                <div className="">
                  <b className="block mb-2">Securing employment</b>
                  <p className="">
                  How to use your skills to work for global tech companies remotely from enugu and earn in dollars
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="w-12 bullet"></div>
                <div className="">
                  <b className="block mb-2">Q&A with Top Tech Talents</b>
                  <p className="">
                  Ask experienced tech employees questions and get feedback from them directly
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="w-12 bullet"></div>
                <div className="">
                  <b className="block mb-2">Scholarships & Devices</b>
                  <p className="">
                  1000 scholarships and 200 devices to jumpstart training and career.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageSection>
      <PageSection>
        <div className="grid grid-cols-4 gap-5">
          <PageCounter property="Attendees" value={24}/>
        </div>
      </PageSection>
    </>
  );
};

export default Hero;
