interface LinksCardProps {
    logo: string;
    title: string;
    link: string;
    pdfLink: string;
    // shareButton?: string;
    services?: boolean;
}

const LinksCard: React.FC<LinksCardProps> = ({ logo, title, link, pdfLink, services }) => {
    return (
        <a href={pdfLink} target="_blank" rel="noopener noreferrer">
            <div
                className="flex items-center m-5 p-[1px] rounded-lg bg-gradient-to-r from-[#31BF5A] to-[#004A62]"
            >
                <div className="flex items-center w-full rounded-lg bg-gray-800 shadow-md space-x-2">
                    <div className="flex-shrink-0 rounded-lg">
                        <img src={logo} alt={title} className={`rounded-tl-lg rounded-bl-lg ${services ? "h-14 w-14 p-1 filter-white" : "h-24 w-24"} `} />
                    </div>
                    <div className="flex-1">
                        <h3 className="font-bold text-sm text-white line-clamp-3">{title}</h3>
                        <a href={link} target="_blank" rel="noopener noreferrer" className="text-gray-500 text-xs">
                            {link}
                        </a>
                    </div>
                </div>
            </div>
        </a>
    );
}

export default LinksCard;
