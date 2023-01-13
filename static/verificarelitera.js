var cuvant;
var numstelute;
var modificat;
var numghici;
var initializat = false;

function initializare(cuv)
{
    cuvant = cuv.toUpperCase();
    numstelute = cuvant.length;
    modificat = ""
    for (let i = 0; i < cuvant.length; i++)
    {
        modificat = modificat + "*";
    }
    document.getElementById("arata").innerHTML = modificat;
    document.getElementById("poza").src = "/static/3ghici.jpg";
    document.getElementById("ialitera").value ="";
    initializat = true;
    numstelute = cuvant.length;
    numghici = 3;
    document.getElementById("nrghici").innerHTML = numghici
    document.getElementById("butonv").disabled = false;
}

function ghicire()
{
    var litera = document.getElementById("ialitera").value.toUpperCase();
    if (verifica(litera) == false)
    {
        numghici--;
        document.getElementById("nrghici").innerHTML = numghici;
    }
    switch (numghici)
    {
        case 2:
            document.getElementById("poza").src = "/static/2ghici.jpg";
            break;
        case 1:
            document.getElementById("poza").src = "/static/1ghici.jpg";
            break;
        case 0:
            document.getElementById("poza").src = "/static/0ghici.jpg";
            document.getElementById("arata").innerHTML = "Ai pierdut jocul.";
            document.getElementById("butonv").disabled = true;
            break;
    }
    if (numstelute == 0)
    {
        document.getElementById("arata").innerHTML = "Ai castigat jocul!";
        document.getElementById("butonv").disabled = true;
    }
    document.getElementById("ialitera").value = "";
}

function verifica(ch) //daca este gasit sau deja folosit, returneaza true
{
    console.log(ch);
    console.log(modificat);
    console.log(cuvant);
    ch = ch[0];
    gasit=false;
    for (let i = 0; i < cuvant.length; i++)
    {
        if (ch == cuvant[i])
        {
            if (cuvant[i]==modificat[i]) return true;
            else
            {
                stanga = modificat.slice(0, i);
                dreapta = modificat.slice(i+1);
                modificat= stanga + ch + dreapta;
                document.getElementById("arata").innerHTML = modificat;
                numstelute--;
                gasit=true;
            }
        }
    }
    if (gasit==true) return true;
    else return false;
}
