const projectWrap = document.querySelector('.project-wrap')


  const pjSlide = document.querySelector('.pj-slide-wrap')
  const pjStage = document.querySelector('.pj-stage')
  const btPrev = document.querySelector('.bt-prev')
  const btNext = document.querySelector('.bt-next')
 
 
 



  let now = 0
  let tar = 0
  let descView = false
  let pjData
  //console.log(slideWidth.substr(0, slideWidth.length-2))



  const pjDomMaking = (data) => {
    for(let i =0; i<data.projects.length; i++){
      const pj = document.createElement('article')
      pj.classList.add('pj')
      let html = `
      <div class="content-wrap">
        <iframe class="pj-video" width="100%" height="100%" src="">
        </iframe>
        <div class="desc-wrap">
          <div class="desc-btn emphasis" onclick="onClickDescBtn">
            <div class="img-wrap">
              <img src="../img/description.png" alt="icon">
            </div>
            <p class="desc-btn-name"><i class="fas fa-long-arrow-alt-right"></i></p>
          </div>
          <div class="icon-wrap ">
            <button class="icon"><a href=${data.projects[i].demoURL}><i class="far fa-window-restore"></i></a></button>
            <button class="icon"><a href=${data.projects[i].gitURL}><i class="fab fa-github"></i></a></button>
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
     
      
    }
    const descBtn = document.querySelectorAll('.desc-btn')
    descBtn.forEach(btn => (btn.addEventListener("click",onClickDescBtn)))
  }
  loadData('../json/project.json', function(text){
      pjData = JSON.parse(text);
      pjDomMaking(pjData)
  });

  const videoStart = () => {
    const pjs = document.querySelectorAll('.pj')
    pjs[now].querySelector('.pj-video').setAttribute('src',`${pjData.projects[now].videoURL}?autoplay=1&mute=1&amp;playlist=${pjData.projects[now].videoCode}&amp;loop=1&amp;&controls=0&amp;`)
  }

  const slideAni = () => {
    const slideWidth = window.getComputedStyle(pjStage).width
    tar = now * -(slideWidth.substr(0, slideWidth.length-2))
    pjSlide.style.left=`${tar}px`
  }


  const onClickBtPrev = () => {
    descClose()
    now = (now == 0) ? 4 : now -1
    slideAni()
    videoStart()
    descOpen()

  }
  const onClickBtNext = () => {
    descClose()
    now = (now == 4) ? 0 : now +1
    slideAni()
    videoStart()
    descOpen()
  }

  const onClickDescBtn = () => {
    if(!descView){
      descOpen()
    }else{
      descClose()
    }
  }

  const descClose = () => {
    const pjs = document.querySelectorAll('.pj')
    const name = document.querySelectorAll('.desc-btn-name')
    pjs[now].querySelector('.desc-wrap').style.right = "-40%"
    name[now].innerHTML = '<i class="fas fa-long-arrow-alt-left"></i>'
    descView = false
  }
  const descOpen = () => {
    const pjs = document.querySelectorAll('.pj')
    const name = document.querySelectorAll('.desc-btn-name')
    pjs[now].querySelector('.desc-wrap').style.right = "0%"
    name[now].innerHTML = '<i class="fas fa-long-arrow-alt-right"></i>'
    descView = true
  }
 
  btPrev.addEventListener("click", onClickBtPrev)
  btNext.addEventListener("click", onClickBtNext)




