# Como Fazer o Deploy do Seu Portfólio

A maneira mais fácil e recomendada de colocar seu portfólio no ar é usando a **Vercel**, que é a criadora do Next.js.

## Passo 1: Publicar no GitHub
1.  Crie um repositório no [GitHub](https://github.com/new).
2.  Abra o terminal na pasta do seu projeto e rode:
    ```bash
    git init
    git add .
    git commit -m "Meu portfólio pronto"
    git branch -M main
    git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
    git push -u origin main
    ```

## Passo 2: Publicar na Vercel
1.  Crie uma conta na [Vercel](https://vercel.com/signup).
2.  Clique em **"Add New..."** -> **"Project"**.
3.  Escolha "Continue with GitHub".
4.  Procure o repositório que você acabou de criar e clique em **"Import"**.
5.  Nas configurações, **não precisa mudar nada**. O Next.js é detectado automaticamente.
6.  Clique em **"Deploy"**.

## Pronto! 🚀
Em alguns segundos, a Vercel vai te dar um link (ex: `portfolio-luis-galvani.vercel.app`) onde seu site estará disponível para o mundo todo.
