import { observable, action } from 'mobx'
import zhCN from 'antd/es/locale/zh_CN'
import enUS from 'antd/es/locale/en_US'
import frFR from 'antd/es/locale/fr_FR'

import { zh_CN } from '../locale/zh_CN'
import { en_US } from '../locale/en_US'
import { fr_FR } from '../locale/fr_FR'
import { LanguageSession } from '../util/constant/SessionConstant'

class LanguageStore {
    @observable antdLanguage: any = zhCN

    @observable intlLanguage = 'zh'

    @observable intlMsg = zh_CN

    @observable momentLanguage = 'zh_CN'

    @action.bound
    toFr() {
        this.antdLanguage = frFR
        this.intlLanguage = 'fr'
        this.intlMsg = fr_FR
        this.momentLanguage = 'fr'
        this.saveToSession()
    }
    @action.bound
    toEN() {
        this.antdLanguage = enUS
        this.intlLanguage = 'en'
        this.intlMsg = en_US
        this.momentLanguage = 'en_US'
        this.saveToSession()
    }
    @action.bound
    toCN() {
        this.antdLanguage = zhCN
        this.intlLanguage = 'zh'
        this.intlMsg = zh_CN
        this.momentLanguage = 'zh-CN'
        this.saveToSession()
    }
    @action.bound
    getIntlMsgByIntlLanguage() {
        const intlLanguage = this.intlLanguage
        let intlMsg
        switch (intlLanguage) {
            case 'zh': intlMsg = zh_CN; break;
            case 'fr': intlMsg = fr_FR; break;
            case 'en': intlMsg = en_US; break;
            default: intlMsg = zh_CN; break;
        }
        this.intlMsg = intlMsg
    }
    @action.bound
    saveToSession() {
        sessionStorage.setItem(LanguageSession.ANTD_LANGUAGE, JSON.stringify(this.antdLanguage))
        sessionStorage.setItem(LanguageSession.MOMENT_LANGUAGE, this.momentLanguage)
        sessionStorage.setItem(LanguageSession.INTL_LANGUAGE, this.intlLanguage)
    }
    @action.bound
    getFromSession() {
        const antdLanguages: any= sessionStorage.getItem(LanguageSession.ANTD_LANGUAGE)
        const momentLanguage = sessionStorage.getItem(LanguageSession.MOMENT_LANGUAGE)
        const intlLanguage = sessionStorage.getItem(LanguageSession.INTL_LANGUAGE)
        this.antdLanguage = antdLanguages ?  JSON.parse(antdLanguages): zhCN
        this.momentLanguage = momentLanguage ? momentLanguage : 'zh-CN'
        this.intlLanguage = intlLanguage ? intlLanguage : 'zh'
        this.getIntlMsgByIntlLanguage()
    }
}

const languageStore = new LanguageStore()

//get language from session storage.
languageStore.getFromSession()

export {languageStore}