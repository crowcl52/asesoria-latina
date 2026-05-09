import en from './en.json';
import es from './es.json';

export type Lang = 'es' | 'en';

export type Messages = typeof es;

const byLang: Record<Lang, Messages> = {
	es,
	en: en as Messages,
};

export function getMessages(lang: Lang): Messages {
	return byLang[lang] ?? es;
}

export function isLang(value: string): value is Lang {
	return value === 'es' || value === 'en';
}
