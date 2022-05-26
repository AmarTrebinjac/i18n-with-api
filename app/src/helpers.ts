import i18next from './i18n'


export const currentNumber = (currentNumber: number): string => {
    return `${i18next.t('CurrentNumber')}: ${currentNumber}`;
}