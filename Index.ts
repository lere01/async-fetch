import fetchFunction from "./fetch/fetch";
import asyncFunction from "./async/async";

const Index = (requestBody: Object, immediate: boolean = false) => {
  return asyncFunction(() => fetchFunction(requestBody), immediate); 
};

module.exports.asyncFetch = Index;
