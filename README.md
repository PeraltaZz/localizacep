# 📍 LocalizaCep 

O LocalizaCep é um aplicativo React que facilita a busca de informações sobre CEPs no Brasil.
Com ele, os usuários podem pesquisar um CEP a partir de um endereço ou buscar um endereço com base em um CEP.
O aplicativo utiliza a API do ViaCep para obter dados atualizados e precisos.
Ele oferece uma interface intuitiva e conveniente, proporcionando aos usuários uma experiência confiável e eficiente na pesquisa de CEPs e endereços.

Acesse o projeto clicando aqui: [LocalizaCep](https://peraltazz.github.io/localizacep/) 

## Instalação

Siga os passos abaixo para instalar e executar o aplicativo LocalizaCep:

1. Baixe o repositório ou clone-o em seu computador: git clone https://github.com/PeraltaZz/localizacep.git;
2. No terminal, navegue até o diretório do projeto: cd localizacep;
3. Instale o pacote Vite usando o seguinte comando: "npm install --save-dev vite" ;
4. Após a conclusão da instalação, inicie o projeto executando o seguinte comando: "npm run dev";
5. O aplicativo LocalizaCep será iniciado e estará disponível em seu navegador no locahost fornecido no terminal.


## Uso
O aplicativo possui duas opções de busca: "CEP" e "Endereço". Selecione a opção desejada clicando no respectivo botão.

### Busca por CEP

Ao selecionar a opção "CEP", preencha os campos "Rua", "Cidade" e "Estado" com as informações do endereço desejado.
Em seguida, clique no botão "CONSULTAR". O aplicativo buscará e exibirá uma tabela com os CEPs correspondentes ao endereço informado.
Para cada CEP encontrado, você poderá clicar no botão "Maps" para acessar o endereço no Google Maps.

### Busca por Endereço

Ao selecionar a opção "Endereço", digite o CEP desejado no campo correspondente.
Em seguida, clique no botão "CONSULTAR". O aplicativo buscará e exibirá o endereço correspondente ao CEP informado.
O endereço será exibido juntamente com um botão "Maps", que permite acessá-lo diretamente no Google Maps.

## Tecnologias Utilizadas

- React
- JavaScript
- HTML
- CSS

## API

O aplicativo utiliza a API do ViaCep para buscar informações de CEP e endereço. Exemplos de solicitações à API:

- Pesquisa por CEP: viacep.com.br/ws/01001000/json/;
- Pesquisa por endereço: viacep.com.br/ws/RS/Porto Alegre/Domingos/json/.




