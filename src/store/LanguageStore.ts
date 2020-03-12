import { observable, action } from 'mobx'
import zhCN from 'antd/es/locale/zh_CN'
import enUS from 'antd/es/locale/en_US'
import frFR from 'antd/es/locale/fr_FR'

import { zh_CN } from '../locale/zh_CN'
import { en_US } from '../locale/en_US'
import { fr_FR } from '../locale/fr_FR'

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
    }
    @action.bound
    toEN() {
        this.antdLanguage = enUS
        this.intlLanguage = 'en'
        this.intlMsg = en_US
        this.momentLanguage = 'en_US'
    }
    @action.bound
    toCN() {
        this.antdLanguage = zhCN
        this.intlLanguage = 'zh'
        this.intlMsg = zh_CN
        this.momentLanguage = 'zh-CN'
    }
}

const languageStore = new LanguageStore()

export {languageStore}