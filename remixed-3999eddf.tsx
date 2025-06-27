<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Architectural Forms</title>
    <style>
        .arch-container {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            background: linear-gradient(135deg, #f8f6f0 0%, #f0eee6 100%);
            padding: 40px 20px;
            text-align: center;
            min-height: 400px;
        }

        .arch-title {
            font-size: 2.5rem;
            font-weight: 200;
            letter-spacing: 0.2em;
            color: #2d2d2d;
            margin-bottom: 1rem;
            text-transform: uppercase;
        }

        .arch-subtitle {
            font-size: 1rem;
            color: #666;
            margin-bottom: 3rem;
            letter-spacing: 0.1em;
        }

        .arch-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            max-width: 1000px;
            margin: 0 auto;
        }

        .arch-card {
            background: rgba(255, 255, 255, 0.9);
            border-radius: 12px;
            padding: 2rem;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .arch-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 12px 48px rgba(0, 0, 0, 0.15);
        }

        .arch-card-title {
            font-size: 1.2rem;
            font-weight: 300;
            letter-spacing: 0.1em;
            color: #2d2d2d;
            margin-bottom: 1rem;
            text-transform: uppercase;
        }

        .arch-visual {
            height: 120px;
            display: flex;
            align-items: flex-end;
            justify-content: center;
            margin-bottom: 1rem;
        }

        /* Grid Animation */
        .grid-visual {
            display: flex;
            gap: 4px;
            align-items: flex-end;
        }

        .grid-bar {
            width: 12px;
            background: linear-gradient(to top, #4a90e2, #7bb3f0);
            border-radius: 2px 2px 0 0;
            animation: pulse 3s ease-in-out infinite;
        }

        .grid-bar:nth-child(1) { height: 40px; animation-delay: 0s; }
        .grid-bar:nth-child(2) { height: 70px; animation-delay: 0.3s; }
        .grid-bar:nth-child(3) { height: 50px; animation-delay: 0.6s; }
        .grid-bar:nth-child(4) { height: 90px; animation-delay: 0.9s; }
        .grid-bar:nth-child(5) { height: 60px; animation-delay: 1.2s; }

        @keyframes pulse {
            0%, 100% { opacity: 0.8; transform: scaleY(1); }
            50% { opacity: 1; transform: scaleY(1.2); }
        }

        /* Radial Animation */
        .radial-visual {
            position: relative;
            width: 100px;
            height: 100px;
        }

        .radial-ring {
            position: absolute;
            border: 2px solid #50c878;
            border-radius: 50%;
            animation: expand 4s ease-in-out infinite;
        }

        .radial-ring:nth-child(1) { width: 20px; height: 20px; top: 40px; left: 40px; animation-delay: 0s; }
        .radial-ring:nth-child(2) { width: 40px; height: 40px; top: 30px; left: 30px; animation-delay: 0.5s; }
        .radial-ring:nth-child(3) { width: 60px; height: 60px; top: 20px; left: 20px; animation-delay: 1s; }

        @keyframes expand {
            0%, 100% { transform: scale(1); opacity: 0.3; }
            50% { transform: scale(1.3); opacity: 0.8; }
        }

        /* Terrain Animation */
        .terrain-visual {
            display: flex;
            align-items: flex-end;
            gap: 2px;
            height: 100px;
        }

        .terrain-bar {
            width: 8px;
            background: linear-gradient(to top, #8b4513, #d2b48c);
            border-radius: 4px 4px 0 0;
            animation: wave 5s ease-in-out infinite;
        }

        .terrain-bar:nth-child(1) { height: 30px; animation-delay: 0s; }
        .terrain-bar:nth-child(2) { height: 50px; animation-delay: 0.2s; }
        .terrain-bar:nth-child(3) { height: 70px; animation-delay: 0.4s; }
        .terrain-bar:nth-child(4) { height: 60px; animation-delay: 0.6s; }
        .terrain-bar:nth-child(5) { height: 40px; animation-delay: 0.8s; }
        .terrain-bar:nth-child(6) { height: 80px; animation-delay: 1s; }

        @keyframes wave {
            0%, 100% { transform: translateY(0) scaleY(1); }
            50% { transform: translateY(-10px) scaleY(1.3); }
        }

        /* Parametric Animation */
        .parametric-visual {
            position: relative;
            width: 100px;
            height: 100px;
        }

        .parametric-line {
            position: absolute;
            height: 3px;
            background: linear-gradient(90deg, #ff6b6b, #4ecdc4);
            border-radius: 2px;
            animation: rotate 6s linear infinite;
        }

        .parametric-line:nth-child(1) { width: 60px; top: 30px; left: 20px; animation-delay: 0s; }
        .parametric-line:nth-child(2) { width: 40px; top: 50px; left: 30px; animation-delay: 2s; }

        @keyframes rotate {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        .arch-description {
            font-size: 0.9rem;
            color: #666;
            line-height: 1.6;
        }

        @media (max-width: 768px) {
            .arch-title { font-size: 2rem; }
            .arch-grid { grid-template-columns: 1fr; }
            .arch-card { padding: 1.5rem; }
        }
    </style>
</head>
<body>
    <div class="arch-container">
        <h1 class="arch-title">Architectural Forms</h1>
        <p class="arch-subtitle">Exploring how buildings emerge from foundational principles</p>

        <div class="arch-grid">
            <div class="arch-card">
                <h3 class="arch-card-title">Urban Grid</h3>
                <div class="arch-visual">
                    <div class="grid-visual">
                        <div class="grid-bar"></div>
                        <div class="grid-bar"></div>
                        <div class="grid-bar"></div>
                        <div class="grid-bar"></div>
                        <div class="grid-bar"></div>
                    </div>
                </div>
                <p class="arch-description">
                    Classical city planning with systematic building blocks creating rhythm and hierarchy in urban landscapes.
                </p>
            </div>

            <div class="arch-card">
                <h3 class="arch-card-title">Organic Growth</h3>
                <div class="arch-visual">
                    <div class="radial-visual">
                        <div class="radial-ring"></div>
                        <div class="radial-ring"></div>
                        <div class="radial-ring"></div>
                    </div>
                </div>
                <p class="arch-description">
                    Radial development patterns that mimic natural growth, branching outward from central nodes.
                </p>
            </div>

            <div class="arch-card">
                <h3 class="arch-card-title">Landscape</h3>
                <div class="arch-visual">
                    <div class="terrain-visual">
                        <div class="terrain-bar"></div>
                        <div class="terrain-bar"></div>
                        <div class="terrain-bar"></div>
                        <div class="terrain-bar"></div>
                        <div class="terrain-bar"></div>
                        <div class="terrain-bar"></div>
                    </div>
                </div>
                <p class="arch-description">
                    Flowing terrain-responsive architecture creating harmony between built and natural environments.
                </p>
            </div>

            <div class="arch-card">
                <h3 class="arch-card-title">Parametric</h3>
                <div class="arch-visual">
                    <div class="parametric-visual">
                        <div class="parametric-line"></div>
                        <div class="parametric-line"></div>
                    </div>
                </div>
                <p class="arch-description">
                    Mathematical algorithms generate adaptive and responsive architectural forms.
                </p>
            </div>
        </div>
    </div>
</body>
</html>