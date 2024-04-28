let estaChovendo: boolean = false;
estaChovendo = true;

let idade: number = 27;

let altura: number = 1.75;

const nacionalidade: string = 'Brasileira';

const colegas: string[] = ['Alan Wake', 'Saga Anderson', 'Tor Anderson', 'Odin Anderson'];
const tecnologias: Array<string> = ['Html', 'Css', 'Js'];
const notas: ReadonlyArray<number> = [7, 9, 5, 8];

// Tupla
// array aque armazena diferentes tipos de dados
const lista: [idade: number, nome: string, boolean] = [25, 'Bandeclay', true];

let idadeDaAna: number | string = 25;
idadeDaAna = '25';

let dadosDaApi: any; // Aceita qualquer valor
dadosDaApi = 10;
dadosDaApi = true;
dadosDaApi = [1, 2, 3];
dadosDaApi = 'string';