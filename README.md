# CBack

BACKENDE DE UMA PAROQUIA

LINK DO FRONTEND EM ANGULAR - https://github.com/peedroaugustto/projetoCrismaPDS2

TECNOLOGIAS:
- NODEJS
- MONGODB
- EXPRESS

DEPENDENCIAS
- MONGOOSE
- BODY-PARSER
- AIXOS
- BCRYPTJS
- CORS
- JSONWEBTOKEN
- EXPRESS

----------------------------------------------------------------------------------------------------------------------------------------

ENDPOINTS:

DELETE PESSOA - /pessoa/delete/:pessoaId - (exclui pessoa pelo id)
DELETE EVENTO - /evento/delete/:eventoId - (exclui evento pelo id)

GET EVENTO  - /evento/:eventoId - (retorna um evento pelo id)
GET EVENTOS - /evento/list      - (retorna uma lista com todos os eventos cadastrados)

GET PESSOA  - /pessoa/:pessoaId - (retorna um pessoa pelo id)
GET PESSOAS - /pessoa/list      - (retorna uma lista com todos os pessoas cadastrados)

POST PESSOA - /auth - (faz a authenticação da pessoa e retorna um token)
{
	"email" : "",
	"password" : ""
}

POST ADMINISTRADOR - /auth/adm - (faz a authenticação do administrador pela verificação do atributo booleano pessoa.adm e retona o token)
{
	"email" : "",
	"password" : ""
}

POST REGISTRAR EVENTO - /evento/register - (registra um evento, não podendo ter a mesma data de uma evento ja cadastrado)
{
	"name" : "",
	"data" : ""
}

POST REGISTRAR PESSOA - /pessoa/register - (registra uma pessoa, não podendo ter o mesmo e-mail de uma pessoa ja cadastrada)
{
	"name" : "",
	"email" : "",
	"password" : "",
	"namePai" : "",
	"nameMae" : ""
}
