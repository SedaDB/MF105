import { BrowserRouter, Route, Routes } from "react-router";
import Home from './pages/Home';
import Create from './pages/Create';
import Detail from "./pages/Detail";
import Header from "./components/header";
import Footer from "./components/footer";
import CreateHooksForm from "./pages/CreateHooksForm";
import PageNotFound from "./pages/PageNotFound";
export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/popular' element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/create/zod' element={<CreateHooksForm />} />
        <Route path="/place/:id" element={<Detail />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
