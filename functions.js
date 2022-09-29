function createCard(obj){
    return `<div class="card">
            <h2>${obj.marca}</h2>
            <img src=${obj.img}>
            <p>${obj.tip}</p>
            <p>${obj.pret}
            </div>`
}

function creatCards(arr){
    let text="";
    for(let i=0;i<arr.length;i++){
        text+=createCard(arr[i]);
    }
    return text;
}

function setHome(){
    let container=document.querySelector(".box");
    container.innerHTML=`
    <header>
            <h1>Masini</h1>
        </header>
        <div class="container">
            

        </div>

        <div class="buton">
            <button class="addmasina">Add new car</button>
        </div>
    `
    let masiniContainer=document.querySelector(".container");
    let clickCreateMasina=document.querySelector(".addmasina");

    masiniContainer.innerHTML=creatCards(masini);

     clickCreateMasina.addEventListener("click",()=>{
        setNewMasina();
     });
}
function setNewMasina(){
    let container=document.querySelector(".box");
    container.innerHTML=
    `
    <header>
            <h2>New Masina</h2>
        </header>

        <div class="container-newMasina">
            <div class="marca">
                <p>Marca</p>
                <input placeholder="Marca" type="text" class="marca-masina">
            </div>

            <div class="imagine">
                <p>Imagine</p>
                <input type="file" class="imagine-masina">

            </div>
            <div class="tip">
                <p>Tip</p>
                <input type="text" placeholder="Tip" class="tip-masina">
            </div>

            <div class="pret">
                <p>Pret</p>
                <input type="text" placeholder="Pret" class="pret-masina">
            </div>

            <div>
                <button class="create"> Create new Masina</button>
                <button>Cancel</button>
            </div>
        </div>
    `

    let btnNewMasina=document.querySelector(".create");
    let marca=document.querySelector(".marca-masina");
    let tip=document.querySelector(".tip-masina");
    let pret=document.querySelector(".pret-masina");

    btnNewMasina.addEventListener("click",()=>
    {
        let masina={
            marca:marca.value,
            tip:tip.value,
            pret:pret.value,
        }

        console.log(masina);

        if(masina.marca!==""&& masina.tip!==""&&masina.pret!==""){
            masini.push(masina);
            setHome();
        }

        else if(masina.marca==""){
            alert("Lipsete marca");
        }

        else if(masina.tip==""){
            alert("Lipsete tipul")
        }

        else if(masina.pret==""){
            alert("Lipsete pretul");
        }
    })
}
