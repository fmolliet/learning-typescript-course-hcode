# Learning Typescript 🌌

Esse repositório tem como objetivo conter estudos do curso de typescript da [Hcode Treinamentos](https://www.udemy.com/user/hcode/), [Dominando TypeScript](https://www.udemy.com/course/curso-online-typescript/). Nele Veremos sobre a tipagem e transpilador do typescript.

## Iniciando o conteúdo ✈️

 - Instale globalmente o typescript com o seguinte comando;
```sh
npm i -g typescript
```

- Após isso o comando `tsc` estará disponivel para executar, para transpilar um arquivo, digite `tsc path\to\file.ts`  no caso é scr\app.ts;

```sh
tsc .\src\app.ts
```

- Para saber quais são os parametros ou flags adicionais usar `tsc --help`;

- Sem o parâmetro `--target ou -t` o typescript transpila para versões mais antigas de JS (ES5). Usando o comando `--target "ES2015"` ele irá transpilar para JS mais recente por exemplo;

```sh
tsc .\src\app.ts --target "ES2015"
```

## O Transpilador 

- Quando queremos passar diversos parametros para `tsc` é melhor usar o arquivo de configuração ( tsconfig.json ). Para gerar ele usamos o seguinte comando:

```sh
tsc --init
```

- E agora não precisamos informar o arquivo que será compilado. Para compilar nosso app usamos o comando: 

```sh
tsc
```

- Para alterar o onde ele irá transpilar, de qual pasta para onde irá sair o output você deve alterar na `tsconfig.json` os parametros `rootDir` e  `outDir`.

- Quando precisa remover o raise de erros de implicityAny (quando os parametros precisam ser tipados e não são), precisamos alterar, no `tsconfig.json` ,  o seguinte parametro `noImplicitAny` com valor `false` (O ideal é ficar habilitado como true para compilar da maneira correta e evitar erros na frente).

- Para ajudar o navegador a encontrar os arquivos é bom sempre habilitar o parametro `sourceMap` na `tsconfig.json`. Com o map ele aponta para o arquivo que está com erro tambem!

- Para remover os comentários do código habilitamos o parâmetro `removeComments` na `tsconfig.json`.

### Libs 
 
 - É um dos principais recursos do TS ele é rigoroso e ajuda a trazer aquilo que precisamos usar, para usar a API de DOM você precisa carregar no parâmetro `lib` na `tsconfig.json`. Você deixará as libs que são necessárias para seu app funcionar
 
Exemplo deixaremos em nossa lib dessa maneira: 
```json
"lib": ["DOM", "ES2020"],   
```


### Module

- Utilizamos de padrão o "comonjs" no parâmetro `module` na `tsconfig.json` e o mais utilizado,