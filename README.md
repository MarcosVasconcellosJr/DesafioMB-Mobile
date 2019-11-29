# Manual API

Este projeto implementa uma API em .NetCore 3.0.

## Você vai precisar de:

* Visual Studio

    - [Visual Studio](https://visualstudio.microsoft.com/pt-br/vs/?rr=https%3A%2F%2Fwww.google.com%2F)
    - [.NET Core 3.0](https://www.microsoft.com/net/download)

* Caso resolva usar o Visual Studio como IDE, durante a sua instalação procure instalar os seguintes itens:
    - ASP.NET & Web Development;
	- [.NET Core Cross-Platform Development](https://dotnet.microsoft.com/download/dotnet-core/thank-you/sdk-3.0.101-windows-x64-installer);
	
* Baixar o Git:
    
    - [Git](https://git-scm.com/downloads)

## Dependências do projeto


**1.Setup** 

* API: .NET Core 3.0.100-rc1-014190, para mais informações sobre [Download](https://dotnet.microsoft.com/download/dotnet-core/3.0).
* Nuget: como gerenciador de pacotes é utilizado NuGet, mais [informações ](https://www.nuget.org/).

**2- Baixar dependências**

* Todas as dependências do projeto são gerenciadas pelo nuget, para que ele restaure manualmente as bibliotecas: 
 `Update-Package  -reinstall`, os pacotes utilizados são:
 [EntityFrameworkCore 3.0.0-rc1.19456.14](https://www.nuget.org/packages/Microsoft.EntityFrameworkCore/3.0.0-rc1.19456.14),
 [EntityFrameworkCore.SqlServer 3.0.0-rc1.19456.14](https://www.nuget.org/packages/Microsoft.EntityFrameworkCore.SqlServer/3.0.0-rc1.19456.14),
 [EntityFrameworkCore.Design 3.0.0-rc1.19456.14](https://www.nuget.org/packages/Microsoft.EntityFrameworkCore.Design/3.0.0-rc1.19456.14),
 [EntityFrameworkCore.Tools 3.0.0-rc1.19456.14](https://www.nuget.org/packages/Microsoft.EntityFrameworkCore.Tools/3.0.0-rc1.19456.14),
 
* Todas as dependências do projeto são gerenciadas pelo nuget, para que ele restaure manualmente as bibliotecas: Update-Package -reinstall, para execução deste comando é indicado utilizar o terminal "Package Manager Console" do próprio visual studio

**3- Banco de dados**

O banco de dados é SQL Server, para conexão utilizamos o ORM Entity Framework Core.


**4- Rodar projeto**

* Utilizando o Visual Studio 2019, apenas rode a aplicação selecionando API como **startup project**.


* Utilizando dotnet CLI:

```
$ dotnet add package Microsoft.VisualStudio.Web.CodeGeneration.Design
$ dotnet add package Microsoft.EntityFrameworkCore.Sqlite
$ dotnet restore
$ dotnet run
```


# Servidor
* OS: Windows Server 2012 ou superior
* Servidor Http: [IIS](https://www.iis.net/) 8 ou superior
* Banco de dados: [SQL Server](https://docs.microsoft.com/pt-br/sql/) 2008 ou superior


## Dúvidas

### Arquitetura ou padrões de projeto?! :blue_book:

Com a documentação da própria microsoft é possível entender o projeto
- [Microsoft Doc](https://dotnet.microsoft.com/learn/dotnet/hello-world-tutorial/intro)

### Implementação :fire:







