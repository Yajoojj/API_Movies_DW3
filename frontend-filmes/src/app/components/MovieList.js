"use client";

import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import styles from './MovieList.module.css';

const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovies = async () => {
            try {

                const response = await fetch('http://localhost:4000/filmes');

                if (!response.ok) {
                    throw new Error('Falha ao conectar com a API');
                }

                const data = await response.json();

                setMovies(data.filmes || []);

            } catch (error) {
                console.error('Erro ao buscar filmes:', error);
                setError('Não foi possível carregar os filmes. Verifique se a API está rodando.');
            }
        };

        fetchMovies();
    }, []);

    if (error) return <p className={styles.error}>{error}</p>;

    return (
        <div className={styles.movieList}>
            {movies.length > 0 ? (
                movies.map((movie) => (
                    <MovieCard key={movie._id} movie={movie} />
                ))
            ) : (
                <p>Nenhum filme cadastrado ainda.</p>
            )}
        </div>
    );
};

export default MovieList;