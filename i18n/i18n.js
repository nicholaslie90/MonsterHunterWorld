import I18n from 'react-native-i18n';
import ch from "./ch";
import de from "./de";
import en from './en';
import es from "./es";
import fr from "./fr";
import it from './it';
import jp from "./jp";
import kr from "./kr";
import pt from "./pt";
import th from "./th";
import zh from "./zh";

I18n.fallbacks = true;

I18n.translations = {
    ch,
    de,
    en,
    es,
    fr,
    it,
    jp,
    kr,
    pt,
    th,
    zh,
};

export default I18n;