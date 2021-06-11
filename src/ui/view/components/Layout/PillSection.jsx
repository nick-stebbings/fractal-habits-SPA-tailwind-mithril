// src/view/components/Layout/PillSection.jsx

import FeaturePill from './Nav/UI/Buttons/FeaturePill.jsx';
import '../../../assets/styles/components/PillSection.scss';

const PillSection = {
  view: ({ attrs }) => (
    <div className="cta-pills w-full text-center col-span-5">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 244.55 125.46">
        <defs>
          <clipPath id="clipPath">
            <path d="M244.55,84.21a58.55,58.55,0,0,1-16.93,41.25H5.06A35.75,35.75,0,0,1,0,107.08a37.52,37.52,0,0,1,.25-4.27A35.9,35.9,0,0,1,26.91,72.34a14.66,14.66,0,0,1-.28-2.82A14.08,14.08,0,0,1,40.71,55.44a13.92,13.92,0,0,1,2.9.3A71.48,71.48,0,0,1,169.82,27.67a59.36,59.36,0,0,1,5.83-1.32,58.77,58.77,0,0,1,68.9,57.86Z" />
          </clipPath>
          <style />
        </defs>
      </svg>
      {attrs.pillTitles.map((title, idx) => (
        <FeaturePill title={title} rank={idx} clipPathUrl="#clipPath" name={title} modalType={attrs.modalType} />
      ))}
    </div>
  ),
};

export default PillSection;
