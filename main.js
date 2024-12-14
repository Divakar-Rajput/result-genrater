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


function printResult() {
    document.getElementById("col-12").style.width = "100%";
    const printArea = document.querySelector(".print-area");
    const originalContent = document.body.innerHTML;
    document.body.innerHTML = printArea.outerHTML;
    window.print();
    document.body.innerHTML = originalContent;
    window.location.reload();
}

