var cuvant="BIRD";
var numstelute = cuvant.length
var modificat;
var numghici;
var initializat = false;

function initializare()
{
    modificat = ""
    for (let i = 0; i < cuvant.length; i++)
    {
        modificat = modificat + "*";
    }
    document.getElementById("arata").innerHTML = modificat;
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
    if (numghici == 0)
    {
        document.getElementById("arata").innerHTML = "Ati pierdut jocul.";
        document.getElementById("butonv").disabled = true;
    }
    else if (numstelute == 0)
    {
        document.getElementById("arata").innerHTML = "Ati castigat jocul!";
        document.getElementById("butonv").disabled = true;
    }
    document.getElementById("ialitera").value = "";
}

function verifica(ch) //daca este gasit sau deja folosit, returneaza true
{
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