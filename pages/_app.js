import '../app/globals.css';
import Sidebar from '../components/dahsboard-components/Sidebar';

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex h-screen bg-gray-100 text-gray-800">
      <Sidebar />
      <div className="flex-1 p-6 overflow-auto bg-white">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;