let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let rgb1 = "#001b44";
let rgb2 = "#cafd24";
let copyColor = document.querySelector(".copyCode");

const hexValues = () =>{
const myHexValues = "0123456789abcdef";
    let colors = "#";
    for (let i = 0; i < 6; i++) {
        colors = colors + (myHexValues[Math.floor(Math.random() * 16)]);
    }
    return colors;
};

const myPosition = () => {
   const positions = ["right", "left", "top", "bottom"];
   return positions[Math.floor(Math.random() * positions.length)];
};

const handleBtn1 = () => {
    rgb1 = hexValues();
    // console.log(rgb1);
    let pos = myPosition();
    document.body.style.background = `linear-gradient(to ${pos}, ${rgb1}, ${rgb2})`;                                         //made                    
    copyColor.innerHTML = `background: linear-gradient(to ${pos}, ${rgb1}, ${rgb2});`;
    btn1.innerText = `${rgb1}`;
};

const handleBtn2 = () => {
    rgb2 = hexValues();
    // console.log(rgb2);                                        
    let pos2 = myPosition();                                                                                                 //by
    document.body.style.background = `linear-gradient(to ${pos2}, ${rgb1}, ${rgb2})`;
    copyColor.innerHTML = `background-image: linear-gradient(to ${pos2}, ${rgb1}, ${rgb2});`;
    btn2.innerText = `${rgb2}`;
};

btn1.addEventListener("click", handleBtn1)
btn2.addEventListener("click", handleBtn2)                                                                                   //shiv


// For Copy the the color property in the box 
copyColor.addEventListener("click", () => {
    navigator.clipboard.writeText(copyColor.innerText);
    alert("The background-color is copied");                                                                                 //singh
});


// For Disbling Right Click 
document.addEventListener("contextmenu", function(e){                                                                        //baghel
    e.preventDefault() 
},false);