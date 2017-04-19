import React,{Component}from 'react';
import ReactDOM from 'react-dom';
import MainFrame from "./src/main";
import { Router, Route, hashHistory,IndexRoute} from 'react-router';
import FirstPage from './src/login/firstPage';

import {NoticePage, SystemNoticePage, NoticeDetailPage} from "./src/login/noticeList"
import {LoginPage} from "./src/login/innerLogin"
import UserLoginPage from "./src/login/userLogin"
ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/innerlogin" component={LoginPage}/>
    <Route path="/userlogin" component={UserLoginPage}>
    	<IndexRoute component={FirstPage} />
    	<Route name="firstPage" path="firstPage" component={FirstPage}/>
    	<Route name="noticePage" path="noticePage" component={NoticePage} >
    		<IndexRoute component={SystemNoticePage} />
    		<Route path="sysnotice" component={SystemNoticePage}/>
    		<Route path="noticeDetail" name="noticeDetail" component={NoticeDetailPage}/>
    	</Route>
    </Route>
  </Router>
), document.getElementById('root'));

// ReactDOM.render(<MainFrame />, document.getElementById('root'));
