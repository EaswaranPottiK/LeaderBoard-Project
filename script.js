document.querySelector("form").addEventListener("submit", (e)=>{
    e.preventDefault();

    e.preventDefault();
    const fname= e.target.children[0].value
    const lname= e.target.children[1].value
    const country= e.target.children[2].value
    const pscore= e.target.children[3].value

    console.log(fname,lname,country,pscore)
    if (fname==""||lname==""||country==""||pscore==""){
        return document.getElementById('warning').style.display="block"
    }
    

    let HTMLToBeAdded=
    `
    <div class="card">
    <div>
        <div class="name">${fname} ${lname}</div>
        <div class="time" style="font-size: small; color: #686868;">${generateDateAndTime()}</div>
    </div>
    <div class="country">${country}</div>
    <div class="score">${pscore}</div>
    <div>
        <button id='del'>🗑</button>
        <button>+5</button>
        <button>-5</button>
    </div>
    </div>
    `
    document.getElementsByClassName('addHere')[0].insertAdjacentHTML(
        'afterend', 
        HTMLToBeAdded
    );

})

function generateDateAndTime(){
    let dateObject = new Date();

    let month = dateObject.toLocaleString("default", {month:"long"})
    day = dateObject.getDate(),
    year = dateObject.getFullYear(),
    time = dateObject.toLocaleTimeString().slice(0,8);

    let generateResult = `${month} ${day}: ${year} ${time}`
    return generateResult;
}

function buttons(){
    document.querySelectorAll('button').forEach((el)=>{
        el.addEventListener('click', (e)=>{
            let textContent = e.target.textContent;
            if (textContent=='🗑'){
                return e.target.parentElement.parentElement.remove();
            }
            else {
                e.target.parentElement.parentElement.children[2].textContent = 
                parseInt(e.target.parentElement.parentElement.children[2].textContent) + parseInt(textContent)
            }
        })
    });
}
buttons();

