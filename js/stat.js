let data;
const stats = document.querySelector('.stats')

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

const statDomMaking = (data) => {
  for(let i =0; i<data.stats.length; i++){
    const stat = document.createElement('li')
    stat.classList.add('stat')
    let html = `
	    <h3 class="stat-name" style="background-color:${data.stats[i].nameColor} ">${data.stats[i].name}</h3>
		    <div class="stat-graph">
		      <div class="gauge" style="background-color:${data.stats[i].gaugeColor}  " ></div>
        </div>`
    stat.innerHTML=html
    stats.appendChild(stat)
  }
}
loadData('../json/stat.json', function(text){
    data = JSON.parse(text);
    statDomMaking(data)
});


const onScroll = () => {
  const scTop = window.document.documentElement.scrollTop;
  const winHei = window.innerHeight - 100
  const targetY = window.pageYOffset + stats.getBoundingClientRect().top;
	if ((scTop + winHei) > targetY) {
    const gauge = document.querySelectorAll('.gauge')
    for(let i =0; i< data.stats.length; i++){
      gauge[i].style.width = data.stats[i].gauge 
    }
	}
}
window.document.addEventListener('scroll', onScroll)