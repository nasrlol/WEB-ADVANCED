
const output = document.getElementById("output");

class Student {
    constructor(naam, vakken)
    {
        this.naam = naam;
        this.vakken = vakken;
        this.punten = {};
    }
    voegPuntenToe(vak, punt) {
        this.vakken = {vak};
        this.punten.push(punt);
    }

    gemiddelde()
    {
        let totaal= 0;
        for(let i = 0; i < this.punten.length; i++)
        {
            totaal += this.punten[i];
        }
        return totaal / this.punten.length;
    }

    toonRapport()
    {
        output.textContent = `${this.gemiddelde()}`
    }
}

let student1 = new Student("naam1", "Wiskunde");
student1.voegPuntenToe("Wiskunde", 10);
student1.toonRapport();

let student2 = new Student("naam2", "Duits");
student2.voegPuntenToe("Frans", 15);
student2.toonRapport();
