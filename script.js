let output = document.querySelector("#output");
let allInput = document.querySelectorAll(".leftpart textarea");
let htmlCode, cssCode, jsCode = '';

allInput.forEach((el, index) => {
    el.addEventListener("keyup", () => {
        if (index == 0) {
            htmlCode = el.value;
        }
        if (index == 1) {
            cssCode = el.value;

        }
        if (index == 2) {
            jsCode = el.value;

        }
        //for display html code output
        output.contentDocument.body.innerHTML = htmlCode;
        // for display css code output
        output.contentDocument.head.innerHTML = `<style>${cssCode}</style>`
        // for display javaScript code output   
        output.contentWindow.eval(jsCode);
    })

})
