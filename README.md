# Documentação da API Rest para Encurtador de URL

Esta API Rest é um encurtador de URL que utiliza as seguintes dependências: dotenv, express, nanoid, mongoose e nodemon.

## Instalação

1. Clone este repositório.
2. Instale as dependências com o comando `npm install`.
3. Crie um arquivo `.env` na raiz do projeto e configure as variáveis de ambiente.
4. Inicie o servidor com o comando `npm run dev`.

## Variáveis de ambiente

As seguintes variáveis de ambiente são necessárias para o funcionamento da API:

- `PORT`: Porta em que o servidor irá rodar (padrão é `3000`).
- `MONGO_URI`: URL de conexão com o banco de dados MongoDB.

## Endpoints

### GET /urls

Este endpoint retorna uma lista com todas as URLs encurtadas no banco de dados.

#### Parâmetros

Nenhum parâmetro é necessário.

#### Resposta

Código de status: 200 (OK)

```json
[
  {
    "hash": "6166b918140ca1dcf9b12775",
    "shortURL": "https://encurtador.com/abc123",
    "originURL": "https://www.google.com/",
    "createdAt": "2022-03-13T14:27:44.811Z",
    "__v": 0
  },
  {
    "hash": "6166b91e140ca1dcf9b12776",
    "shortURL": "https://encurtador.com/def456",
    "originURL": "https://www.youtube.com/",
    "createdAt": "2022-03-13T14:27:50.478Z",
    "__v": 0
  }
]
```
### POST /shorten

Este endpoint cria uma URL encurtada no banco de dados.

#### Parâmetros

Os parâmetros devem ser passados pelo body da requisição.

| Parâmetro | Tipo   | Descrição           |
| --------- | ------ | ------------------- |
| originURL | string | URL a ser encurtada |

O parâmetro `shortURL` é opcional. Caso não seja passado, um hash será gerado automaticamente com o nanoid.

#### Resposta

Código de status: 201 (Created)
```json
{
  "hash": "6166b918140ca1dcf9b12775",
  "shortURL": "https://encurtador.com/abc123",
  "originURL": "https://www.google.com/",
  "createdAt": "2022-03-13T14:27:44.811Z",
  "__v": 0
}
```
### GET /urls/:id

Este endpoint retorna todas as URLs encurtadas no banco de dados que correspondem ao nome passado por parâmetro.

#### Parâmetros

| Parâmetro | Tipo   | Descrição        |
| --------- | ------ | ---------------- |
| id        | string | Nome da da URL procurada ex: "Youtube" |

#### Resposta

Código de status: 200 (OK)
```json
{
  "hash": "6166b918140ca1dcf9b12775",
  "shortURL": "https://encurtador.com/abc123",
  "originURL": "https://www.google.com/",
}
```