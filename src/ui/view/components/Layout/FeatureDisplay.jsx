import img1 from '../../../assets/images/journal.png';
import img2 from '../../../assets/images/hierarchy-blocks.png';
import img3 from "../../../assets/images/inspiring-blocks.png";
import img4 from '../../../assets/images/block-triangle.png';

const FeatureDisplay = {
  view: () => (
    <section className="info-cards w-full">
      <div className="relative">
        <div className="right-slider border-balance-buttonbg-successlighter relative flex w-full -mr-1 overflow-hidden border-4 rounded-full rounded-r-none">
          <div className="slider-img pb-2/3">
            <img
              src={img1}
              className="absolute object-cover w-full h-full"
              alt=""
            />
          </div>
        </div>
        <div className="top-48 py-12 slider-text absolute right-0 z-40 flex flex-col items-center px-6 my-12 rounded-full">
          <h3 className="w-1/3 mb-8">Everyone Loves a Streak</h3>
          <p>
            If you know the satisfaction of completing a list, or marking off a
            running streak, you know the sense of satisfaction from a sense of
            completion.<br></br> HabitFract seeks to channel our minds' in-built
            completion-satisfaction mechanism to drive behavioural change.
          </p>
        </div>
      </div>
      <div className="relative">
        <div className="left-slider border-balance-buttonbg-successlighter relative flex w-full -ml-1 overflow-hidden border-4 rounded-full rounded-l-none">
          <div className="slider-img pb-2/3">
            <img
              src={img3}
              className="absolute object-cover w-full h-full"
              alt=""
            />
          </div>
        </div>
        <div className="top-48 py-12 slider-text absolute right-0 z-40 flex flex-col items-center px-6 my-12 rounded-full">
          <h3 className="w-1/3 mb-8">
            Use Personal Data as the Building Blocks for Change
          </h3>
          <p>
            When we measure, it helps us learn. By tracking your behaviour in a
            granular fashion, you can hone in on the aspects of a habit that you
            are having difficulty in performing continuously.<br></br> Once
            you've narrowed it down, master the steps and mark them for
            completion daily.
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="right-slider border-balance-buttonbg-successlighter relative flex w-full -mr-1 overflow-hidden border-4 rounded-full rounded-r-none">
          <div className="slider-img pb-2/3">
            <img
              src={img2}
              className="absolute object-cover w-full h-full"
              alt=""
            />
          </div>
        </div>
        <div className="top-48 py-12 slider-text absolute right-0 z-40 flex flex-col items-center px-6 my-12 rounded-full">
          <h3 className="w-1/3 mb-8">
            Use Natural Fractal Structure to Build Bigger Habits
          </h3>
          <p>
            If you can master the sequence daily actions you need to achieve an
            objective, all you need to do is keep the streak going: now you're
            on the road to whatever success means to you.
          </p>
          <p>
            By marking completion for bigger sets of behaviours, you can build
            them up into great aspirational goals - while keeping yourself
            grounded in the day-to-day.
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="top-48 py-12 slider-text absolute right-0 z-40 flex flex-col items-center px-6 my-12 rounded-full">
          <h3 className="w-1/3 mb-8">Make a Strong Foundation for Change</h3>
          <p>
            Inspired by behavioural science, staying rooted in the now, and the
            book 'Atomic Habits' by James Clear: the way to make effective
            long-term change is to make incremental and continuous changes in
            behaviour.
          </p>
        </div>
        <div className="left-slider border-balance-buttonbg-successlighter relative flex w-full -ml-1 overflow-hidden border-4 rounded-full rounded-l-none">
          <div className="slider-img pb-2/3">
            <img
              src={img4}
              className="absolute object-cover w-full h-full"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  ),
};

export default FeatureDisplay;
