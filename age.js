
function calculateAge(){
    const birthDateInput= document.getElementById('birthdate').value;
    const resultDiv= document.getElementById('result');

    //get the input date and adjust timezone
    const birthDate= new Date(birthDateInput+ 'T00:00:00');
    console.log(birthDate)
    const today = new Date();
    console.log(today)

    //calculate age
    let age= today.getFullYear()-birthDate.getFullYear();
    console.log(age)
    const montheDiff= today.getMonth()- birthDate.getMonth();
    console.log(montheDiff);

    if(montheDiff <0 || (montheDiff ===0 && today.getDate()< birthDate.getDate)){
        age--;
        console.log("age"+age)
    }

    let months= montheDiff;
    if(months <0){
        months += 12;
        console.log(months)
    }

    let days= today.getDate()- birthDate.getDate();
    console.log(days)

    if(days<0){
        const lastMonth = new Date(today.getFullYear(), today.getMonth()-1, birthDate.getDate());
        console.log("last Month"+ lastMonth)

        let d=today-lastMonth;
        console.log(d)//will return into milliseconds
        //convert milliseconds to days

        days= Math.floor((today -lastMonth)/(1000* 60*60*24));
        console.log(days)

    }

    const formattedBirthDate= birthDate.toLocaleDateString('en-US', {
        weekday:'long',
        year:'numeric',
        month:'long',
        day:'numeric'
    });

    //display result
    resultDiv.innerHTML= `
        <p>Your birthdate: <strong>${formattedBirthDate}</strong></p>
        <p>your age is:</p>
        <p><strong>${age} years, ${months}months, and ${days}days</strong></p>
        `;



}



