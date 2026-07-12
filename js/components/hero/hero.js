import { HeroContent } from "./hero-content.js";
import { HeroStats } from "./hero-stats.js";

export function Hero() {

    return `

    <section class="hero">

        <div class="container">

            <div class="hero-card">

                <img
                    class="hero-scene"
                    src="assets/hero/hero-scene.png"
                    alt="Pixify Hero"
                >

                ${HeroContent()}

            </div>

            ${HeroStats()}

        </div>

    </section>

    `;

}
