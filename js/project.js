const projectWrap = document.querySelector('.project-wrap')


if(projectWrap){
  const pjSlide = document.querySelector('.pj-slide-wrap')
  const pjStage = document.querySelector('.pj-stage')
  const btPrev = document.querySelector('.bt-prev')
  const btNext = document.querySelector('.bt-next')
  const slideWidth = window.getComputedStyle(pjStage).width
  const descBtn = document.querySelector('.desc-btn')


  let now = 0
  let tar = 0
  let descView = false
  let pjData
  console.log(slideWidth.substr(0, slideWidth.length-2))



  const pjDomMaking = (data) => {
    for(let i =0; i<data.projects.length; i++){
      const pj = document.createElement('article')
      pj.classList.add('pj')
      let html = `
      <div class="content-wrap">
        <iframe class="pj-video" width="100%" height="100%" loop src="">
        </iframe>
        <div class="desc-wrap">
          <div class="icon-wrap ">
            <button class="icon"><a href=${data.projects[i].demoURL}><i class="far fa-window-restore"></i></a></button>
            <button class="icon"><a href=${data.projects[i].videoURL}><i class="fab fa-github"></i></a></button>
          </div>
          <h3 class="name element">${data.projects[i].name}</h3>
          <ul class="skill-wrap element">
            ${data.projects[i].skills.map((item)=>`
            <li class="skill">${item}</li>`).join('')}
          </ul>
          <p class="desc element">${data.projects[i].desc}</p>
          <ul class="feature element">
            ${data.projects[i].feature.map((item)=>`
            <li class="skill">- ${item}</li>`).join('')}
          </ul>
        </div>
      </div>`
      pj.innerHTML=html
      pjSlide.appendChild(pj)
      videoStart()
    }
  }
  loadData('../json/project.json', function(text){
      pjData = JSON.parse(text);
      pjDomMaking(pjData)
  });

  const videoStart = () => {
    const pjs = document.querySelectorAll('.pj')
    pjs[now].querySelector('.pj-video').setAttribute('src',`${pjData.projects[now].videoURL}?autoplay=1&mute=1`)

  }

  const slideAni = () => {
    tar = now * -(slideWidth.substr(0, slideWidth.length-2))
    pjSlide.style.left=`${tar}px`
  }


  const onClickBtPrev = () => {
    now = (now == 0) ? 4 : now -1
    slideAni()
    videoStart()

  }
  const onClickBtNext = () => {
    now = (now == 4) ? 0 : now +1
    slideAni()
    videoStart()
  }

  const onClickDescBtn = () => {
    const pjs = document.querySelectorAll('.pj')
    if(!descView){
      pjs[now].querySelector('.desc-wrap').style.right = "0%"
      descView = true
    }else{
      pjs[now].querySelector('.desc-wrap').style.right = "-100%"
      descView = false
    }
  }
  btPrev.addEventListener("click", onClickBtPrev)
  btNext.addEventListener("click", onClickBtNext)
  descBtn.addEventListener("click", onClickDescBtn)
}


