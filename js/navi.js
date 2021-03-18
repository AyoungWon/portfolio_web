const naviBar = document.querySelector('.nav-bar')
const naviWrap = document.querySelector('.navi-wrap')
const sliceTop = document.querySelector('.slice1')
const sliceBottom = document.querySelector('.slice2')
const navis = document.querySelector('.navis')
const navi = document.querySelectorAll('.navis')
const naviExit = document.querySelector('.navi-exit')



const onNavibarClick = () => {
naviWrap.style.display = "block"
setTimeout(()=> {
  sliceTop.style.top = 0
  sliceBottom.style.bottom = 0
}, 100)

setTimeout(()=> {
  navi.forEach(navi=>{
    navi.style.display="block"
    setTimeout(()=>{
      navi.style.opacity=1
    },300)
  })
},300)
}

const onNaviExitClick = () => {
  sliceTop.style.top = '-50%'
  sliceBottom.style.bottom = '-50%'
  navi.forEach(navi => {
    navi.style.opacity = 0
    navi.style.display = "none"

  })

  setTimeout(()=> {
    naviWrap.style.display = "none"
    if(e.target.id === "index"){
      contact.style.display = "none"
    }else{
      const contact = document.querySelector('.contact-wrap')
      contact.style.display = "block"
    }
  },300)
  
}

const onNaviClick = (e) => {
const wrappers = document.querySelectorAll('.page-wrapper')
wrappers.forEach(wrapper => {
  wrapper.style.display="none"
})
const target = document.querySelector(`#${e.target.id}`)
target.style.display="block"
videoStart()
descOpen()
onNaviExitClick()
}

naviBar.addEventListener("click", onNavibarClick)
naviExit.addEventListener("click", onNaviExitClick)
navis.addEventListener("click", onNaviClick)