import GeneralButton from './Nav/UI/Buttons/GeneralButton.jsx';
import LogoLink from './Nav/UI/Buttons/LogoLink.jsx';
import ResponsiveNavGroup from './Nav/ResponsiveNavGroup.jsx';

import MenuRoutes from '../../../menu-routes';

const Footer = {
  view: () => (
    <div className="w-full bg-gray-50">
      <footer className="bg-balance-basic-black text-gray-50 rounded-3xl flex flex-col items-center h-full px-4 pb-12 rounded-b-none">
        <div className="container py-6">
          <h1 className="lg:text-2xl text-lg text-center">
            Please leave feedback if you have any bug reports or ideas for
            improvement, I'd love to hear them!
          </h1>
          <div className="flex flex-col flex-wrap justify-center mt-6">
            <div className="rounded-3xl px-4 bg-white">
              <div className="flex flex-col flex-wrap justify-between">
                <form
                  method="get"
                  encType="text/plain"
                  className="p-0"
                  action="mailto:nickofstebbs@gmail.com"
                >
                  <label htmlFor="comment" className="flex w-full">
                    <textarea
                      name="comment"
                      className="focus:outline-none flex w-full p-2 m-1 text-xl text-black appearance-none"
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
                      color="bg-balance-buttonbg-reset hover:bg-balance-buttonbg-resetlighter"
                    >
                      Submit

                    </GeneralButton>
                  </label>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex-row flex flex-col items-center justify-between">
          <LogoLink />
          <ul className="flex w-full h-full mt-1">
            {MenuRoutes.map((route) => (
              <ResponsiveNavGroup
                id={`nav-${route.label.toLowerCase()}`}
                class={
                  MenuRoutes.selected === route.label ? 'active' : 'inactive'
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
