const loadData = (url, cb) => {
  const Request = new XMLHttpRequest();
  Request.overrideMimeType("application/json");
  Request.open('GET', url);
  Request.send();
  Request.onreadystatechange = function() {
    if (Request.readyState === 4 && Request.status == "200") {
      cb(Request.responseText);
    }
  }
}