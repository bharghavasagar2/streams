import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import StreamsList from "./streams/StreamsList";
import StreamCreate from "./streams/StreamCreate";
import StreamShow from "./streams/StreamShow";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import Header from "./Header";

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={StreamsList} />
          <Route path="/streans/new" exact component={StreamCreate} />
          <Route path="/streans/edit" exact component={StreamEdit} />
          <Route path="/streans/delete" exact component={StreamDelete} />
          <Route path="/streans/show" exact component={StreamShow} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
