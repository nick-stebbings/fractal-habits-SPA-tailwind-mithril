import habitPyramidMan from '../../../assets/images/pyramid_dude.svg';

import GeneralButton from './Nav/UI/Buttons/GeneralButton.jsx';
import LogoLink from './Nav/UI/Buttons/LogoLink.jsx';
import ResponsiveNavGroup from './Nav/ResponsiveNavGroup.jsx';

import MenuRoutes from "../../../menu-routes";

const Footer = {
  view: () => (
    <div className="w-full">
      <img
        src={habitPyramidMan}
        className="md:w-1/2 sm:w-3/4 w-full"
        alt="Aspirational man looking at habit pyramid"
      />
      <footer
        className="justify-betwee flex flex-col items-center px-4 text-gray-100"
      >
        <div className="container py-6">
          <h1 className="lg:text-2xl text-lg font-bold text-center">
            Please leave feedback if you have any bug reports or ideas for
            improvement, I'd love to hear them!
          </h1>
          <div className="flex flex-col flex-wrap justify-center mt-6">
            <div className="rounded-3xl px-4 bg-white">
              <div className="flex flex-col flex-wrap justify-between">
                <form
                  method="get"
                  enctype="text/plain"
                  className="p-0"
                  action="mailto:nickofstebbs@gmail.com"
                >
                  <label htmlFor="comment" className="flex w-full">
                    <textarea
                      name="comment"
                      className="focus:outline-none flex w-full p-2 m-1 text-sm text-black appearance-none"
                      placeholder="Leave your comment"
                      required
                    />
                  </label>
                  <label htmlFor="email" className="flex">
                    <input
                      type="email"
                      name="email"
                      className="focus:outline-none flex w-full p-2 m-1 text-sm text-gray-100 appearance-none"
                      placeholder="Enter your email"
                      required
                    />
                  <GeneralButton
                    id="submit-comments"
                    name="submit-comments"
                    label="Submit"
                    color={"balance-sshades-light"}
                    >
                    Submit Comment
                  </GeneralButton>
                    </label>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex-row flex flex-col items-center justify-between">
          <LogoLink />
          <ul className="flex w-full h-full mt-6">
            {MenuRoutes.map((route) => (
              <ResponsiveNavGroup
                id={`nav-${route.label.toLowerCase()}`}
                class={
                  MenuRoutes.selected === route.label ? "active" : "inactive"
                }
                label={route.label}
                url={`${route.path}`}
              >
                {route.subpaths}
              </ResponsiveNavGroup>
            ))}
          </ul>
        </div>
      </footer>
    </div>
  ),
};

export default Footer;
