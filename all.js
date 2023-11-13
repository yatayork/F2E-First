// const lottieLoading = document.querySelector("lottie-player");

// setTimeout(() => {
//     document.body.removeChild(lottieLoading);
// }, 1000);

const timestamp = document.querySelectorAll(".timestamp");

date = new Date();
year = date.getFullYear();
month = date.getMonth() + 1;
day = date.getDate();

console.log(timestamp);

timestamp.forEach(item => {
    item.innerHTML = year + "/" + day + "/" + month;
});
