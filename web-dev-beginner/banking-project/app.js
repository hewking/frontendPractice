const routes = {
  '/login': {templateId: 'login'},
  '/dashboard': {templateId: 'dashboard'}
}

function updateRoute() {
  const path = window.location.pathname;
  const route = routes[path];
  if (!route) {
    return navigate('/login');
  }
  let template = document.getElementById(route.templateId);
  let view = template.content.cloneNode(true);
  let app = document.getElementById('app');
  app.innerHTML = '';
  app.appendChild(view);
}

function navigate(path){
  window.history.pushState({}, path, path);
  updateRoute();
}

function onLinkClick(e){
  e.preventDefault();
  navigate(e.target.href);
}

window.onpopstate = () => updateRoute();
updateRoute();