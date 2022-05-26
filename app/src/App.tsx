import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { useTranslation } from 'react-i18next'
import { currentNumber } from './helpers'
import SampleForm from './SampleForm'

function App() {
  const [count, setCount] = useState(0)
  const { t, i18n } = useTranslation();
  const [hideCounter, setHideCounter] = useState(false);
  const [showForm, setShowForm] = useState(true);

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
      <button onClick={() => onChangeLanguage("ungabunga")}>Set to Unknown</button>
      {!hideCounter && <button onClick={() => setCount(count + 1)}>{t("Add")}</button>}
      <button onClick={() => setHideCounter(!hideCounter)}>{t("HideCounter")}</button>
      {showForm && <SampleForm />}
      <button onClick={() => setShowForm(!showForm)}>{t("ShowForm")}</button>
    </div>
  )
}

export default App
