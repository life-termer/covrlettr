import Container from "../_components/Container";
import Footer from "../_components/Footer";
import Header from "../_components/Header";

export default function Layout({ children }) {
  return (
    <main className="w-full min-h-screen flex flex-col">
      <Header type="blog" />
      <Container>
        <div className="mt-24">{children}</div>
      </Container>
      <Footer />
    </main>
  );
}
