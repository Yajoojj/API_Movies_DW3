"use client";

import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import styles from "./MovieList.module.css";

export default function MovieList() {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        async function loadMovies() {
            try {
                // CORREÇÃO: Sua rota é '/filmes', não '/movies'
                const response = await fetch("http://localhost:4000/filmes");
                const data = await response.json();

                console.log("Dados recebidos:", data);

                // CORREÇÃO: Seu controller retorna { filmes: [...] }
                if (data && Array.isArray(data.filmes)) {
                    setFilmes(data.filmes);
                }
            } catch (error) {
                console.error("Erro ao carregar filmes:", error);
            }
        }

        loadMovies();
    }, []);

    return (
        <div className={styles.grid}>
            {filmes.length > 0 ? (
                filmes.map((filme) => (
                    <MovieCard key={filme._id} movie={filme} />
                ))
            ) : (
                <p className={styles.empty}>Nenhum filme encontrado.</p>
            )}
        </div>
    );
}