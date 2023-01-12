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
}

function ghicire()
{
    if (initializat == true)
    {
        if (numghici != 0)
        {
            var litera = document.getElementById("ialitera").value.toUpperCase();
            if (!verifica(litera)) numghici--;
            document.getElementById("arata").innerHTML =           
        }
        else document.getElementById("arata").innerHTML = "Jocul s-a terminat. Initialeaza un joc nou!";
    }
    else
    {
        document.getElementById("arata").innerHTML = "Jocul nu este initializat.";    
    }

}

function verifica(ch)
{
    ch = ch[0];
    gasit = false;
    for (let i = 0; i < cuvant.length; i++)
    {
        if (cuvant[i]==modificat[i]) return true;

        if (ch == cuvant[i] && cuvant[i] != modificat[i])
        {
            stanga = modificat.slice(0, i);
            dreapta = modificat.slice(i+1);
            modificat= stanga + ch + dreapta;
            document.getElementById("arata").innerHTML = modificat;
            numstelute--;
            gasit = true;
        }
    }
    if (gasit == true) return true;
    else return false;
}


/*
function ghicire()
{
    if (initializat == true)
    {
        if (numghici != 0 && numstelute !=0)
        { 
            var litera = document.getElementById("ialitera").value.toUpperCase();
            if (!cautare(litera))
            {
                numghici--;
                document.getElementById("nrghici").innerHTML = numghici;
                if (numghici==0)
                {
                    if (numstelute !=0) document.getElementById("arata").innerHTML = "Ai pierdut jocul!";
                    initializat = false;
                }
            }
            else 
            {
                if (numstelute ==0) document.getElementById("arata").innerHTML = "Ai castigat jocul!";
                initializat = false;
            }
            document.getElementById("ialitera").value = "";
        }
    }
    else 
    {
        document.getElementById("arata").innerHTML = "Jocul nu este initializat.";    
    }
}

function cautare(ch)
{
    ch = ch[0];
    gasit = false;
    for (let i = 0; i < cuvant.length; i++)
    {
        if (ch == cuvant[i] && cuvant[i] != modificat[i])
        {
            stanga = modificat.slice(0, i);
            dreapta = modificat.slice(i+1);
            modificat= stanga + ch + dreapta;
            document.getElementById("arata").innerHTML = modificat;
            numstelute--;
            gasit = true;
        }
    }
    if (gasit == true) return true;
    else return false;
}
*/