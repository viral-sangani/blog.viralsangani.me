import React from 'react'
import { COLORS } from './src/components/utils'

const MagicScriptTag = () => {
    const codeToRunOnClient = `
        (function() {
            function getInitialColorMode() {
                const persistedColorPreference = window.localStorage.getItem('color-mode')
                const hasPersistedPreference = typeof persistedColorPreference === 'string'


                if (hasPersistedPreference) {
                    return persistedColorPreference
                }

                return 'dark'
            }
            const colorMode = getInitialColorMode();
            const root = document.documentElement;
            root.style.setProperty(
                '--background',
                colorMode === 'light'
                ? '${COLORS.light.background}'
                : '${COLORS.dark.background}'
            );
            root.style.setProperty(
                '--font-color',
                colorMode === 'light'
                ? '${COLORS.light.font}'
                : '${COLORS.dark.font}'
            );
            root.style.setProperty(
                '--font-secondary-color',
                colorMode === 'light'
                ? '${COLORS.light.fontSecondary}'
                : '${COLORS.dark.fontSecondary}'
            );
            root.style.setProperty(
                '--font-shadow-primary',
                colorMode === 'light'
                ? '${COLORS.light.fontShadowPrimary}'
                : '${COLORS.dark.fontShadowPrimary}'
            );
            root.style.setProperty(
                '--font-shadow-secondary',
                colorMode === 'light'
                ? '${COLORS.light.fontShadowSecondary}'
                : '${COLORS.dark.fontShadowSecondary}'
            );
            root.style.setProperty(
                '--color',
                colorMode === 'light'
                ? '${COLORS.light.color}'
                : '${COLORS.dark.color}'
            );
            root.style.setProperty(
                '--hover-color',
                colorMode === 'light'
                ? '${COLORS.light.hover}'
                : '${COLORS.dark.hover}'
            );
            root.style.setProperty('--initial-color-mode', colorMode);
            })()`
    // eslint-disable-next-line react/no-danger
    return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />
}
export const onRenderBody = ({ setPreBodyComponents }) => {
    setPreBodyComponents(<MagicScriptTag />)
}
