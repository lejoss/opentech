import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import ProjectsView from './components/Projects/ProjectsView';
import ProjectDetail from './components/Projects/ProjectDetail';
import PeopleView from './components/People/PeopleView';
import {
  Switch,
  Route,
} from "react-router-dom";

function App() {
  let [state, setState] = useState({});

  useEffect(() => {
    fetch('data/api.json')
      .then(response => response.json())
      .then(data => setState(data));

  }, [])

  return (
    <div className="container min-h-full min-w-full">
      <Header />
      <Switch>
        <Route component={() => <h1>home</h1>} exact path="/" />
        <Route exact path="/people">
          <PeopleView people={state.people} />
        </Route>
        <Route exact path="/projects">
          <ProjectsView projects={state.projects} people={state.people} />
        </Route>
        <Route path="/projects/:projectId/intro">
          <ProjectDetail />
        </Route>
        <Route component={() => <h1>contacts</h1>} exact path="/contact" />
      </Switch>
    </div>
  );
}

export default App;
