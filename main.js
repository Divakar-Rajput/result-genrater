function print_Time() {
    const time = document.getElementById('print-time');
    let currentDate = new Date();

    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');

    const day = currentDate.getDate().toString().padStart(2, '0');
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const month = monthNames[currentDate.getMonth()];
    const year = currentDate.getFullYear();

    const formattedDate = `${day}-${month}-${year}`;
    const formattedTime = `${hours}:${minutes}:${seconds} ${ampm}`;

    time.textContent = `Printed At ${formattedDate} ${formattedTime}`;
}

// Initial call to display the time immediately
print_Time();
setInterval(print_Time, 1000);


function resize() {
    const deviceWidth = window.innerWidth;
    let width = (800 / deviceWidth) * 100;
}
resize();


function printResult() {
    const printArea = document.querySelector(".print-area");
    const originalContent = document.body.innerHTML;

    document.body.innerHTML = printArea.outerHTML;
    window.print();
    document.body.innerHTML = originalContent;
    window.location.reload();
}

window.addEventListener("DOMContentLoaded", () => {
    const printButton = document.createElement("button");
    printButton.textContent = "Print Result";
    printButton.style.position = "fixed";
    printButton.style.bottom = "20px";
    printButton.style.right = "20px";
    printButton.style.padding = "10px 15px";
    printButton.style.backgroundColor = "#ff7402";
    printButton.style.color = "white";
    printButton.style.border = "none";
    printButton.style.cursor = "pointer";

    printButton.addEventListener("click", printResult);

    document.body.appendChild(printButton);
});

