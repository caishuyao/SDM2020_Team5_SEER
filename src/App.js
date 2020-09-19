import React from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import './App.css';
import Main from './components/main';
import {Link} from 'react-router-dom';

function App() {
  return (
<div style={{height: '300px', position: 'relative'}}>
  <Layout fixedHeader>
      <Header className="header-color" title={<span><span style={{ color: '#ddd' }}></span><strong>SEER</strong></span>}>
          <Navigation>
          <Link to="/">Home</Link>
              <Link to="/analyst">Analyst</Link>
              <Link to="/searcher">Searcher</Link>
              <Link to="/submitter">Submitter</Link>
              <Link to="/moderator">Moderator</Link>
          </Navigation>
      </Header>
      <Drawer title="SEER">
          <Navigation>
          <Link to="/">Home</Link>
            <Link to="/analyst">Analyst</Link>
              <Link to="/searcher">Searcher</Link>
              <Link to="/submitter">Submitter</Link>
              <Link to="/moderator">Moderator</Link>
          </Navigation>
      </Drawer>
      <Main/>
      <Content />
  </Layout>
</div>
  );
}

export default App;
