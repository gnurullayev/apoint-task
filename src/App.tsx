import { Suspense } from "react";
import AppRoute from "./router/AppRouter";
import Layout from "./components/Layout";

function App() {
  return (
    <Suspense fallback={<p>loading</p>}>
      <Layout>
        <AppRoute />
      </Layout>
    </Suspense>
  );
}

export default App;
