
import PageHeading, { ColorHeading, PageHeading2 } from '../heading'
import { PageSection } from './hero'
import PageCounter from '../counter'
import PageCard from '../card'
import Support from './support'
import TestimonialSlider from './testimonial-slider'
import Speakers from './speakers'

const Body = () => {
  return (
    <>
    <PageSection id='event'>
        <PageHeading
          title="Event Highlights"
          subtitle="Delta Tech Summit 2024"
        />
        <div className="grid justify-center lg:grid-cols-9 gap-5">
          <PageCard
            className="lg:col-span-2"
            heading="Business Grant"
            desc="Top Qualified Applicants & Participants will be going home with Business Grants 🎉🏆"
            image="/imgs/grant.jpg"
          />
          <PageCard
            className="lg:col-span-3"
            heading="Free Laptops"
            desc="Top Qualified Applicants & Participants will be going home with Laptops 🎉🏆"
            image="/imgs/free-laptop.jpg"
          />
          <PageCard
            className="lg:col-span-2"
            heading="Tech Scholarships"
            desc="Top Qualified Applicants & Participants will be going home with valuable scholarships 🎉🏆"
            image="/imgs/scholarship.jpg"
          />
          <PageCard
            className="lg:col-span-2"
            heading="Get Certificate"
            desc="Earn a certificate of participation for joining our incredible tech event!"
            image="/imgs/certificate.jpg"
          />
        </div>
      </PageSection>

      <PageSection id='event-schedule'>
        <PageHeading2
          title="Event Schedule"
          text2="The Delta tech Summit 2024 will be a one day event focusing on variety of different themes."
          subtitle="18th November, 2024"
        />

        <div className="grid grid-cols-2 lg:grid-cols-3 items-start">
          <div className="">
            <ColorHeading text="Enterprenuership" />
            <div className="flex flex-col gap-10">
              <p className="max-w-72 max-lg:pr-6">
                A 1-day interactive workshop and fireside chat with leading
                experts from leading tech companies including Google
              </p>

              <div className="max-w-72 max-lg:pr-6">
                <b className="block mb-2">Idea Pitch Session</b>
                <p className="">
                  Innovative businesses will be given an opportunity to pitch
                  their ideas and businesss solutions to a panel of judges and
                  recieve feedback.
                </p>
              </div>
              <div className="max-w-72 max-lg:pr-6">
                <b className="block mb-2">Enterprenuership</b>
                <p className="">
                  A 1-day interactive workshop and fireside chat with leading
                  experts from leading tech companies including Google
                </p>
              </div>
              <div className="max-w-72 max-lg:pr-6">
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
                  <p className="">Learn which skills are most sort after</p>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="w-12 bullet"></div>
                <div className="">
                  <b className="block mb-2">
                    Learning opportunities & resources
                  </b>
                  <p className="">How and where to learn those skills</p>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="w-12 bullet"></div>
                <div className="">
                  <b className="block mb-2">Securing employment</b>
                  <p className="">
                    How to use your skills to work for global tech companies
                    remotely from enugu and earn in dollars
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="w-12 bullet"></div>
                <div className="">
                  <b className="block mb-2">Q&A with Top Tech Talents</b>
                  <p className="">
                    Ask experienced tech employees questions and get feedback
                    from them directly
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="w-12 bullet"></div>
                <div className="">
                  <b className="block mb-2">Scholarships & Devices</b>
                  <p className="">
                    1000 scholarships and 200 devices to jumpstart training and
                    career.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageSection>
      <PageSection>
        <div className="grid grid-cols-4 max-lg:grid-cols-2 gap-5">
          <PageCounter property="Attendees" value={24} unit="k" />
          <PageCounter property="Tech Scholarships" value={500} />
          <PageCounter property="Online Community" value={22} unit="k" />
          <PageCounter property="Post Event Enrollment" value={1613} />
        </div>
      </PageSection>
      <PageSection id='speakers'>
        
        <Speakers/>
      </PageSection>

      

      

      <PageSection>
        <PageHeading title="Gallery" subtitle="Delta Tech Summit 2023"/>
        <div className="grid grid-cols-12 gap-2">
          <img src="/imgs/gallery/1.jpg" className="object-cover aspect-video rounded-lg lg:col-start-2 col-span-6 lg:col-span-5 "/>
          <img src="/imgs/gallery/2.jpg" className="object-cover aspect-video rounded-lg col-span-6 lg:col-span-5 "/>
          <img src="/imgs/gallery/3.jpg" className="object-cover aspect-video rounded-lg col-span-6 lg:col-span-5 lg:col-start-2"/>
          <img src="/imgs/gallery/4.jpg" className="object-cover aspect-video rounded-lg col-span-6 lg:col-span-5 "/>
          <img src="/imgs/gallery/5.jpg" className="object-cover aspect-video rounded-lg col-span-4 "/>
          <img src="/imgs/gallery/6.jpg" className="object-cover aspect-video rounded-lg col-span-4 "/>
          <img src="/imgs/gallery/7.jpg" className="object-cover aspect-video rounded-lg col-span-4 "/>
        </div>
      </PageSection>

      <PageSection id='testimonials'>
        <PageHeading title="Past attendees testimonials" subtitle="Delta Tech Summit 2023"/>
      </PageSection>
      <TestimonialSlider/>
      <Support/>
    </>
  )
}

export default Body
