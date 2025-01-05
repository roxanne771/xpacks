# XPacks

Uma aplicação web para navegação e pre-visualização de packs adultos exclusivos.

## **✨ Recursos**

- 🎥 **Pre-visualização de Conteúdo:** Exibe previews (imagens e vídeos) de packs.
- 🔎 **Pesquisa e Filtros:** Pesquisa e filtro por título, autor, e palavras-chave.
- 📄 **Paginação:** Navegue facilmente entre os packs com sistema de paginação.
- 🚨 **Mensagem de Alerta:** Exibe "Packs not found" quando nenhum pack corresponde à pesquisa.
- 🛒 **Compra de Conteúdo:** Links diretos para acessar ou comprar pacotes via Telegram.
- 🕶️ **Consentimento:** Garantia de consentimento antes de acessar.
- 🌐 **Responsividade:** Design otimizado para tudos dispositivos.

## **⚙️ Como Configurar o Projeto (Tutorial) - Local**

- Instalar Node.js e yarn (recomendado).
- Ir ate o directorio do projecto.
- Instalar dependencias (yarn install).
- Rodar (yarn start).
- Acessar localhost:9000.


## **⚙️ Como Configurar o Projeto (Tutorial) - Online (Netlify)**

- Criar uma conta no GitHub e criar um repositorio.
- Fazer upload de toda pasta (usando cmd ou drag and drop).
- Usar a conta do GitHub para criar uma conta no Netlify.
- Connectar Netlify ao GitHub escolher o repositorio.
- Configurar o nome do projecto o link avaliavel.
- Insira yarn build.

## **🛠️ Como Adicionar Novos Packs**
1. Abra o arquivo `packs.json` em `public/utils/packs.json`.
2. Adicione um novo objeto ao array com a seguinte estrutura:

```json
{
  "title": "Nome do pack",
  "description": ["Descrição 1", "Descrição 2"],
  "price": 25.00,
  "promotionalPrice": 20.00,
  "size": "5GB",
  "imageURL": ["https://link-da-imagem.jpg"],
  "videoURL": ["https://link-do-video.mp4"],
  "author": "Autor",
  "rank": 10,
  "getUrl": "https://link-de-compra",
  "keywords": ["palavra-chave1", "palavra-chave2"]
}
```

3. Salve o arquivo e reinicie o servidor para ver as atualizações.

**🌐 Feito por [Lizzyman04](https://me.tudocomlizzyman.com)**