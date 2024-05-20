import Nav from "../components/nav";
import Footer from "../components/Footer";
function Layout({ children }) {
  return (
    <div>
      <Nav />
      <main className="flex-1 min-h-[100vh]">{children}</main>
      <Footer />
    </div>
  );
}
export default Layout
