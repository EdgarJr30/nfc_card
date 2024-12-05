type Project = {
    name: string;
    href: string;
    image?: string;
    logoUrl?: string;
    members?: number;
    bgColor?: string;
};

// Mapeo de palabras clave en el nombre del proyecto a logos y colores de redes sociales
// const socialMediaMap: { [key: string]: { logoUrl: string; bgColor: string } } = {
//     "Facebook ": {
//         logoUrl: "https://cdn-icons-png.freepik.com/512/5968/5968764.png?ga=GA1.2.1997301773.1716259094",
//         bgColor: "bg-blue-600"
//     },
//     "Twitter": {
//         logoUrl: "https://cdn-icons-png.freepik.com/512/3256/3256013.png?ga=GA1.1.1997301773.1716259094",
//         bgColor: "bg-blue-400"
//     },
//     "Instagram": {
//         logoUrl: "https://cdn-icons-png.freepik.com/512/2111/2111463.png?ga=GA1.1.1997301773.1716259094",
//         bgColor: "bg-pink-500"
//     },
//     "Linkedin": {
//         logoUrl: "https://cdn-icons-png.freepik.com/512/3536/3536505.png?ga=GA1.2.1997301773.1716259094",
//         bgColor: "bg-blue-700"
//     }
// };

const projects: Project[] = [
    { name: 'Facebook ', href: 'https://www.facebook.com/', members: 16, image: 'https://altertecnia.com/wp-content/uploads/ingenieria-de-proyectos-industriales.jpg' },
    { name: 'Twitter', href: 'https://www.x.com/', members: 2500 },
    { name: 'Instagram', href: 'https://www.instagram.com/' },
    { name: 'Linkedin', href: 'https://www.linkedin.com/' },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Links = () => {
    return (
        <>
            <div className='m-6'>
                <h2 className="text-sm font-medium text-gray-500">Información de Equipos</h2>
                <ul role="list" className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
                    {projects.map((project) => {
                        // Obtener logo y color de fondo según el nombre del proyecto
                        // const { logoUrl, bgColor } = socialMediaMap[project.name] || { logoUrl: '', bgColor: 'bg-gray-200' };

                        return (
                            <li key={project.name} className="col-span-1 flex rounded-md shadow-sm">
                                <div
                                    className={classNames(
                                        // bgColor,
                                        'flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white',
                                    )}
                                >
                                    {/* Mostrar el logo si está disponible */}
                                    {/* {logoUrl ? ( */}
                                        <img src={project.image} alt={project.name} className="h-8 w-8 rounded-full" />
                                    {/* ) : ( */}
                                        <span className="h-8 w-8 bg-gray-400 rounded-full"></span>
                                    {/* )} */}
                                </div>
                                <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
                                    <div className="flex-1 truncate px-4 py-2 text-sm">
                                        <a href={project.href} className="font-medium text-gray-900 hover:text-gray-600">
                                            {project.name}
                                        </a>
                                        <p className="text-gray-500">{project.members ? `${project.members} Seguidores` : ''}</p>
                                    </div>
                                    {/* BOTONES DE OPCIONES PARA ABRIR MENU DE EDICION DE LOS LINKS PARA USUARIO OWNER */}
                                    {/* <div className="flex-shrink-0 pr-2">
                                        <button
                                            type="button"
                                            className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-transparent bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                        >
                                            <span className="sr-only">Open options</span>
                                            <EllipsisVerticalIcon aria-hidden="true" className="h-5 w-5" />
                                        </button>
                                    </div> */}
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    )
}

export default Links