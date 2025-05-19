//to show the current date, formatted and date components
//function to display current date
function showCurrentDate(){
    const date= new Date();
    document.getElementById('output').innerHTML= `current Date and Time ${date}`;

}
function showFormattedDate(){
    const date= new Date();
    const options= {
        weekday:'long',
        year:'numeric',
        month:'long',
        day:'numeric',
        hour:'2-digit',
        minute:'2-digit'
    };
    document.getElementById('output').innerHTML= `Formatted Date ${date.toLocaleDateString('en-US', options)}`;

}
function showDateComponents(){
    const date= new Date();
    document.getElementById('output').innerHTML= `
                        Year:${date.getFullYear()}<br>
                        Month: ${date.getMonth()+1} (${date.toLocaleDateString('default',{month:'long'})}<br>
                        Date: ${date.getDate()}<br>
                        Day:${date.getDay()}<br>
                        Hours:${date.getHours()}<br>
                        Minutes:${date.getMinutes()}<br>
                        Seconds:${date.getSeconds()}
                         `;

}