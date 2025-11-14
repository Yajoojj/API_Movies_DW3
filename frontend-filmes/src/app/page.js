import MovieList from "./components/MovieList";
import styles from "./page.module.css";

export default function Home() {
    return (
        <main className={styles.container}>
            <h1 className={styles.title}>Catálogo de Filmes</h1>
            <MovieList />
        </main>
    );
}