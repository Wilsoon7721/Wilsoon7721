import * as Tooltip from '@radix-ui/react-tooltip';

const ProjectState = ({ published, completion_year }) => {
    const bgColor = published ? 'bg-[#4d7a48] hover:bg-[#679b5e]' : 'bg-[#752b2b] hover:bg-[#9c3b3b]';
    const textColor = published ? 'text-[#e8fbe3]' : 'text-[#ffeaea]';

    return (
        <Tooltip.Provider delayDuration={200}>
            <div className="w-auto max-w-65 max-h-32 mt-1 flex flex-row items-start mr-2">

                <Tooltip.Root>
                    <Tooltip.Trigger asChild>
                        <div className={`px-3 py-1 h-6 flex items-center justify-center ${bgColor} cursor-default transition-colors duration-300 rounded-lg`}>
                            <p className={`whitespace-nowrap text-sm font-medium cursor-default ${textColor}`}>{published ? 'Published' : 'Unpublished'} • {completion_year}</p>
                        </div>
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                        <Tooltip.Content side="top" sideOffset={5} className={`${published ? 'bg-[#4d7a48] text-[#e8fbe3]' : 'bg-[#9c3b3b] text-[#ffeaea]'} px-2 py-1 rounded text-xs shadow-md z-800`}>
                            {published ? 'This project is publicly available.' : 'This project will not be published.'}
                            <Tooltip.Arrow className={`${published ? 'fill-[#4d7a48]' : 'fill-[#9c3b3b]'}`} />
                        </Tooltip.Content>
                    </Tooltip.Portal>
                </Tooltip.Root>
            </div>
        </Tooltip.Provider >
    );
};

export default ProjectState;
