
const LinksCard = ({ logo, title, link, pdfLink }) => {
    return (
        <a href={pdfLink} target="_blank" rel="noopener noreferrer">
            <div
                className="flex items-center m-5 p-[1px] rounded-lg bg-gradient-to-r from-[#31BF5A] to-[#004A62]"
            >
                <div className="flex items-center w-full rounded-lg bg-gray-800 shadow-md space-x-4">
                    <div className="flex-shrink-0 rounded-lg">
                        <img src={logo} alt={title} className="h-32 w-32 rounded-tl-lg rounded-bl-lg" />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-xl font-bold text-white line-clamp-3 mb-2">{title}</h3>
                        <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-400 text-sm mt-2">
                            {link}
                        </a>
                    </div>
                </div>
            </div>
        </a>

    );
};

export default LinksCard;
