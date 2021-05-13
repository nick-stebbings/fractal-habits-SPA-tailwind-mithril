import GeneralButton from './Nav/UI/Buttons/GeneralButton.jsx';
import habitPyramidMan from '../../../assets/images/pyramid_dude.svg';

const Footer = {
  view: () => (
    <div className="w-full">
      <img
        src={habitPyramidMan}
        className="md:w-1/2 sm:w-3/4 w-full"
        alt="Aspirational man looking at habit pyramid"
      />
      <footer
        className=" flex justify-center px-4 text-gray-100"
        style="background-color:#211912;"
      >
        <div className="container py-6">
          <h1 className="lg:text-2xl text-lg font-bold text-center">
            Please leave feedback if you have any bug reports or ideas for
            improvement, I'd love to hear them!
          </h1>
          <div className="flex flex-col flex-wrap justify-center mt-6">
            <div className="rounded-3xl px-4 bg-white">
              <div className="flex flex-col flex-wrap justify-between">
                <label htmlFor="comment" className="flex">
                  <input
                    type="text"
                    name="comment"
                    className="focus:outline-none flex p-2 m-1 text-sm text-gray-100 appearance-none"
                    placeholder="Leave your comment"
                    required
                  />
                </label>
                <label htmlFor="email" className="flex">
                  <input
                    type="email"
                    name="email"
                    className="focus:outline-none flex p-2 m-1 text-sm text-gray-100 appearance-none"
                    placeholder="Enter your email"
                    required
                  />
                </label>
                <GeneralButton
                  id="submit-comments"
                  name="submit-comments"
                  data-attr=""
                  label="Submit"
                  color="balance-sshades-light"
                >
                  Submit Comment
                </GeneralButton>
              </div>
            </div>
          </div>
          <hr className="h-px mt-6 bg-gray-100 border-none" />
          <div className="md:flex-row flex flex-col items-center justify-between mt-6">
            <div>
              <a href="#" className="text-xl font-bold">
                Brand
              </a>
            </div>
            <div className="md:m-0 flex mt-4">
              <div className="-mx-4">
                <a href="#" className="px-4 text-sm">
                  About
                </a>
                <a href="#" className="px-4 text-sm">
                  Blog
                </a>
                <a href="#" className="px-4 text-sm">
                  News
                </a>
                <a href="#" className="px-4 text-sm">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  ),
};

export default Footer;
