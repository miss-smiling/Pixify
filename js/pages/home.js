import { Navbar } from "../components/navbar/navbar.js";
import { Hero } from "../components/hero/hero.js";
export function Home() {

    return `

        <div class="page">

            ${Navbar()}

            <main class="main">

                <!-- Hero Section -->
               ${Hero()}

                <!-- Statistics -->
                <section id="statistics"></section>

                <!-- Categories -->
                <section id="categories"></section>

                <!-- Featured Collections -->
                <section id="collections"></section>

                <!-- Trending -->
                <section id="trending"></section>

                <!-- Newsletter -->
                <section id="newsletter"></section>

            </main>

            <footer id="footer"></footer>

        </div>

    `;

}
