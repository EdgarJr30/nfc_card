import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import LinksCard from "./components/LinksCard";
import Footer from "./components/Footer";

interface Content {
  logo: string;
  title: string;
  link: string;
  pdfLink: string;
}

const App = () => {

  const [activeTab, setActiveTab] = useState("Servicios");
  const [content, setContent] = useState<Content[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Oculta el contenido antes de cambiar
    setIsVisible(false);

    const timeout = setTimeout(() => {
      // Muestra el nuevo contenido después de un breve retraso
      setContent(getContent());
      setIsVisible(true);
    }, 300); // El tiempo debe coincidir con la duración de la animación

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab]);

  const getContent = () => {
    switch (activeTab) {
      case "Servicios":
        return [
          {
            logo: "https://i.imgur.com/tNJYbpR.png",
            title: "Control de Filtraciones",
            link: "Casas, edificios y corporaciones",
            pdfLink: "https://pdfobject.com/pdf/sample.pdf"
          },
          {
            logo: "https://i.imgur.com/BBAdP8k.png",
            title: "Ingeniería Civil",
            link: "Construcción",
            pdfLink: "https://pdfobject.com/pdf/sample.pdf"
          },
          {
            logo: "https://i.imgur.com/mz1RmmI.png",
            title: "Ingeniería Industrial",
            link: "Instalaciones  y Mantenimiento",
            pdfLink: "https://pdfobject.com/pdf/sample.pdf"
          },
          {
            logo: "https://i.imgur.com/TK3MBO9.png",
            title: "Didáctica",
            link: "Diseño de Laboratorios educativos",
            pdfLink: "https://pdfobject.com/pdf/sample.pdf"
          },
          {
            logo: "https://i.imgur.com/vHmj5vL.png",
            title: "Termografía",
            link: "Incendios, Detección de fugas en estructuras...",
            pdfLink: "https://pdfobject.com/pdf/sample.pdf"
          },
          {
            logo: "https://i.imgur.com/vHmj5vL.png",
            title: "Inspecciones Subterráneas",
            link: "www.behance.com",
            pdfLink: "https://pdfobject.com/pdf/sample.pdf"
          }
        ];
      case "Proyectos":
        return [
          {
            logo: "https://i.imgur.com/M42RUGF.png",
            title: "Suministro e Instalación de la junta de expansión del HRSG central térmica AES ANDRES",
            link: "Ingeniería Industrial",
            pdfLink: "https://pdfobject.com/pdf/sample.pdf"
          },
          {
            logo: "https://i.imgur.com/AMPGMhW.png",
            title: "Turbogenerador de la Unidad Itabo II",
            link: "Ingeniería Industrial",
            pdfLink: "https://pdfobject.com/pdf/sample.pdf"
          },
          {
            logo: "https://i.imgur.com/ybPvLFm.png",
            title: "Suministro e Instalación del Sistema de malla de seguridad altamente resistente y de fácil acceso.",
            link: "Ingeniería Industrial",
            pdfLink: "https://pdfobject.com/pdf/sample.pdf"
          },
          {
            logo: "https://i.imgur.com/uvdJ1GW.png",
            title: "Diseño, Suministro e Instalación de los Chaquetones para el Muelle Internacional de Itabo y AES Andrés",
            link: "Ingeniería Industrial",
            pdfLink: "https://pdfobject.com/pdf/sample.pdf"
          }
        ];
      default:
        return [
          {
            logo: "https://i.imgur.com/waIu47D.png",
            title: "Fabricante líder internacional de sistemas de accionamiento mecánicos y eléctricos",
            link: "www.flender.com",
            pdfLink: "https://pdfobject.com/pdf/sample.pdf"
          },
          {
            logo: "https://i.imgur.com/mYSfNXy.png",
            title: "Fabricante de bombas, soplantes, compresores y sistemas de vacío",
            link: "www.buschvacuum.com",
            pdfLink: "https://pdfobject.com/pdf/sample.pdf"
          },
          {
            logo: "https://i.imgur.com/IqrGG1M.png",
            title: "Líder de herramientas para tubos que suministra expansores, tapones para tubos, sistemas de limpieza.",
            link: "www.elliott-tool.com",
            pdfLink: "https://pdfobject.com/pdf/sample.pdf"
          },
          {
            logo: "https://i.imgur.com/K0rujgm.png",
            title: "Soluciones de aire comprimido, gas y vacío. ",
            link: "www.aerzenrentalth.com",
            pdfLink: "https://pdfobject.com/pdf/sample.pdf"
          }
        ];
    }
  };

  return (
    <div className="bg-gray-800 min-h-screen">
      <Hero setActiveTab={setActiveTab} activeTab={activeTab} />
      <div
        className={`transition-opacity duration-500 ease-in-out ${isVisible ? "opacity-100" : "opacity-0"
          }`}
      >
        {content.map((item, index) => (
          <LinksCard key={`${activeTab}-${index}`} {...item as Content} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default App;

