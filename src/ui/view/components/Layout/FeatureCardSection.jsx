// src/view/components/Layout/FeatureCardSection.jsx
import FeatureCard from './FeatureCard.jsx';
import '../../../assets/styles/components/FeatureCard.scss';

function loadImage(target) {
  // Use the external CSS to define image URLs
  target.classList.add('img-loaded');
}

const FeatureCardSection = {
  oncreate: ({ dom }) => {
    // Allow lazy-loading of images
    const options = {
      rootMargin: '0px',
      threshold: 0.1,
    };
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          loadImage(entry.target);
        }
      });
    };
    const observer = new IntersectionObserver(handleIntersection, options);
    dom.querySelectorAll('.feature-card').forEach((img) => {
      observer.observe(img);
    });
  },
  view: ({ attrs }) => (
    <div className="wrapper feature-card-section gap-y-12 grid">
      {attrs.cardCopy
        && attrs.cardCopy.map((content, idx) => {
          const {
            title,
            short: shortContentParagaph,
            long: longContentParagraphs,
          } = content;
          return (
            <FeatureCard
              wide={[1, 2, 3, 4].includes(idx)}
              title={title}
              shortContent={shortContentParagaph}
              longContent={longContentParagraphs}
            />
          );
        })}
    </div>
  ),
};

export default FeatureCardSection;
