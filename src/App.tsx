import { createRenderer } from "fela";
import { RendererProvider } from "react-fela";
import { BrowserRouter } from "react-router-dom";
import { Card } from "./Components/Card/Card";
import "antd/dist/antd.css";
import Pages from "./Pages";
import { QueryClient, QueryClientProvider } from "react-query";
import { NavBar } from "./NavBar";

interface ITemplateProps {
  headerContent?: string;
}

const queryClient = new QueryClient();

const renderer = createRenderer();

const App: React.FC<ITemplateProps> = () => {
  return (
    <div>
      <RendererProvider renderer={renderer}>
        <QueryClientProvider client={queryClient}>
          <Card>
            <BrowserRouter>
              <NavBar />
              <Pages />
            </BrowserRouter>
          </Card>
        </QueryClientProvider>
      </RendererProvider>
    </div>
  );
};

export default App;
