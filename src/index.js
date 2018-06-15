import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import classes from "./index.css";
import App from "./app";
import appClass from "./app.css";
import axios from "axios";
import alertify from "alertify.js";
import configureStore from "./store/configureStore";
import {previewHtml} from "./actions/actionsTemplate";
// const App = () => {
//   return <div className={classes.App}> Hello Test React!!</div>
// }

const store = configureStore();

store.dispatch(previewHtml("html ul meu"));
const state = store.getState();

console.log(state);

alertify.logPosition("top right");

const TOKEN =
  "eyJpZCI6MSwiY29kZSI6Ijk5NDc3NDk0LTZmNWUtNDlhNy1iMzMyLTMwMTViNjZkYzk3NSIsImZpcnN0TmFtZSI6IkFkbWluIiwibGFzdE5hbWUiOiJVc2VyIiwiZW1haWwiOiJhZG1pbkB2YXViYW4ucm8iLCJjcmVhdGVkIjoxNTE3OTIxMzkzOTg4LCJhY3RpdmUiOnRydWUsInBob25lIjoiMDEwMTAxMDEwMTAiLCJyb2xlIjp7ImlkIjoxLCJuYW1lIjoiQURNSU4iLCJkZXNjcmlwdGlvbiI6IkFkbWluaXN0cmF0b3IiLCJtYW5hZ2VyIjpmYWxzZSwicHJvZHVjdHNTZXJ2aWNlcyI6ZmFsc2V9LCJjb21wYW55Ijp7ImlkIjoxLCJuYW1lIjoiVmF1YmFuIElUIFJPIiwiZGF0ZUNyZWF0ZWQiOjE1MTc5MjEzOTM5NzEsImRlc2NyaXB0aW9uIjpudWxsLCJzdGFydFN1YnNjcmlwdGlvbiI6MTUxNzkyMjEwNTYxNywiZW5kU3Vic2NyaXB0aW9uIjoxNTQ5NDU4MTA1NjE3LCJzdWJzY3JpcHRpb25QbGFuIjp7ImlkIjo0LCJuYW1lIjoiRW50ZXJwcmlzZSIsImV2ZW50cyI6LTEsImd1ZXN0cyI6LTEsImVtYWlscyI6LTEsInNtcyI6dHJ1ZSwic2NoZWR1bGVFbWFpbCI6dHJ1ZSwibm9uTm9taW5hbCI6dHJ1ZSwiZ3JvdXBzIjp0cnVlLCJleHBvcnQiOnRydWUsImN1c3RvbWl6ZVB1YmxpYyI6dHJ1ZSwibW9iaWxlQXBwIjp0cnVlLCJwZXJpb2QiOiIwXzEyIiwibWFpbnRlbmFuY2UiOnRydWUsImF2YWlsYWJpbGl0eSI6IjBfMTIiLCJzdG9yYWdlTGltaXQiOjEwMDAsInByaWNlIjowLjAsImN1cnJlbmN5Ijp7ImlkIjoxLCJjb2RlIjoiRVVSIn0sInNlYXRNYW5hZ2VtZW50Ijp0cnVlLCJub09mU2VhdE1hbmFnZW1lbnRFdmVudHMiOi0xLCJwZXJpb2RDaGVja0FmdGVyRXhwciI6dHJ1ZSwicHJvZHVjdHNTZXJ2aWNlIjp0cnVlLCJiaVJlcG9ydHMiOnRydWUsImNyZWF0ZWREYXRlIjoxNTE3OTIxMzkzNjcyLCJiYXNpYyI6dHJ1ZX0sImFjdGl2ZSI6dHJ1ZSwibGFuZ3VhZ2UiOnsiaWQiOjE3LCJjb2RlIjoiZW4iLCJhcHBMYW5ndWFnZSI6dHJ1ZX0sImNvdW50cnkiOm51bGwsImJhbmtBY2NvdW50IjpudWxsLCJjdXJyZW5jeSI6bnVsbCwic2NoZW1hTmFtZSI6ImV2bWFuYWdlciIsInNjaGVtYUNvZGUiOiI4NzU4MzQ0OC1jNDQ1LTQzYzEtYWEzMi0yZjM3ZmNiMGVmYjUiLCJwZXJzb25hbCI6bnVsbH0sImFkZHJlc3MiOm51bGwsInppcENvZGUiOm51bGwsInBlcnNvbmFsQWNjb3VudCI6ZmFsc2UsInJlc2V0VG9rZW4iOm51bGwsInJlc2V0VG9rZW5FeHBpcnlEYXRlIjpudWxsLCJkZXZpY2VSZWdpc3RyYXRpb25zIjp7fSwicmVnaXN0cmF0aW9uc01ldGFkYXRhcyI6W10sInN0YXR1cyI6bnVsbCwicHJpbWFyeUNvbnRhY3QiOmZhbHNlLCJleHBpcmVzIjoxNTI2OTgzNTYyODczLCJyZW1vdGVBZGRyIjoiMTI3LjAuMC4xIiwicmVtb3RlSG9zdCI6IjEyNy4wLjAuMSIsInVzZXJuYW1lIjoiYWRtaW5AdmF1YmFuLnJvIiwicm9sZXMiOlsiQURNSU4iXX0=.meJBVFMVUKGOClFLv7zLNBTu/1L5QqU+1RQNgBwfVc8=";


axios.defaults.baseURL = "http://192.168.100.118:8080";
// axios.defaults.headers.common['X-AUTH-TOKEN'] = TOKEN;
// axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use((request) => {
  // the request that was send. 
  // console.log(request);
  // Edit the request.config
  return request;
}, (error) => {
  console.log(error);
  // to get the error in the catch
  // and not see the error from above console.log
  // this is specially for sending the request
  return Promise.reject(error);
});

axios.interceptors.response.use((response) => {
  // the request that was send.
  // console.log(response);
  // Edit the request.config
  return response;
},
  error => {
    // console.log(error);
    // to get the error in the catch
    // and not see the error from above console.log
    // this is specially for sending the request
    return Promise.reject(error);
  }
);

ReactDOM.render(<App style={appClass.app} />, document.getElementById("app"));