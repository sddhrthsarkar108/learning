// Getter & Setter
class Plant {
    private _species: string; // _ is used to avoid identifier clash

    set species(value: string) {
        if(value.length > 3) {
            this._species = value
        }

        this._species = 'default';
    }

    get species() {
        return this._species;
    }
}

const plant = new Plant();
console.log(plant.species); // species is accesed like property
plant.species = "ABcd"
console.log(plant.species);