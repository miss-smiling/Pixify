export function Navbar() {
    return `
    <header class="navbar">

        <div class="container navbar-container">

            <a href="#" class="logo">

                <img
                    src="assets/branding/logo.svg"
                    alt="Pixify Logo"
                    class="logo-icon"
                >

                <span class="logo-text">
                    Pixify
                </span>

            </a>

            <nav class="nav-links">

                <a href="#" class="nav-link active">Home</a>

                <a href="#" class="nav-link">Shop</a>

                <a href="#" class="nav-link">Collections</a>

                <a href="#" class="nav-link">About</a>

                <a href="#" class="nav-link">Donate</a>

            </nav>

            <div class="nav-actions">

                <div class="search-wrapper">

                    <img
                        src="assets/icons/search.svg"
                        class="search-icon"
                        alt=""
                    >

                    <input
                        type="search"
                        placeholder="Search themes..."
                        class="search-input"
                    >

                </div>

                <button class="cart-btn">

                    <img
                        src="assets/icons/cart.svg"
                        alt=""
                    >

                    <span class="cart-badge">0</span>

                </button>

                <button class="signin-btn">

                    <img
                        src="assets/icons/user.svg"
                        alt=""
                    >

                    <span>Sign In</span>

                </button>

            </div>

        </div>

    </header>
    `;
}
