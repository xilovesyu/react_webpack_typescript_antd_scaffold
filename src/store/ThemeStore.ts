import { action, observable, reaction } from 'mobx'
import darkVars from 'antd/dist/dark-theme'
import lightColors from '../../antdThemes/lightColors'
import lightDefaultStyles from '../../antdThemes/lightDefaultStyles'

type ThemeMode = 'light' | 'dark'

class ThemeStore {
    constructor() {
        reaction(
            () => [this.mode, this.primaryColor],
            ([mode, primaryColor]: any) => {
                this.setChangeThemeLoading(true)
                const variables = mode === 'dark' ? {...darkVars} : {...lightColors, ...lightDefaultStyles};
                (window as any)
                    .less
                    .modifyVars({
                        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                        // @ts-ignore
                        'hack': `true;@import "${require.resolve('antd/lib/style/color/colorPalette.less')}";`,
                        ...variables,
                        '@primary-color': primaryColor
                    })
                    .then(() => {
                        console.log('update success')
                        this.setChangeThemeLoading(false)
                    })
                    .catch((e: any) => {
                        console.log('failed', e)
                        this.setChangeThemeLoading(false)
                    })
            }
        )
    }

    @observable mode: ThemeMode = 'light'
    @observable loading = false
    @observable primaryColor = '#1714ff'

    @action
    setChangeThemeLoading(loading: boolean) {
        this.loading = loading
    }

    @action
    setPrimaryColor(color: string) {
        this.primaryColor = color
    }

    @action
    setThemeMode(mode: ThemeMode) {
        this.mode = mode
    }
}


const themeStore = new ThemeStore()

export { themeStore }