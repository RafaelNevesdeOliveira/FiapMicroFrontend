# MicroFrontend App

Este projeto é um exemplo de como configurar um aplicativo React Native com Expo, utilizando uma arquitetura de Microfrontends. O projeto inclui pacotes essenciais para armazenamento assíncrono, suporte a TypeScript e integração com React Native.

## Pré-requisitos

Antes de iniciar, certifique-se de ter o Node.js instalado em sua máquina. Além disso, é recomendado ter o Expo CLI instalado globalmente.

## Passos para Configuração

1. **Criação do Projeto**

    Para criar um novo projeto Expo, execute o seguinte comando:
    ```bash
    npx create-expo-app MicroFrontend --template
    ```

2. **Instalar Dependências**

    As dependências listadas no projeto incluem:
    ```json
    "dependencies": {
      "@react-native-async-storage/async-storage": "^2.0.0",
      "expo": "~51.0.28",
      "expo-status-bar": "~1.12.1",
      "react": "18.2.0",
      "react-native": "0.74.5"
    },
    "devDependencies": {
      "@babel/core": "^7.20.0",
      "@types/react": "~18.2.45",
      "typescript": "^5.1.3"
    }
    ```
    Execute o seguinte comando para instalar todas as dependências:
    ```bash
    npm install
    ```

3. **Iniciar o Projeto**

    Para iniciar o servidor de desenvolvimento do Expo, use:
    ```bash
    npx expo start
    ```

4. **Configuração de Build Properties**

    Para configurar as propriedades de build, execute o seguinte comando:
    ```bash
    npx expo install expo-build-properties
    ```

5. **Limpeza e Prebuild do Projeto**

    Antes de rodar o projeto no iOS, é necessário limpar o ambiente de build e executar o prebuild:
    ```bash
    npx expo prebuild --clean
    ```

6. **Executar no iOS**

    Finalmente, para rodar o aplicativo no iOS, use:
    ```bash
    npx expo run:ios
    ```

## Estrutura do Projeto

- **`App.js`**: Arquivo principal onde a lógica da aplicação é implementada.
- **`package.json`**: Contém todas as dependências e scripts do projeto.
- **`node_modules/`**: Diretório que contém todas as bibliotecas instaladas.
- **`ios/` e `android/`**: Diretórios gerados após o prebuild, contendo os arquivos de configuração nativa para iOS e Android.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir um `Pull Request` ou relatar um `Issue`.

## Licença

Este projeto está licenciado sob a MIT License. Consulte o arquivo `LICENSE` para obter mais informações.
