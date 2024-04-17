import router from "./router.js";

//Our script entry point
$(document).ready(() => {
    console.log('document ready');
    router.start();

})