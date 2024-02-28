class Studente{
    #nome;
    #cognome;
    #eta;
    #matricola;

    constructor(nome, cognome, eta, matricola){
        this.#nome = nome;
        this.#cognome = cognome;
        this.#eta = eta;
        this.#matricola = matricola;
    }

    isMaggiorenne(){
        if (this.#eta >= 18){
            return true;
        } else{
            return false;
        }
    }

    toString(){
        return `Nome: ${this.#nome}<br>Cognome: ${this.#cognome}<br>`
            + `Età: ${this.#eta}<br>Matricola: ${this.#matricola}`;
    }
}

function main(){
    const st1 = new Studente("Nicola", "Schianchi", 17, "NS17");
    const st2 = new Studente("Victor", "Cinca", 18, "VC5");
    const pInfo = document.getElementById("infoStudente");

    pInfo.innerHTML = "------ Studente 1 ------<br>" + st1.toString()
                        + "<br>" + (st1.isMaggiorenne() ? "Maggiorenne" : "Minorenne");
    pInfo.innerHTML += "<br><br>------ Studente 2 ------<br>" + st2.toString()
                        + "<br>" + (st2.isMaggiorenne() ? "Maggiorenne" : "Minorenne");
}

main();