import { Header } from '../desktop/Header/Header'
import { Main } from '../desktop/Main/Main'

import { HeaderMobile } from '../mobile/Header/HeaderMobile'
import { MainMobile } from '../mobile/Main/MainMobile'

function App() {
  return (
    <>
      {window.innerWidth > 1000 ? <Header /> : <HeaderMobile />}
      {window.innerWidth > 1000 ? <Main /> : <MainMobile />}
    </>
  )
}

export default App
