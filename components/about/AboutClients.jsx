import { useState } from 'react';
import { clientsData } from '../../data/clientsData';
import { clientsHeading } from '../../data/clientsData';
import AboutClientSingle from './AboutClientSingle';

function AboutClients() {
	const [clients, setClients] = useState(clientsData);
	return (
		<div className="mt-10 sm:mt-20">
			<p className="font-general-medium text-2xl sm:text-4xl text-primary-dark dark:text-primary-light">
				{clientsHeading}
			</p>
			<div className="m-4">
				
					<AboutClientSingle  data={clients}/>
						 
		
			</div>
		</div>
	);
}

export default AboutClients;
