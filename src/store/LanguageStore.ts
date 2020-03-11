import { observable, action } from 'mobx'
import zhCN from 'antd/es/locale/zh_CN'
import fr_FR from 'antd/es/locale/fr_FR'

class LanguageStore {
    @observable language: any = zhCN

    @action.bound
    toFr() {
        this.language = fr_FR
    }
    @action.bound
    toCN() {
        this.language = zhCN
    }
}

const languageStore = new LanguageStore()

export {languageStore}