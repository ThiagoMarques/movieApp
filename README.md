# MovieApp - Ionic 5

Aplicativo mobile desenvolvido com Ionic 5 para consumo da API The Movie Database (TMDb).

## Sobre

Este projeto é um aplicativo mobile criado com Ionic 5 que permite aos usuários explorar informações sobre filmes, utilizando a API do [The Movie Database](https://www.themoviedb.org/).

## Funcionalidades

- Busca e visualização de filmes
- Interface mobile responsiva
- Detalhes completos dos filmes
- Informações sobre gêneros
- Avaliações e classificações
- Imagens e pôsteres
- Sistema de login

## Como Usar

### Pré-requisitos
- Node.js (versão 14+ recomendada)
- npm ou yarn
- Ionic CLI instalado globalmente
- Conta na [The Movie Database API](https://www.themoviedb.org/settings/api) (para obter API key)

### Instalação

```bash
# Clonar o repositório
git clone https://github.com/ThiagoMarques/movieApp.git

# Entrar na pasta do projeto
cd movieApp

# Instalar dependências
npm install

# Instalar Ionic CLI globalmente (se ainda não tiver)
npm install -g @ionic/cli
```

### Configuração da API

1. Obtenha uma API key em [The Movie Database](https://www.themoviedb.org/settings/api)
2. Configure a API key no arquivo de ambiente:
   - `src/environments/environment.ts` (desenvolvimento)
   - `src/environments/environment.prod.ts` (produção)

```typescript
export const environment = {
  production: false,
  apiKey: 'SUA_API_KEY_AQUI',
  apiUrl: 'https://api.themoviedb.org/3'
};
```

### Executar o Projeto

```bash
# Modo desenvolvimento (com live reload)
ionic serve

# Executar em dispositivo iOS
ionic cordova run ios

# Executar em dispositivo Android
ionic cordova run android

# Build para produção
ionic build --prod
```

## Estrutura do Projeto

```
movieApp/
├── src/
│   ├── app/
│   │   ├── data-movie/      # Página de detalhes do filme
│   │   ├── login/            # Página de login
│   │   ├── models/           # Modelos de dados (IMovie, IGenre)
│   │   ├── services/         # Serviços (movie.service, genre.service)
│   │   ├── tab1/             # Tab 1 - Lista de filmes
│   │   ├── tab2/             # Tab 2
│   │   ├── tab3/             # Tab 3
│   │   └── tabs/             # Componente de tabs
│   ├── assets/               # Imagens e recursos
│   ├── environments/         # Configurações de ambiente
│   └── theme/                # Tema e estilos
├── e2e/                      # Testes end-to-end
├── ionic.config.json         # Configuração do Ionic
├── package.json
└── README.md
```

## Tecnologias Utilizadas

- **Ionic 5**: Framework para desenvolvimento mobile
- **Angular**: Framework web para construção da aplicação
- **TypeScript**: Linguagem de programação
- **The Movie Database API**: Fonte de dados sobre filmes
- **Capacitor**: Runtime nativo (substitui Cordova)
- **RxJS**: Programação reativa

## Funcionalidades Detalhadas

### Lista de Filmes
- Visualização de filmes populares
- Busca de filmes
- Filtros por gênero
- Paginação

### Detalhes do Filme
- Informações completas
- Pôster e imagens
- Sinopse
- Avaliações
- Elenco e equipe

### Gêneros
- Lista de gêneros disponíveis
- Filtrar filmes por gênero

## Interface

O aplicativo utiliza:
- Design Material Design
- Navegação por tabs
- Componentes nativos do Ionic
- Layout responsivo

## Testes

```bash
# Executar testes unitários
npm test

# Executar testes e2e
npm run e2e
```

## Build e Deploy

### Android
```bash
# Adicionar plataforma Android
ionic cordova platform add android

# Build
ionic cordova build android

# Executar
ionic cordova run android
```

### iOS
```bash
# Adicionar plataforma iOS
ionic cordova platform add ios

# Build
ionic cordova build ios

# Executar (requer Mac e Xcode)
ionic cordova run ios
```

## API The Movie Database

Este projeto utiliza a API do The Movie Database:
- **Documentação**: [TMDb API Docs](https://developers.themoviedb.org/3)
- **Registro**: [Get API Key](https://www.themoviedb.org/settings/api)

### Endpoints Utilizados
- `/movie/popular` - Filmes populares
- `/movie/{id}` - Detalhes do filme
- `/genre/movie/list` - Lista de gêneros
- `/search/movie` - Busca de filmes

## Contribuindo

Contribuições são bem-vindas! Áreas de interesse:
- Novas funcionalidades
- Melhorias na interface
- Otimizações de performance
- Correção de bugs
- Testes adicionais

## Licença

Este projeto é de código aberto e está disponível para fins educacionais.

## Nota Importante

Este projeto é apenas para fins educacionais. Certifique-se de:
- Usar sua própria API key do TMDb
- Respeitar os termos de uso da API
- Não compartilhar sua API key publicamente

## Links Úteis

- [Ionic Documentation](https://ionicframework.com/docs)
- [Angular Documentation](https://angular.io/docs)
- [The Movie Database API](https://developers.themoviedb.org/3)
- [Capacitor Documentation](https://capacitorjs.com/docs)

---

**Autor**: Thiago Marques  
**Framework**: Ionic 5  
**API**: The Movie Database (TMDb)
