// import { useState } from 'react';
import { clientsData } from '../../data/clientsData';
import { clientsHeading } from '../../data/clientsData';
import AboutSkill from './AboutSkill';

function AboutClients() {
	const clients= clientsData;
	return (
		<div className="mt-10 sm:mt-20">
			<p className="font-general-medium text-2xl sm:text-4xl text-primary-dark dark:text-primary-light">
				{clientsHeading}
			</p>
			<div className="m-4">
				
					<AboutSkill  data={clients}/>
						 
		
			</div>
		</div>
	);
}

export default AboutClients;
