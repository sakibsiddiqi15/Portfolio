
import { withDefaultLayout } from "../components/layouts/layout.manager";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const layout = Component.layout || withDefaultLayout;
  const Page = () => layout(<Component {...pageProps} />);
  return (
    <>
      <Page />
    </>
  );
}

export default MyApp;
