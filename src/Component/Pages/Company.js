import React from 'react';
import aboutHero from '../../Assets/Company/image-about-hero.jpg';
import aboutMain from '../../Assets/Company/image-world-class-talent.jpg';
import aboutDeal from '../../Assets/Company/image-real-deal.jpg';
import Touch from '../Global/Touch';
import Country from '../Global/Country';
function Company() {
  return (
    <div>
      <div className='about-hero container row'>
        <div className='about-hero-content col'>
          <div className='about-hero-content-body'>
            <h1>About Us</h1>
            <p>
              Founded in 2010, we are a creative agency that produces lasting
              results for our clients. We’ve partnered with many startups,
              corporations, and nonprofits alike to craft designs that make real
              impact. We’re always looking forward to creating brands, products,
              and digital experiences that connect with our clients’ audiences.
            </p>
          </div>
        </div>
        <div className='about-hero-picture col'>
          <img src={aboutHero} alt='Team with laptops in meeting' />
        </div>
      </div>

      {/* SECTION2 */}
      <div className='about-main container row'>
        <div className='about-main-picture col'>
          <img src={aboutMain} alt='Female designer looking at her paintings' />
        </div>
        <div className='about-main-content col'>
          <div className='about-main-content-body'>
            <h1>World-class talent</h1>
            <p>
              We are a crew of strategists, problem-solvers, and technologists.
              Every design is thoughtfully crafted from concept to launch,
              ensuring success in its given market. We are constantly updating
              our skills in a myriad of platforms.
            </p>
            <p>
              Our team is multi-disciplinary and we are not merely interested in
              form — content and meaning are just as important. We give great
              importance to craftsmanship, service, and prompt delivery. Clients
              have always been impressed with our high-quality outcomes that
              encapsulates their brand’s story and mission.
            </p>
          </div>
        </div>
      </div>

      {/* SECTION3 */}
      <Country />

      {/* SECTION4 */}
      <div className='about-deal container row mt-6'>
        <div className='about-deal-content col'>
          <div className='about-deal-content-body'>
            <h1>The real deal</h1>
            <p>
              As strategic partners in our clients’ businesses, we are ready to
              take on any challenge as our own. Solving real problems require
              empathy and collaboration, and we strive to bring a fresh
              perspective to every opportunity. We make design and technology
              more accessible and give you tools to measure success.
            </p>
            <p>
              We are visual storytellers in appealing and captivating ways. By
              combining business and marketing strategies, we inspire audiences
              to take action and drive real results.
            </p>
          </div>
        </div>
        <div className='about-deal-picture col'>
          <img src={aboutDeal} alt='Zoom in on hands adjusting pictures' />
        </div>
      </div>

      {/* SECTION FOUR */}
      <Touch />
    </div>
  );
}

export default Company;
