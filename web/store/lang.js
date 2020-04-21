import { decorate, observable, action } from "mobx";
import { observer } from "mobx-react-lite";
import ru_RU from "../localization/ru";

class LangStore {
	lang = "en"

	langsMap = {
		en: "EN",
		ru: "РУ"
	}

	setLang = (lang) => {
		this.lang = lang;
	}
}

decorate(LangStore, {
	lang: observable,

	setLang: action
});

export const langStore = new LangStore();

export const I18n = observer((props) => {
  const translateobj = (
    langStore.lang === "ru" && ru_RU ||
    {}
  );
  
  if (translateobj[props.string]) {
    return translateobj[props.string];
  }
  
  if (langStore.lang !== "en") {
    console.warn("Translate not found: " + props.string);
  }

  return props.string;
})