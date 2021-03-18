(()=>{
const stats = document.querySelector('.stats')
let statData;


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
    statData = JSON.parse(text);
    statDomMaking(statData)
});


const onScroll = (e) => {
  const scTop = window.document.documentElement.scrollTop;
  const winHei = window.innerHeight - 100
  const targetY = window.pageYOffset + stats.getBoundingClientRect().top;
	if ((scTop + winHei) > targetY) {
    const gauge = document.querySelectorAll('.gauge')
    for(let i =0; i< statData.stats.length; i++){
      gauge[i].style.width = statData.stats[i].gauge 
    }
	}
}

window.document.addEventListener('scroll', onScroll)

})()
