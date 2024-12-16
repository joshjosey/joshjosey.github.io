let index = 0;
function typeWriter(id, text, speed) {
    let i = 0;
    let isErasing = false;
    let oldTxt = "";
    function typeErase() {
        let txt = text[index];
        let element = document.querySelector(id);
        if (!element) {
            console.error(`Element with id "${id}" not found.`);
            return;
        }
        if (!isErasing && i < txt.length) {
            // Typing 
            element.innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeErase, speed);
        } else if (isErasing && i > 0) {
            // Erasing 
            element.innerHTML = oldTxt.substring(0, i - 1);
            i--;
            setTimeout(typeErase, speed / 2);
        } else {
            // Transition between typing and erasing
            if (!isErasing) {
                // Finished typing, start erasing after a pause
                isErasing = true;
                oldTxt = txt; // Save the full typed text
                setTimeout(typeErase, speed * 2);
            } else {
                // Finished erasing, move to the next text
                isErasing = false;
                index = (index + 1) % text.length; // Loop through the array
                i = 0; // Reset character index
                setTimeout(typeErase, speed);
            }
        }
    }

    typeErase();
}
