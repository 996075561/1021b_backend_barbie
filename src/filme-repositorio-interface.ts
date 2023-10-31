export default interface FilmeRepositorioInterface {
salvar(input:FilmeDTO): Promise<any>
listar(): Promise<any>;
buscarPorId(id:number): Promise<FilmeDTO |undefined>;
}

type FilmeDTO = {
    id:number,
    titulo:string,
    descricao:string,
    imagem:string
}