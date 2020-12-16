import Header from './components/Header/Header';
import ProjectsView from './components/Projects/ProjectsView';
import ProjectDetail from './components/Projects/ProjectDetail';
import PeopleDetail from './components/People/PeopleView';
import {
  Switch,
  Route,
} from "react-router-dom";
import PeopleView from './components/People/PeopleView';

function App() {
  return (
    <div className="container min-h-full min-w-full">
      <Header />
      <Switch>
        <Route component={() => <h1>home</h1>} exact path="/" />
        <Route component={PeopleView} exact path="/people" />
        <Route component={ProjectsView} exact path="/projects" />
        <Route component={ProjectDetail} path="/projects/:projectId" />
        <Route component={() => <h1>contacts</h1>} exact path="/contact" />
      </Switch>
    </div>
  );
}

export default App;
