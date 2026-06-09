# RPG Manager D&D - Backend

API REST desenvolvida em **Node.js**, responsável por automatizar mecânicas de **Dungeons & Dragons 5ª Edição**, especialmente as tabelas de tesouros presentes no *Dungeon Master's Guide (DMG)*.

A aplicação fornece endpoints para consulta e geração procedural de recompensas, incluindo moedas, gemas, objetos de arte e itens mágicos, utilizando sistemas de rolagem baseados em probabilidades oficiais do jogo.

## Funcionalidades

* Geração de tesouros por faixa de nível.
* Rolagem automática de tabelas de tesouro.
* Consulta de itens mágicos.
* Consulta de gemas e objetos de arte.
* APIs REST para integração com aplicações frontend.
* Organização em arquitetura de camadas (Controllers, Services e Models).

## Tecnologias

* Node.js
* Express
* Sequelize
* MySQL
* JavaScript
* REST API

## Arquitetura

```text
src/
├── controllers/
├── services/
├── models/
├── routes/
├── database/
└── app.js
```

## Objetivo

Fornecer uma camada de serviços escalável e reutilizável para automatizar conteúdos e regras relacionadas à geração de tesouros e itens de Dungeons & Dragons.
