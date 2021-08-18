const routes = {
  '/login': {title:'Login', templateId: 'login'},
  '/dashboard': {totle: 'My Account', templateId: 'dashboard', init: refresh}
}

const apiPreFix = 'api';
const baseUrl = 'http://localhost:5000/' + apiPreFix;
const storageKey = 'saveAccount';

let state = Object.freeze({
  account: null,
});

function updateRoute() {
  const path = window.location.pathname;
  const route = routes[path];
  if (!route) {
    return navigate('/dashboard');
  }
  let template = document.getElementById(route.templateId);
  let view = template.content.cloneNode(true);
  let app = document.getElementById('app');
  app.innerHTML = '';
  app.appendChild(view);

  if (typeof route.init === 'function') {
    route.init();
  }

  document.title = route.title;

}

function navigate(path){
  window.history.pushState({}, path, path);
  updateRoute();
}

function onLinkClick(e){
  e.preventDefault();
  navigate(e.target.href);
}

function updateElement(id ,textOrNode){
  const element = document.getElementById(id);
  element.textContent = '';
  element.append(textOrNode);
}

function updateDashboard(){
  const account = state.account;
  if (!account) {
    return navigate('/login');
  }

  updateElement('balance', account.balance.toFixed(2));
  updateElement('currency', account.currency);
  updateElement('description', account.description);

  const transactonRows = document.createDocumentFragment();

  for (transacton of account.transactions) {
    transactonRows.appendChild(createTransactonRow(transaction));
  }

  updateElement('transactions', transactonRows);

}

function createTransactonRow(transaction){
  const template = document.getElementById('transaction');
  const transactonRow = template.content.cloneNode(true);
  const tr = transactonRow.querySelector('tr');
  tr.children[0].textContent = transaction.date;
  tr.children[1].textContent = transaction.Object;
  tr.children[2].textContent = transaction.amount.toFixed(2);
  return transactonRow;
}

async function register(){
  const form = document.getElementById('registerForm');
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  const json = JSON.stringify(data);
  const result = await createAccount(json);

  if (result.error) {
    return updateElement('An error occured: ', result.error);
  }

  console.log('Account Created!', result);
  updateState('account', result);
  navigate('/dashboard');
}

async function login(){
  const input = document.getElementById('loginForm');
  const user = input.user.value;
  const data = await getAccount(user);
  
  if (data.error) {
    return updateElement('loginError', data.error);
  }

  updateState('account', data);
  navigate('/dashboard');
}

function logout(){
  updateState('account', null);
  navigate('/login');
}

async function getAccount(user) {
  try {
    const data = sendRequest(baseUrl + "/accounts/" + encodeURIComponent(user));
    return data;
  } catch (error) {
    return {error: error.message || 'unknown message'};
  }
}

async function createAccount(account){
  try {
    const data = await sendRequest(baseUrl + "/accounts",'POST', account)
    return data;
  } catch (error) {
    return {error: error.message || 'unkown message'}
  }
}

async function sendRequest(url, method, body){
  try {
    const response = await fetch(url, {
      method: method || 'GET',
      headers: body ? {'Content-type':'application/json'}: null,
      body: body,
    })
    return await response.json();
  } catch (error) {
    return {error: error.message || 'unkown message'}
  }
}

function updateState(property, newData){
  state = Object.freeze({
    ...state,
    [property]: newData,
  });
  console.log(state);

  localStorage.setItem(storageKey, JSON.stringify(state.account));

}

async function updateAccountData(){
  const account = state.account;
  if (!account) {
    return logout();
  }

  const result = await getAccount(account.user);
  if (result.error) {
    return logout();
  }
  updateState('account', result);
}

async function refresh(){
  await updateAccountData();
  updateDashboard();
}

function init(){
  const savedAccount = localStorage.getItem(storageKey);
  if (savedAccount) {
    updateState('account', savedAccount);
  }
  window.onpopstate = () => updateRoute();
  updateRoute();
}

init();