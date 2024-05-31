<script>
    let features = [
        {
            title: "Easy Integration",
            description: "간편한 통합으로 빠르게 시작할 수 있습니다.",
        },
        {
            title: "Secure Transactions",
            description: "안전한 결제 시스템을 제공합니다.",
        },
        {
            title: "Multi-Platform Support",
            description: "여러 플랫폼에서 사용할 수 있습니다.",
        },
    ];
</script>

<main>
    <header>
        <nav class="container">
            <a href="#home">Home</a>
            <a href="#features">Features</a>
            <a href="#docs">Documentation</a>
        </nav>
    </header>

    <section class="hero" id="home">
        <div class="container">
            <h1>TossPay Library</h1>
            <p>쉽고 간편한 결제 통합 라이브러리</p>
            <button
                on:click={() => {
                    location.href = "http://localhost:5173/Docs";
                }}>Get Started</button
            >
        </div>
    </section>

    <section class="features" id="features">
        <div class="container">
            <h2>Features</h2>
            {#each features as feature}
                <div class="feature">
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                </div>
            {/each}
        </div>
    </section>

    <section class="installation" id="docs">
        <div class="container">
            <h2>Get Started</h2>
            <p>다음 명령어를 사용하여 설치할 수 있습니다:</p>
            <h3>Rust</h3>
            <code> cargo install tosspay-lib </code>
            <h3>Python</h3>
            <code> pip install tosspay-lib </code>
        </div>
    </section>

    <footer>
        <p>&copy; 2024 TossPay</p>
        <p>
            <a href="https://github.com/tosspay-lib">GitHub</a>
        </p>
    </footer>
</main>

<style>
    body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        background-color: #f4f4f4;
        color: #333;
        width: 100%;
    }
    header {
        text-align: center;
        padding: 1rem 0;
        background-color: #fff;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        width: 100%;
        top: 0;
        z-index: 10;
    }
    nav a {
        margin: 0 1rem;
        text-decoration: none;
        color: #333;
        font-weight: bold;
    }
    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 2rem;
    }
    .hero {
        text-align: center;
        padding: 6rem 0 4rem;
        background: #fff;
        margin-top: 4rem;
    }
    .hero h1 {
        margin: 0;
        font-size: 3rem;
    }
    .hero p {
        font-size: 1.25rem;
        color: #666;
    }
    .hero button {
        margin-top: 1rem;
        padding: 0.75rem 2rem;
        border: none;
        background-color: #007bff;
        color: white;
        cursor: pointer;
        font-size: 1rem;
        border-radius: 5px;
        transition: background-color 0.3s;
    }
    .hero button:hover {
        background-color: #0056b3;
    }
    .features,
    .installation,
    .documentation {
        padding: 4rem 1rem;
        text-align: center;
        background: #f9f9f9;
        margin: 2rem 0;
    }
    .features h2,
    .installation h2,
    .documentation h2 {
        margin-bottom: 2rem;
        font-size: 2rem;
        color: #333;
    }
    .features .feature {
        margin-bottom: 2rem;
    }
    .features .feature h3 {
        margin: 0.5rem 0;
        font-size: 1.5rem;
    }
    .features .feature p {
        color: #666;
        font-size: 1rem;
    }
    .installation code {
        background-color: #f1f1f1;
        padding: 1rem;
        display: block;
        text-align: left;
        margin: 1rem 0;
        border-radius: 5px;
        font-size: 1rem;
    }
    .documentation p {
        font-size: 1rem;
        margin: 1rem 0;
    }
    .documentation a {
        color: #007bff;
        text-decoration: none;
    }
    .documentation a:hover {
        text-decoration: underline;
    }
    footer {
        background-color: #fff;
        padding: 1rem 0;
        text-align: center;
        box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
    }
    footer p {
        margin: 0.5rem 0;
    }
    footer a {
        margin: 0 0.5rem;
        text-decoration: none;
        color: #007bff;
    }
</style>
