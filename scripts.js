const boxclicks = document.querySelectorAll(".faq-one");

Array.from(boxclicks).forEach((boxclick) => {
    boxclick.onclick = () => {
        if(boxclick.children[1].classList.contains("displayactive")){
            boxclick.children[1].classList.remove('displayactive');
        } else {
            boxclick.children[1].classList.add('displayactive');
        }
    }
});

console.log(Array.from(boxclicks))