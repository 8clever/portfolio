import { makeAutoObservable } from "mobx";
import { observer } from "mobx-react-lite";
import ru_RU from "../localization/ru.json";

export type Lang = "en" | "ru";

class LangStore {
  constructor () {
    makeAutoObservable(this);
  }

	lang: Lang = "en"

	langsMap = {
		en: "EN",
		ru: "РУ"
	}

	setLang = (lang: Lang) => {
		this.lang = lang;
	}
}

export const langStore = new LangStore();

interface I18nProps {
  string: string;
}

export const I18n = observer((props: I18nProps) => {
  const translateobj = (
    langStore.lang === "ru" ? ru_RU :
    {}
  ) as {[key: string]: string};
  
  if (translateobj[props.string]) {
    return <>{translateobj[props.string]}</>;
  }
  
  if (langStore.lang !== "en") {
    console.warn("Translate not found: " + props.string);
  }

  return <>{props.string}</>;
})