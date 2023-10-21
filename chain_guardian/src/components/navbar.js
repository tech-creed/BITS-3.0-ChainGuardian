import { Link } from 'react-router-dom'
import { Disclosure } from "@headlessui/react"

const Navbar = () => {
  const navigation = [
    "Home",
    "About",
    "Service",
    "Doc",
  ];

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link href="/">
                  <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
                    <span>
                      <img
                        src={''}
                        alt="logo"
                        width="32"
                        height="32"
                        className="w-8"
                      />
                    </span>
                    <span>Chain Guardian</span>
                  </span>
                </Link>

                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                  <>
                    <a href="auth/signin" className="w-full px-6 py-2 mt-3 text-center text-white bg-indigo-600 rounded-md lg:ml-5">         
                        Signin
                    </a>
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>


        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
          <a href="/auth/signin" className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5">
              Signin
          </a>

        </div>
      </nav>
    </div>
  );
}

export default Navbar;
