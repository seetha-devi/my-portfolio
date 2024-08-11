function AppFooterCopyright() {
	return (
		<div className="font-general-regular flex justify-center items-center text-center mt-0">
			<div className="text-lg text-ternary-dark dark:text-ternary-light">
				&copy; {new Date().getFullYear()}
				<a
					href="https://github.com/seetha-devi"
					target="__blank"
					className="hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
				>
					Frontend Developer
				</a>
				.{' '}
				<a
					href="https://github.com/seetha-devi"
					target="__blank"
					className="text-secondary-dark dark:text-secondary-light font-medium uppercase hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
				>
					Seetha
				</a>
			</div>
		</div>
	);
}

export default AppFooterCopyright;
