import img1 from '../../../assets/images/journal.jpg';
import img2 from '../../../assets/images/inspirational_blocks.jpg';
import img3 from '../../../assets/images/pyramid_of_boxes.jpg';
import img4 from '../../../assets/images/pyramid_of_wooden_blocks.jpg';

const FeatureDisplay = {
  view: ({ attrs }) => (
    <section className="info-cards w-full overflow-x-hidden">
      <div className="right-slider w-full bg-blue-100">
        <div className="slider-img pb-1/5 relative overflow-hidden">
          <img src={img1} className="absolute object-cover w-full h-full px-6 my-2" alt="" />
        </div>
        <div className="slider-text flex flex-col px-6 my-4">
          <h3>
            <p>
              Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
              sint cillum sint consectetur cupidatat.
            </p>
          </h3>
          <p>
            Lorem ipsum dolor sit amet, officia excepteur ex fugiat
            reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
            ex esse exercitation amet. Nisi animcupidatat excepteur officia.
            Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
            voluptate dolor minim nulla est proident. Nostrud officia pariatur
            ut officia.
          </p>
          <p>
            Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo
            officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa
            proident adipisicing id nulla nisi laboris ex in Lorem sunt duis
            officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis
            sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea
            consectetur et est culpa et culpa duis.
          </p>
        </div>
      </div>
      <div className="left-slider w-full bg-red-100">
        <div className="slider-text flex flex-col px-6 my-4">
          <h3>
            <p>
              Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
              sint cillum sint consectetur cupidatat.
            </p>
          </h3>
          <p>
            Lorem ipsum dolor sit amet, officia excepteur ex fugiat
            reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
            ex esse exercitation amet. Nisi animcupidatat excepteur officia.
            Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
            voluptate dolor minim nulla est proident. Nostrud officia pariatur
            ut officia.
          </p>
          <p>
            Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo
            officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa
            proident adipisicing id nulla nisi laboris ex in Lorem sunt duis
            officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis
            sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea
            consectetur et est culpa et culpa duis.
          </p>
        </div>
        <div className="slider-img pb-1/5 relative overflow-hidden">
          <img src={img2} className="absolute object-cover w-full h-full px-6 my-2" alt="" />
        </div>
      </div>
      <div className="right-slider w-full bg-green-100">
        <div className="slider-img pb-1/5 relative overflow-hidden">
          <img src={img3} className="absolute object-cover w-full h-full px-6 my-2" alt="" />
        </div>
        <div className="slider-text flex flex-col px-6 my-4">
          <h3>
            <p>
              Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
              sint cillum sint consectetur cupidatat.
            </p>
          </h3>
          <p>
            Lorem ipsum dolor sit amet, officia excepteur ex fugiat
            reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
            ex esse exercitation amet. Nisi animcupidatat excepteur officia.
            Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
            voluptate dolor minim nulla est proident. Nostrud officia pariatur
            ut officia.
          </p>
          <p>
            Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo
            officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa
            proident adipisicing id nulla nisi laboris ex in Lorem sunt duis
            officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis
            sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea
            consectetur et est culpa et culpa duis.
          </p>
        </div>
      </div>
    </section>
  ),
};

export default FeatureDisplay;
