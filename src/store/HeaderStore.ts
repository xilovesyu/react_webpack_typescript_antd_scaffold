import { action, observable } from 'mobx'

class HeaderStore {
    @observable colorPanelOpen = false
    @action
    setColorPanelOpen(open: boolean) {
        this.colorPanelOpen = open
    }
}

const headerStore = new HeaderStore()

const HEADER_STORE = 'headerStore'

export {headerStore, HEADER_STORE}