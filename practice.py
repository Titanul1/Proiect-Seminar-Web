from flask import Flask, render_template, request
import csv
import random

app = Flask(__name__)
@app.route('/')
def alege_un_cuvant():
    jucator = request.args.get("nume")
    nivel = request.args.get("nivel")
    fisier = None   # ca sa existe afara de scopul if
    if nivel=="usor":
        fisier = open("usor.csv", "r")
    else:
        fisier = open("greu.csv", "r")
    cititor = csv.reader(fisier)
    cuvinte = list(cititor)
    toatecuvintele = len(cuvinte)-1  #-1 pentru ca la primul, sunt etichete
    num = random.randint(1, toatecuvintele)
    uncuvant = cuvinte[num][0]
    unindiciu = cuvinte[num][1]
    return render_template("spanzy.html", jucator=jucator, cuvant=uncuvant, indiciu=unindiciu)
if __name__ == "__main__":
    app.run()

