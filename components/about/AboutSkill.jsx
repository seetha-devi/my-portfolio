import Image from 'next/image';
import { useState} from 'react';

const AboutSkill = ({ data }) => {
  // Set initial state to the name of the first skill
  const [selectedSkill, setSelectedSkill] = useState(data[0]?.name || null);

  const handleClick = (skillName) => {
    if (selectedSkill === skillName) {
      setSelectedSkill(null); // Deselect if the same skill is clicked
    } else {
      setSelectedSkill(skillName); // Select the new skill
    }
  };

  return (
    <div className="skill-section p-6">
      <div className="skills-name grid grid-cols-2 md:grid-cols-3 gap-3">
        {data.map((skill, index) => (
          <div
            key={index}
            onClick={() => handleClick(skill.name)}
            className="cursor-pointer flex flex-col items-center"
          >
            <div
              className={`w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 transition duration-300 ${
                selectedSkill === skill.name
                  ? 'border-indigo-500 dark:border-white-900'
                  : 'border-gray-300 dark:border-gray-600'
              }`}
            >
              <Image
                src={skill.image}
                alt={skill.name}
                width={128}
                height={128}
                className="object-cover w-full h-full"
              />
            </div>
            {selectedSkill === skill.name && (
              <p className="skill-text mt-2 text-center text-indigo-500 font-semibold dark:text-white-900">
                {skill.name}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutSkill;
