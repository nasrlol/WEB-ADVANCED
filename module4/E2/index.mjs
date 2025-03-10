const output = document.getElementById("output");

class product {
    constructor(naam, prijs, voorraad) {
        this.naam = naam;

        this._prijs = prijs;
        this._voorraad = voorraad;

        this.prijs = prijs;
        this.voorraad = voorraad;
    }
    set prijs(prijs)
    {
        if (prijs < 0) {
            this._prijs = prijs;
        }
    }

    set voorraad(voorraad)
    {
        if (voorraad < 0) {
            this._voorraad = voorraad;
        }
    }

    get verkoopprijs()
    {
        return this._prijs * 1.21;
    }

    get isVoorraad()
    {
        return this._voorraad > 0;
    }
}

product1 = new product("pistachio", 20, 4);
product2 = new product("pandas", 20, 4);
product3 = new product("amandel", 20, 4);

product1.prijs(10);
product2.prijs(30);
product3.prijs(50);

output.textContent = `${product1.verkoopprijs.toFixed(1)} , ${product2.verkoopprijs}, ${product3.verkoopprijs}`;
