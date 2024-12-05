import { useState } from "react";

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("pt-BR");

  const handleChangeLanguage = (language: string) => {
    setSelectedLanguage(language);
    // Lógica para cambiar el idioma de la aplicación aquí
    console.log("Idioma seleccionado:", language);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        className="font-bold bg-green-500 px-4 py-2 rounded flex items-center"
        id="menu-button"
        aria-expanded="true"
        aria-haspopup="true"
      >
        {selectedLanguage === "pt-BR" ? "PT-BR" : "EN"}
      </button>
      <div
        className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
      >
        <div className="py-1">
          <button
            onClick={() => handleChangeLanguage("pt-BR")}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
          >
            Português (Brasil)
          </button>
          <button
            onClick={() => handleChangeLanguage("en")}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
          >
            English
          </button>
          {/* Agrega más idiomas aquí */}
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;
