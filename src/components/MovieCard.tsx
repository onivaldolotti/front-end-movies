export interface IMovieProps{
    id: number;
    titulo: string;
    banner:string;
    produtor:string;
    diretor:string;
    descricao?:string;
}

export const MovieCard = (props: IMovieProps) => {
    console.log(props)
    const {titulo, banner, diretor, descricao, produtor} = props;

    return(
        <div className='movie-card'>
            <img src={banner} alt={titulo} />
            <h2>{titulo}</h2>
            {descricao&&<p>{descricao}</p>}
            <p>Produtor(a): {produtor}</p>
            <p>Diretor(a): {diretor}</p>
        </div>
    )
}