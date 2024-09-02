import { useState } from "react";
import translations, { Lang } from "./translations";
import { Button } from "./ui/button";
import { Toaster } from "./ui/toaster";
import { TooltipProvider } from "./ui/tooltip";

export default function App() {
  const [lang, setLang] = useState<Lang>("pt-BR");
  function handleLangChange() {
    setLang(lang === "pt-BR" ? "en-US" : "pt-BR");
  }
  return (
    <TooltipProvider>
      <Button
        onClick={handleLangChange}
        variant={"outline"}
        className="absolute top-5 right-5"
      >
        {lang === "pt-BR" ? "English" : "Português"}
      </Button>
      <div className="flex flex-col items-center justify-center w-full h-full min-h-screen gap-10 sm:flex-row">
        <img
          alt="My Github avatar"
          draggable="false"
          src="https://avatars.githubusercontent.com/u/48167880?v=4"
          className="rounded-full opacity-80 max-w-[250px] w-full"
        />

        <div className="sm:w-px bg-gray-300 w-[250px] h-px sm:h-[250px]"></div>

        <p className="max-w-[250px] text-sm sm:text-base text-center sm:text-start leading-7 sm:max-w-[400px] opacity-70">
          {translations[lang]["Hello, my name is"]} <b>Jonas de Melo</b>.
          <br />
          <br />
          {translations[lang]["Systems Analyst and Developer by Unileão."]}
          <br />
          {
            translations[lang][
              "I enjoy building scalable and well-structured web applications."
            ]
          }
          <br />
          {
            translations[lang][
              "I'm always learning and experimenting with new technologies."
            ]
          }
          <br />
        </p>
      </div>
      <Toaster />
    </TooltipProvider>
  );
}
