
# Envio de E-mails com Node.js

![Node.js](https://img.shields.io/badge/Node.js-v18.x-green)
![Express.js](https://img.shields.io/badge/Express.js-v4.x-blue)
![Nodemailer](https://img.shields.io/badge/Nodemailer-v6.x-orange)
![Bootstrap](https://img.shields.io/badge/Bootstrap-v5.x-purple)

Este é um projeto simples para enviar e-mails utilizando um formulário web. Ele foi desenvolvido com Node.js no back-end, utilizando o **Nodemailer** para o envio dos e-mails, e com um front-end básico estilizado com **Bootstrap**.

---

## 🚀 Funcionalidades

- **Formulário Responsivo**: Interface amigável para que os usuários possam preencher suas informações.
- **Envio de E-mails**: Envia os dados do formulário para o destinatário configurado.
- **Segurança**: Uso de variáveis de ambiente para proteger credenciais sensíveis.
- **Estilização Moderna**: Utiliza Bootstrap para um design responsivo e atraente.

---

## 📂 Estrutura do Projeto

```plaintext
/
├── backend/                # Código do servidor Node.js
│   ├── server.js           # Configuração do servidor e rotas
│   ├── .env                # Variáveis de ambiente
│   ├── package.json        # Dependências do projeto
│   ├── .gitignore 
│
├── frontend/              # Código do front-end
│      ├── js/
│         ├── script.js    # Codigo para consumo e processamento do endpoint       
│   ├── index.html         # Estrutura HTMl contendo o formulário     
│
└──              
```

---

## ⚙️ Como Executar o Projeto

### 1. Pré-requisitos
- **Node.js** instalado ([Baixar Node.js](https://nodejs.org/)).
- Uma conta de e-mail para envio (recomenda-se configurar o Gmail com senha de aplicativo).

### 2. Configuração
1. Clone o repositório:
   ```bash
   git clone https://github.com/euClaudioFilho/formulario-email
   cd back-end
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Crie um arquivo `.env` na pasta `backend` com as seguintes configurações:
   ```plaintext
   EMAIL_USER=seu-email@gmail.com
   EMAIL_PASS=sua-senha-de-aplicativo
   ```

### 3. Executar o Projeto
1. Inicie o servidor:
   ```bash
   node server.js
   ```

2. Abra o arquivo `frontend/index.html` no navegador para acessar o formulário.

---

## 📧 Configuração de E-mail

Este projeto utiliza o **Nodemailer** para envio de e-mails. Para configurar o envio:
- Use provedores como Gmail, Yahoo ou Outlook.
- Configure uma senha de aplicativo no provedor para garantir segurança.

---

## 📝 Licença

Este projeto está sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.
