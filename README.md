# Planejador de Treinos

> Projeto para estudo realizado pensando em praticidade e velocidade para variações no treino do usuário, escolha o músculo e/ou equipamento, confira a execução e adicione a sua lista. É possível ver as regiões do corpo trabalhadas em um manequim anatômico em SVG ao final da página. (Em andamento)

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Shadcn/ui](https://img.shields.io/badge/shadcn/ui-%23000000?style=for-the-badge&logo=shadcnui&logoColor=white)
![Status do Projeto](https://img.shields.io/badge/Status-Em_Desenvolvimento-yellow)



## 🛠️ Tecnologias Utilizadas

- **React** (Vite) - Biblioteca para construção da interface.
- **Tailwind** - Framework CSS para estilização.
- **TypeScript** - Para tipagem estática e segurança do código.
- **SVG Manipulável** - Para a lógica do manequim muscular.

## 📂 Estrutura do Projeto

O projeto foi organizado pensando em escalabilidade e separação de responsabilidades:

```bash
src/
├── components/      # Componentes reutilizáveis (Botões, Manequim, Listas)
├── data/            # "Banco de dados" local (Lista de exercícios e categorias)
├── App.tsx          # Componente Pai (Gerenciamento de Estado Global)
└── ...
```

## 🤓 Conceitos Aplicados

- **Lifting State Up:** - Compartilhamento de estados entre componentes irmãos através do Pai.
- **Imutabilidade:** - Manipulação correta de Arrays no React (filter, map, spread operator).
- **Renderização Condicional:** - Uso de operadores lógicos (&& e ternários) para exibir elementos dinâmicos.
- **Manipulação de Objetos:** - Acesso dinâmico a propriedades de objetos (Index Signature).

## 📱 Confira
 <https://glistening-dieffenbachia-1d4b6e.netlify.app/>