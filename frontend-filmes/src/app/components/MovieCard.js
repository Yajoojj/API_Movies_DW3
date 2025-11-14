import styles from "./MovieCard.module.css";

export default function MovieCard({ movie }) {
    return (
        <article className={styles.card}>
            <div className={styles.content}>
                {/* CORREÇÃO: Seu campo é 'titulo', no exemplo era 'name' */}
                <h2 className={styles.title}>
                    {movie.titulo}
                </h2>

                <div className={styles.info}>
                    {/* Seus campos: ano, genero, duracao */}
                    <p><span>Ano:</span> {movie.ano}</p>
                    <p><span>Gênero:</span> {movie.genero}</p>
                    <p><span>Duração:</span> {movie.duracao}</p>
                    <p>
                        <span>Estreia:</span>{" "}
                        {movie.estreia
                            ? new Date(movie.estreia).toLocaleDateString("pt-BR", { timeZone: 'UTC' })
                            : "-"}
                    </p>
                </div>
            </div>
        </article>
    );
}