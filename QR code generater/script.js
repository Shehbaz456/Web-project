const wrapper = document.querySelector(".wrapper");
qrinput = wrapper.querySelector(".form input");
gentrateBtn = wrapper.querySelector(".form button") ;
qrImg = wrapper.querySelector(".qr-code img") ;


gentrateBtn.addEventListener("click",()=>{
    let qrValue = qrinput.value;
    if(!qrValue) return; // if the input is empty then return form here or nothing
    gentrateBtn.innerText = "Generating QR Code...";

    // getting a QR code of user entered value using the qrserver
    // api and passing the api and returned img src to qrImg 
    qrImg.src=`https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
    qrImg.addEventListener("load",()=>{
        wrapper.classList.add("active");
    gentrateBtn.innerText = "Generate QR Code";

    })
});

qrinput.addEventListener("keyup",()=>{
    if(!qrinput.value){
        wrapper.classList.remove("active");
    }
})