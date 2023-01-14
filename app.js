const body = document.body
const searchParam = new URLSearchParams(location.search)
const items = [
    {name: `apex`, png: `apex`,param: `ap`},
    {name: `ada`, png: `ada-refactor-100x100`,param: `ad`},
    {name: `jarvis virus-100x100`, png: `jarvis-virus-100x100`,param: `jv`},
    {name: `quantum capsule`, png: `quantum-capsule`,param: `qc`},
    {name: `Capsule`, png: `capsule`,param: `c`},
    {name: `Kinetic_Capsule`, png: `Prime-Kinetic_Capsule`,param: `kc`},
    {name: `heat sink`, png: `heat-sink-244x300`,param: `hs`},
    {name: `multi hack-300x228`, png: `multi-hack-300x228`,param: `mh`},
    {name: `portal shield-293x300`, png: `portal-shield-293x300`,param: `ps`},
    {name: `resonator`, png: `reso`,param: `re`},
    {name: `xmp-300x203`, png: `xmp-300x203`,param: `xmp`},
    {name: `ultra strike-300x274`, png: `ultra-strike-300x274`,param: `us`},
    {name: `link amp-296x300`, png: `link-amp-296x300`,param: `la`},
    {name: `softbank ultra link-255x300`, png: `softbank-ultra-link-255x300`,param: `sb`},
    {name: `power cube-298x300`, png: `power-cube-298x300`,param: `pc`},
    {name: `hypercube`, png: `hypercube`,param: `hc`},
    {name: `force amp`, png: `force-amp-300x262`,param: `fa`},
    {name: `turret-300x276`, png: `turret-300x276`,param: `tu`},
    {name: `transmuter +`, png: `ITO_EN_Transmuter +`,param: `tp`},
    {name: `transmuter -`, png: `ITO_EN_Transmuter -`,param: `tm`},
    {name: ``, png: ``,param: ``},
]

body.innerHTML += `<h1 id="AgentName">${searchParam.get("name")||''}</h1>`

let c = 0
let pending = `<div>`
for (let item of items) {
    if (c%4 === 0 & c !== 0) {
        pending += `</div><div>`
        body.innerHTML += pending
        pending = `<div>`
    }
    c++
    pending += `<div>
    <div>
    <img src="images/items/${item.png}.png">
    </div>
    <div>
    <div>
    <h5>${item.name.replace(/\-\d+x\d+$/g,"").replace(/[_]/g," ")}</h5>
    </div>
    <div>
    <h2>${parseInt(searchParam.get(item.param)) || 0}</h2>
    </div>
    </div>
    </div>
    `
}
TweenMax.staggerFrom('img',.5,{
    x: -50,
    y: 0,
    autoAlpha:0,
    ease: Back.easeOut,
},0.1)
TweenMax.staggerFrom('h5',.5,{
    y: 100,
    autoAlpha:0.5,
    ease: Linear.easeIn,
},0.1)
TweenMax.staggerFromTo('h2',.5,{
    fontSize: 0,
},{
    fontSize: 60,
    delay: 0.1,
    ease: Back.easeOut,
},0.1)

