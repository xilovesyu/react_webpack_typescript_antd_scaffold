import IntlMessageFormat from 'intl-messageformat'
import { languageStore } from '../store/LanguageStore'

import { zh_CN } from '../locale/zh_CN'
import { en_US } from '../locale/en_US'
import { fr_FR } from '../locale/fr_FR'

const MESSAGES: any = {
    en: en_US, fr: fr_FR, zh: zh_CN
}
export function t(key: string, defaultMessage?: string, options?: any): any {
    const sysLocale = languageStore.intlLanguage
    let msg = MESSAGES[sysLocale][key]
    if (msg === null) {
        if (defaultMessage !== null) {
            return defaultMessage
        }
        return key
    }
    if (options) {
        msg = new IntlMessageFormat(msg, sysLocale)
        return msg.format(options)
    }
    return msg
}
