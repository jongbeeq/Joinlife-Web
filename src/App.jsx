import Loading from "./components/Loading";
import { useAuth } from "./hooks/use-auth";
import Route from "./router/Route"
import { ToastContainer } from 'react-toastify';

function App() {
  const { initialLoading } = useAuth();
  if (initialLoading) {
    return <Loading />;
  }
  return (
    <>
      <Route />
      <ToastContainer position="bottom-center" autoClose={3000} theme='dark' />
    </>
  )
}

export default App
