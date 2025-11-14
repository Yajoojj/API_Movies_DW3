import styles from './MovieCard.module.css';

const MovieCard = ({ movie }) => {
    return (
        <div className={styles.card}>
            {}
            <h2 className={styles.title}>{movie.titulo}</h2>
            <p className={styles.details}><strong>Ano:</strong> {movie.ano}</p>
            <p className={styles.details}><strong>Gênero:</strong> {movie.genero}</p>
            <p className={styles.details}><strong>Duração:</strong> {movie.duracao}</p>
            {movie.estreia && (
                <p className={styles.details}>
                    <strong>Estreia:</strong> {new Date(movie.estreia).toLocaleDateString('pt-BR', { timeZone: 'UTC' })}
                </p>
            )}
        </div>
    );
};

export default MovieCard;