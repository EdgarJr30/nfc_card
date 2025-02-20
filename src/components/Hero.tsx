import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGlobe, faEnvelope, faArrowUpFromBracket, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

const people = [
    {
        name: 'Carlos Portes Read',
        title: 'Ingeniero Industrial - GEISA',
        role: 'Admin',
        email: 'janecooper@example.com',
        telephone: '+1-202-555-0170',
        imageUrl:
            'https://i.imgur.com/Ix0AR2l.png',
    },
    // More people...
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

interface HeroProps {
    setActiveTab: (tab: string) => void;
    activeTab: string;
}


const Hero: React.FC<HeroProps> = ({ setActiveTab, activeTab }) => {

    // Estado controlado para los tabs
    const [tabs, setTabs] = useState([
        { name: 'Servicios' },
        { name: 'Proyectos' },
        { name: 'Equipos' },
    ]);

    // Manejador para cambiar el tab activo
    const handleTabClick = (tabName: string): void => {
        setTabs((prevTabs) =>
            prevTabs.map((tab) => ({
                ...tab,
                current: tab.name === tabName,
            }))
        );
        setActiveTab(tabName); // Actualiza el componente activo
    };

    // Función de compartir
    const handleShare = (e: React.MouseEvent<HTMLAnchorElement>): void => {
        e.preventDefault();
        if (navigator.share) {
            navigator.share({
                title: document.title,
                text: 'Mira esta página increíble',
                url: window.location.href,
            })
                .then(() => console.log('Compartido exitosamente'))
                .catch((error) => console.error('Error al compartir:', error));
        } else {
            alert('La funcionalidad de compartir no está soportada en este dispositivo.');
        }
    };

    return (
        <div className="mx-auto text-white">
            <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-6">
                {people.map((person) => (
                    <div key={person.email}>
                        {/* <li > */}
                        <div className="flex flex-1 items-start justify-between">
                            <div className='relative'>
                                <img
                                    alt=""
                                    src={person.imageUrl}
                                    className='h-28 w-28'
                                // className="h-32 w-32 flex-shrink-0 rounded-full border-1 border-transparent bg-gradient-to-r from-[#31BF5A] to-[#004A62] p-[2px]"
                                />
                            </div>
                            <div className="flex space-x-3">
                                <a
                                    onClick={handleShare}
                                    className="text-gray-300 hover:text-gray-500 text-md border border-green-700 p-3 rounded-full flex items-center justify-center w-8 h-8 cursor-pointer"
                                >
                                    <FontAwesomeIcon icon={faArrowUpFromBracket} />
                                </a>
                                <a
                                    className="text-gray-300 hover:text-gray-500 text-md border border-green-700 p-3 rounded-full flex items-center justify-center w-8 h-8 cursor-pointer"
                                >
                                    <FontAwesomeIcon icon={faMoon} />
                                </a>
                                {/* <LanguageSelector/> */}
                                {/* <button className="font-bold bg-green-500 px-4 py-2 rounded">PT-BR</button> */}
                            </div>
                        </div>

                        <div className="mt-4">
                            <h2 className="text-2xl font-bold pb-1">{person.name}</h2>
                            <p className="text-md pb-2 text-gray-400">{person.title}</p>
                            <div className="flex items-center space-x-6 my-4">
                                <a
                                    href="tel:+1234567890"
                                    className="p-[1px] rounded-full bg-gradient-to-b from-[#31BF5A] to-[#004A62] px-4 py-2 text-sm font-semibold flex items-center justify-center space-x-2"
                                >
                                    <span>Contacto</span>
                                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                                </a>

                                <div className="flex items-center space-x-2">
                                    <a
                                        href="#"
                                        className="hover:text-yellow-500 text-md border border-green-700 p-3 rounded-full flex items-center justify-center w-8 h-8"
                                    >
                                        <FontAwesomeIcon icon={faGlobe} />
                                    </a>
                                    <a
                                        href="#"
                                        className="hover:text-green-500 text-md border border-green-700 p-3 rounded-full flex items-center justify-center w-8 h-8"
                                    >
                                        <FontAwesomeIcon icon={faWhatsapp} />
                                    </a>
                                    <a
                                        href="#"
                                        className="hover:text-blue-500 text-md border border-green-700 p-3 rounded-full flex items-center justify-center w-8 h-8"
                                    >
                                        <FontAwesomeIcon icon={faLinkedin} />
                                    </a>
                                    <a
                                        href="#"
                                        className="hover:text-pink-500 text-md border border-green-700 p-3 rounded-full flex items-center justify-center w-8 h-8"
                                    >
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </a>

                                    <a
                                        href="mailto:example@example.com"
                                        className="hover:text-red-500 text-md border border-green-700 p-3 rounded-full flex items-center justify-center w-8 h-8"
                                    >
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between font-semibold">
                            <div>
                                <div className="rounded-full shadow-lg p-2 bg-black border border-green-700">
                                    <nav aria-label="Tabs" className="flex space-x-1">
                                        {tabs.map((tab) => (
                                            <button
                                                key={tab.name}
                                                onClick={() => handleTabClick(tab.name)}
                                                className={classNames(
                                                    activeTab === tab.name
                                                        ? "bg-gray-700 text-gray-300"
                                                        : "text-white hover:text-gray-300",
                                                    "rounded-full px-3 py-1 text-sm font-medium transition-all duration-300 ease-in-out"
                                                )}
                                            >
                                                {tab.name}
                                            </button>
                                        ))}
                                    </nav>
                                </div>
                            </div>
                        </div>
                        {/* </li> */}
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default Hero;
