import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { useTranslation } from 'react-i18next'
import { currentNumber } from './helpers'

function App() {
  const [count, setCount] = useState(0)
  const { t, i18n } = useTranslation();
  const [hideCounter, setHideCounter] = useState(false);

  const onChangeLanguage = (language: string) => {
    console.log("changing lang");
    i18n.changeLanguage(language);
  }

  return (
    <div className="App">
      <p>Hello with translation {t('Greeting')}</p>

      <h3>{currentNumber(count)}</h3>

      <button onClick={() => onChangeLanguage("en")}>Set to English</button>
      <button onClick={() => onChangeLanguage("no")}>Set to Norwegian</button>
      {!hideCounter && <button onClick={() => setCount(count + 1)}>{t("Add")}</button>}
      <button onClick={() => setHideCounter(!hideCounter)}>{t("HideCounter")}</button>
    </div>
  )
}

export default App
