var cuvant="ALLIGATOR";
var numstelute = cuvant.length
var modificat;
var numghici;

function initializare()
{
    modificat = ""
    for (let i = 0; i < cuvant.length; i++)
    {
        modificat = modificat + "*";
    }
    console.log(modificat);
}

function ghicire()
{
    initializare();
    numghici = 3;
    while (numghici != 0 && numstelute !=0)
    {   console.log(numstelute);
        const ghici = prompt();
        if (!cautare(ghici)) numghici--;
    }
    if (numstelute == 0)
    {
        console.log("Ai castigat!");
    }
}

function cautare(ch)
{
    ch = ch[0].toUpperCase();
    gasit = false;
    for (let i = 0; i < cuvant.length; i++)
    {
        if (ch == cuvant[i])
        {
            stanga = modificat.slice(0, i);
            dreapta = modificat.slice(i+1);
            modificat= stanga + ch + dreapta;
            console.log(modificat);
            numstelute--;
            gasit = true;
        }
    }
    if (gasit == true) return true;
    else return false;
}