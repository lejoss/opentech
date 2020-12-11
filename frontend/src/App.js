import Header from './components/Header/Header';
import ProjectView from './components/Projects/ProjectView';
import ProjectDetail from './components/Projects/ProjectDetail';
import {
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="container bg-gray-200">
      <Header />
      <Switch>
        <Route component={() => <h1>home</h1>} exact path="/" />
        <Route component={() => <h1>people</h1>} path="/people" />
        <Route component={ProjectView} exact path="/projects" />
        <Route component={ProjectDetail} path="/projects/:projectId" />
        <Route component={() => <h1>contacts</h1>} exact path="/contact" />
      </Switch>
    </div>
  );
}

export default App;
