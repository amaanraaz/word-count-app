const input_text = document.getElementById("input-area");
const char_cnt = document.querySelector(".text-count h3");
const word_cnt = document.querySelector(".word-count h3");

input_text.addEventListener("input",()=>{
    char_cnt.innerText = input_text.value.length;
    word_cnt.innerText = input_text.value.trim().split(' ').length;
    if(char_cnt.innerText==0)word_cnt.innerText=0;
});