
function HandleChange(color , addClass){
    document.querySelector(".a").classList.remove("active");
    document.querySelector(".b").classList.remove("active");
    document.querySelector(".c").classList.remove("active");
    document.querySelector(".d").classList.remove("active");
    document.querySelector(".e").classList.remove("active");
    document.querySelector(`.${addClass}`).classList.add("active");
    // console.log(sss)

    document.getElementById("curved").style = `background-color:${color};`;
    setTimeout(()=>{
        document.getElementById("curved").classList.remove("myAnimation");
    },1000)
    document.getElementById("curved").classList.add("myAnimation");

}