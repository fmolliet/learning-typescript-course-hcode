# Types 

Nessa página vamos revisar todos os types do typescript e falar sobre suas curiosidades.

### - string
----

Quando iremos atribuir um texto ou um conjunto de caracteres.

- Não podemos usar um `new String('texto')` para um string já declarado. E o tipo string é diferente do String nativo do JS.

### - number
----

Quando iremos usar numeros, fracionários ou não.

- Você pode atribuir valores convertendo para numero com o seguinte metodo: `valor = Number("2021")`.

- Uma alteranativa para declaração de Number é adicionar um `+` antes da string que será um número `valor = +"2021"`;

- Outra forma é realizar o `parseInt("2021")` ;

- Outros tipos de numeros são: int, bigint ex. `50n` (precisa de target ES2020), float;

### - Union Types
----
Quando temos + de 1 tipo para mesma variavel, para isso ao declarar podemos colocar exemplo `let chavePix: string | number`


### - boolean
----
Quando iremos usar um valor booleano, as vezes vamos receber um valor 1 ou "1" ou "0" então é necessario converter o valor com o metodo `Boolean` como no exemplo ` let variavel = boolean("1")`.
Quando esse metodo receber qualquer valor diferente de 0 ou vaziou ("") então o valor será convertido para o boolean.

