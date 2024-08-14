import { useState, useEffect } from 'react';
import { FiSun, FiMoon, FiX, FiMenu } from 'react-icons/fi';
import Link from 'next/link';
import { motion } from 'framer-motion';
// import HireMeModal from '../HireMeModal';
import useThemeSwitcher from '../../hooks/useThemeSwitcher';
import { RiComputerLine } from "react-icons/ri";
function AppHeader() {
    const [showMenu, setShowMenu] = useState(false);
    // const [showModal, setShowModal] = useState(false);
    const [activeTheme, toggleTheme] = useThemeSwitcher();

    function toggleMenu() {
        setShowMenu(prev => !prev);
    }

 

    return (
        <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            id="nav"
            className="sm:container sm:mx-auto"
        >
            <div className="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-6">
                <div className="flex justify-between items-center px-4 sm:px-0">
                    <div>
                        <Link href="/">
                            <div className={`text-3xl flex gap-2 sm:text-3xl md:text-4xl font-extrabold tracking-wide drop-shadow-lg transition duration-300 ${activeTheme === 'dark' ? 'text-white hover:text-gray-600' : 'text-indigo-500 hover:text-indigo-600'}`}>
                                Seetha <span><RiComputerLine /></span>
                            </div>
                        </Link>
                    </div>

                    {/* Theme switcher small screen */}
                    <div
                        onClick={toggleTheme}
                        aria-label="Theme Switcher"
                        className="block sm:hidden ml-0 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer"
                    >
                        {activeTheme === 'dark' ? (
                            <FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
                        ) : (
                            <FiSun className="text-gray-200 hover:text-gray-50 text-xl" />
                        )}
                    </div>

                    {/* Small screen hamburger menu */}
                    <div className="sm:hidden">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="focus:outline-none"
                            aria-label="Hamburger Menu"
                        >
                            {showMenu ? (
                                <FiX className="text-3xl fill-current text-secondary-dark dark:text-ternary-light" />
                            ) : (
                                <FiMenu className="text-3xl fill-current text-secondary-dark dark:text-ternary-light" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Header links small screen */}
                <div
                    className={
                        showMenu
                            ? 'block m-0 sm:ml-4 sm:mt-3 md:flex px-5 py-3 sm:p-0 justify-between items-center shadow-lg sm:shadow-none'
                            : 'hidden'
                    }
                >
                      <div className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 mb-2 sm:py-2">
                        <Link href="/" aria-label="Home">
                            Home
                        </Link>
                    </div>
                    <div className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 mb-2 sm:py-2">
                        <Link href="/projects" aria-label="Projects">
                            Projects
                        </Link>
                    </div>
                    <div className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark">
                        <Link href="/about" aria-label="About Me">
                            About Me
                        </Link>
                    </div>
                    <div className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark">
                        <Link href="/contact" aria-label="Contact">
                            Contact
                        </Link>
                    </div>
                    <div className="border-t-2 pt-3 sm:pt-0 sm:border-t-0 border-primary-light dark:border-secondary-dark">
                       <Link href='/contact'>
                       <button
                          
                            className="font-general-medium sm:hidden block text-left text-md bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-sm px-4 py-2 mt-2 duration-300 w-24"
                            aria-label="Hire Me Button"
                        >
                            Hire Me
                        </button>
                       </Link>
                    </div>
                </div>

                {/* Header links large screen */}
                <div className="font-general-medium hidden m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none">
                    <div
                        className="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 mb-2 sm:py-2"
                        aria-label="Projects"
                    >
                        <Link href="/projects">Projects</Link>
                    </div>
                    <div
                        className="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 mb-2 sm:py-2"
                        aria-label="About Me"
                    >
                        <Link href="/about">About Me</Link>
                    </div>

                    <div
                        className="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 mb-2 sm:py-2"
                        aria-label="Contact"
                    >
                        <Link href="/contact">Contact</Link>
                    </div>
                </div>

                {/* Header right section buttons */}
                <div className="hidden sm:flex justify-between items-center flex-col md:flex-row">
                    <div className="hidden md:flex">
                       <Link href='/contact'>
                       <button
                            
                            className="text-md font-general-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-5 py-2.5 duration-300"
                            aria-label="Hire Me Button"
                        >
                            Hire Me
                        </button>
                       </Link>
                    </div>

                    {/* Theme switcher large screen */}
                    <div
                        onClick={toggleTheme}
                        aria-label="Theme Switcher"
                        className="ml-8 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer"
                    >
                        {activeTheme === 'dark' ? (
                            <FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
                        ) : (
                            <FiSun className="text-gray-900 hover:text-gray-50 text-xl" />
                        )}
                    </div>
                </div>
            </div>
            {/* <div>
                {showModal && (
                    <HireMeModal
                        onClose={showHireMeModal}
                        onRequest={showHireMeModal}
                    />
                )}
            </div> */}
        </motion.nav>
    );
}

export default AppHeader;
