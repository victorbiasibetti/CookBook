# CookBook

Este repositório é uma API para prova de desenvolvedor backend na DeliveryMuch e tem como objetivo retornar receitas buscadas no [RecipePuppy](http://www.recipepuppy.com/about/api/ "RecipePuppy") juntamente com gifs ilustrativas buscadas no [Giphy](https://developers.giphy.com/docs/ "Giphy").

## Implementação
Esta API foi desenvolvida toda em NodeJS utilizando o Insomnia para testes em ambiente de desenvolvimento.
[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=CookBook&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fvictorbiasibetti%2FCookBook%2Fmaster%2FInsomnia.json)

## Rodar o projeto
Para executar o projeto basta fazer checkout do repositório e rodar o comando `yarn` na pasta raiz do projeto, assim todas as dependências serão instaladas.

`yarn start` - executa o projeto que utilizará por padrão a porta 3333.

O projeto também conta com um arquivo Docker para que seja montado o container da aplicação.
Para criar este container:
`docker build -t {seunome}/cookbook .`

Para rodar o container:
`docker run -p 3333:3333 -d {seunome}/cookbook`

Obs: o parâmetro -p é para fazer o redirecionamento de porta da máquina host para o container.

## Exemplos
Abaixo um exemplo de chamada a API com o retorno esperado:

Chamada: `http://localhost:3333/recipes?i=tomato,potato,apple`
Retorno:

```json
{
  "keywords": [ "apple", "potato", "tomato" ],
  "recipes": [
    {
      "title": "Curried Lentil and Vegetable Soup",
      "ingredients": [
        "apple",
        "brown onions",
        "carrot",
        "celery",
        "curry powder",
        "green lentils",
        "olive oil",
        "parsnip",
        "potato",
        "tomato"
      ],
      "link": "http://www.recipezaar.com/Curried-Lentil-and-Vegetable-Soup-302419",
      "gif": "https://giphy.com/gifs/best-gifs-soup-chicken-campbells-6Bdx9wl8sIh4A"
    },
    {
      "title": "Savory Braised Beef Recipe",
      "ingredients": [
        "apple",
        "beef",
        "black pepper",
        "cabbage",
        "cornstarch",
        "onions",
        "potato",
        "salt",
        "tomato",
        "vegetable oil",
        "water",
        "water"
      ],
      "link": "http://cookeatshare.com/recipes/savory-braised-beef-28416",
      "gif": "https://giphy.com/gifs/message-vegans-zqaVXKdm1hkru"
    }
  ]
}
```


## Licença

Esse projeto está sob a licença MIT. Veja a página [LICENSE](https://opensource.org/licenses/MIT) para mais detalhes.


