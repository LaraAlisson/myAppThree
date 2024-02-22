*****************************************
*******Comandos CMD**********************

1 - npx create-expo-app my-app
2 - npm install --global expo-cli eas-cli** - foi instalado globalmente.
3 - git init para liberar o upload, -> sempre que estiver em um novo diretório. (ver para uplodo do projeto no git)
4 - Criar no diretório o arquivo eas.json e adicione o cód.
***
{
    "build": {
        "preview": {
            "android": {
                "buildType": "apk"
            }
        },
        "preview2": {
            "android": {
                "gradleCommand": ":app:assembleRelease"
            }
        },
        "preview3": {
            "developmentClient": true
        },
        "production": {}
    }
}
***
5 - adicionar a variavel de ambiente no app.json no android.
***
"package": "com.app.appOne", -- trocar o nome pelo app atual.
  		"version": 1,
****

6 - eas build -p android --profile preview
	What would you like your Android application id to be? ... com.alissonlara.myappTwo = confirmar com enter ou 
	alterar o nome conforme o mesmo padrão.	

7 - carregar no git hub 
**
	7.1 - criar o arquivo readme.md -- escrever informações sobre o projeto....
	7.2 - abrir git bash here
	7.3 - git init (master linha prencipal cronologica)
	7.4 -(
		a - git add <nome do arquivo ou apenas o ponto (.)>
		b - git commit -m "Descreva o comit ex. atualizaçãopara v2"
		c - git branch -M "main" - renomear a branch master.
		d - abrir o git hub - no navegador e criar or epositório igual ao da máquina
		e - git remote origin <endereço do repositório git>
		f - git push -u origin main
		** para as proximas commit usar passo a,b e f**
	    )
	fim - neste logica carregou o projeto.

*****************************************
1 - criar novo aplicativo e rodar o mesmo no androi consultado a documentação.
2 - Criar no novo aplcativo novos componentes.
3 - anotar comandos, e carregar no git.
--https://docs.expo.dev/versions/v50.0.0/sdk/image/-