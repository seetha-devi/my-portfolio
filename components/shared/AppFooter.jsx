import {
	FiGithub,
	FiLinkedin,
	FiGlobe,
  } from 'react-icons/fi';
  import { BsWhatsapp } from "react-icons/bs";
  import Link from 'next/link';
  
  const socialLinks = [
	{
	  id: 1,
	  icon: <FiGlobe />,
	  url: 'https://www.stoman.me/',
	},
	{
	  id: 2,
	  icon: <FiGithub />,
	  url: 'https://github.com/seetha-devi',
	},
	{
	  id: 3,
	  icon: <BsWhatsapp />,
	  url: 'https://wa.me/8072554494',
	},
	{
	  id: 4,
	  icon: <FiLinkedin />,
	  url: 'https://www.linkedin.com/in/seetha-devi-597a76262/',
	},
  ];
  
  function AppFooter() {
	return (
	  <footer className="bg-gray-100 dark:bg-primary-dark text-gray-800 dark:text-gray-200 py-6 transition-colors duration-500 mt-5">
		<div className="container mx-auto text-center">
		  <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
		  <p className="mb-4">
			If you would like to get in touch, feel free to reach out via email or connect with me on social media.
		  </p>
		  <div className="flex justify-center space-x-6 mb-4">
			{socialLinks.map((social) => (
			  <Link href={social.url} key={social.id} passHref>
				<span className="text-gray-800 dark:text-gray-200 text-2xl hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-300">
				  {social.icon}
				</span>
			  </Link>
			))}
		  </div>
		  <p className="text-sm">&copy; 2024 Seethadevi. All rights reserved.</p>
		</div>
	  </footer>
	);
  }
  
  export default AppFooter;
  