let x = document.querySelector("#x");
let y = document.querySelector("#y");
let cube = document.querySelector(".cube");
x.addEventListener('click', () => {
    cube.classList.remove("y");
    cube.classList.add("x");
    setTimeout(()=>{
        cube.classList.remove("x");
    }, 2500);
});
y.addEventListener('click', () => {
    cube.classList.remove("x");
    cube.classList.add("y");
    setTimeout(()=>{
        cube.classList.remove("y");
    }, 2500);
});
cube.classList.remove("x");
cube.classList.remove("y");