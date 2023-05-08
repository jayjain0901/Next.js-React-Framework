import { MainLayout } from "@/src/components/layout/main-layout";
import "@/styles/globals.css";
import "@/styles/general.sass";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <div>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
      </div>

   
      <MainLayout >
      <Component {...pageProps} />
      </MainLayout>
      
    </div>
  );
}
