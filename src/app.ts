interface IProduct{
    nome: string,
    valor: number
}

class Produto {
    
    nome : string;
    valor : number;
    
    constructor ({ nome , valor} : IProduct ){
        this.nome  = nome;
        this.valor = valor;
    }
}

const ps5 = new Produto({nome: 'PS5', valor: 4000})

const element = document.querySelector('div');


// Number
const numeroGigante: bigint = 50n

// Union Types
let chavePix: string | number

chavePix = 9988554

// boolean
let hasKey: boolean;

hasKey = Boolean('123')