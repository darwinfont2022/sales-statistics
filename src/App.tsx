import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import CompaniesList from "./component/CompaniesList/CompaniesList"
import CompanyDetail from "./component/CompanyDetail/CompanyDetail"

import './App.css'
import 'antd/dist/antd.css';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/empresas' element={<CompaniesList />} />
          <Route path='/empresas/:nombre_empresa' element={<CompanyDetail />} />
          <Route path='*' element={<Navigate to='/empresas' />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;