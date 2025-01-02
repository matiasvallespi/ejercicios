import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { All } from './components/All'
import { PaginaCalculadora } from './components/Calculadora/PaginaCalculadora'
import { PaginaAbout } from './components/About/PaginaAbout'
import { PaginaHome } from './components/Home/PaginaHome'
import { PaginaToDoList } from './components/ToDoList/PaginaToDoList'
import { HideShow } from './components/HideShow/HideShow'
import { Temperature } from './components/Temperature/Temperature'
import { RandomNumber } from './components/RandomNumber/RandomNumber'
import { RandomName } from './components/RandomName/RandomName'
import { CalculateAge } from './components/CalculateAge/CalculateAge'
import { FilterList } from './components/FilterList/FilterList'
import { PasteImages } from './components/PasteImages/PasteImages'
import { Contador } from './components/Contador/Contador'
import { Quiz } from './components/Quiz/Quiz'
import { Palindromos } from './components/Palindromos/Palindromos'
import { ListProd } from './components/Products/ListProd'
import { FiguraGeom } from './components/Area/FiguraGeom'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes >
          <Route path='/' element={<Header />}>
            <Route index element={<All />} />
            <Route path='/home' element={<PaginaHome />} />
            <Route path='/about' element={<PaginaAbout />} />
            <Route path='/calculadora' element={<PaginaCalculadora />} />
            <Route path='/to-do-list' element={<PaginaToDoList />} />
            <Route path='/hide-show' element={<HideShow />} />
            <Route path='/temperature' element={<Temperature />} />
            <Route path='/random-number' element={<RandomNumber />} />
            <Route path='/random-name' element={<RandomName />} />
            <Route path='/calculate-age' element={<CalculateAge />} />
            <Route path='/filter-list' element={<FilterList />} />
            <Route path='/paste-images' element={<PasteImages />} />
            <Route path='/contador' element={<Contador />} />
            <Route path='/quiz' element={<Quiz />} />
            <Route path='/palindromos' element={<Palindromos />} />
            <Route path='/listProd' element={<ListProd />} />
            <Route path='/area' element={<FiguraGeom />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>)
}

export default App
