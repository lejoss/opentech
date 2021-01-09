import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Home from './components/Home';
import ProjectsView from './components/Projects/ProjectsView';
import ProjectDetail from './components/Projects/ProjectDetail';
import PeopleView from './components/People/PeopleView';
import {
  Switch,
  Route,
} from "react-router-dom";
import { mapToKeys } from './services';

const initialState = {
  home: {},
  people: {},
  projects: {},
  contact: {},
};

const MAX_PROJECTS_TO_SHOW_IN_HOME = 2;

function initializeApp() {
  return JSON.parse(localStorage.getItem('app')) || initialState;
}

function App() {
  let [state, setState] = useState(initializeApp);

  useEffect(() => {
    fetch('data/api.json')
      .then(response => response.json())
      .then(data => {
        setState(data);
        localStorage.setItem('app', JSON.stringify(data));
      });
  }, [])

  // useEffect(() => {
  //   localStorage.setItem('app', state);
  // }, [state])

  const latestProjects = state.projects.list && state.projects.list.length > 0 && state.projects.list.filter((p, i) => i <= MAX_PROJECTS_TO_SHOW_IN_HOME ? true : false);
  
  return (
    <div className="container min-h-full min-w-full">
      <Header />
      <Switch>
        <Route exact path="/">
            <Home latestProjects={latestProjects} people={state.people.list} />
        </Route>
        <Route exact path="/people">
          <PeopleView people={state.people} />
        </Route>
        <Route exact path="/projects">
          <ProjectsView projects={state.projects} people={state.people} />
        </Route>
        <Route path="/projects/:projectId/intro">
          <ProjectDetail projects={mapToKeys(state.projects.list) || {}} />
        </Route>
      </Switch>
    </div>
  );
}


export default App;
