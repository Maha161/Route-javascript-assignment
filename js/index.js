//^ left nav
const leftNavWidth = $(".left-nav").outerWidth();
$(".left-nav").css({ left: `-${leftNavWidth}px`});
$(".close-icon").on("click" , function(){
    $(".left-nav").animate({left: `-${leftNavWidth}px`} , 1000) 
})
$(".menu-icon").on("click" , function(){
    $(".left-nav").animate({left: "0px" } , 1000) 
})
//^ slider
$(".singer-title").on("click" , function() {
    $(this).next().slideToggle();
    $(".singer-content").not($(this).next()).slideUp();    
});
//^ Counter
let countDownDate = new Date("Dec 31 , 2024 23:59:59").getTime();
let counter = setInterval(function() {
    let DateNow = new Date().getTime();
    let dateDiff = countDownDate - DateNow;

    let days =Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours =Math.floor((dateDiff %  (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes =Math.floor(dateDiff % (1000 * 60 * 60) / (1000* 60));
    let seconds =Math.floor(dateDiff % (1000 * 60) / 1000);
    
    $(".days").html(`${days} D`);
    $(".hours").html(` ${hours} h`);
    $(".minutes").html(`${minutes} m`);
    $(".seconds").html(`${seconds} s`);
    if(dateDiff <= 0){
        clearInterval(counter);
    }
} , 1000)

//^ TextArea
let count = 100;
$("textarea").on("input", function() {
    const charCount = $(this).val().length; 
    count = 100 - charCount; 
    if (count <= 0) {
        $(".warn-text").html("Your available characters are finished").css({ color: "red" });
    } else {
        $(".chars").html(count); 
    }
});

//^ send-btn 
$(".send-btn").on("click", function() {
    if (isEmpty()) {
        $(".errorMessage").removeClass("d-none").html("Please enter all inputs.");   
        return;
    }
    $(".errorMessage").addClass("d-none"); // Hide error message
});
function isEmpty() {
    return $(".nameInput").val() === "" || $(".emailInput").val() === "" || $(".messageInput").val() === "";
}


