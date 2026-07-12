export function Navbar() {
    return `
    <header class="navbar">

        <div class="container navbar-container">

            <a href="#" class="logo">
                🌸 Pixify
            </a>

            <nav class="nav-links">

                <a href="#">Home</a>
                <a href="#">Shop</a>
                <a href="#">Collections</a>
                <a href="#">About</a>
                <a href="#">Donate</a>

            </nav>

            <div class="nav-actions">

                <input
                    type="search"
                    class="search-box"
                    placeholder="Search themes..."
                >

                <button class="cart-btn">
                    🛒
                    <span class="cart-count">0</span>
                </button>

                <button class="login-btn">
                    Sign In
                </button>

            </div>

        </div>

    </header>
    `;
}
