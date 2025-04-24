const SkillUsageDisplay = ({ skills }) => {
    return (
        <div className="w-full max-w-65 max-h-64 mt-1 flex flex-row items-start gap-2 md:whitespace-nowrap group">
            {skills.map((skill, index) => (
                <div key={index} className="w-full h-6 flex items-center justify-center bg-[#a6df9c] group-hover:bg-[#4d7a48] transition-colors duration-300 rounded-lg">
                    <p className="text-[#1a1a1a] group-hover:text-[#f0fff4] text-sm text-ellipsis overflow-hidden whitespace-nowrap px-2">{skill}</p>
                </div>
            ))}
        </div>
    )
};

export default SkillUsageDisplay;