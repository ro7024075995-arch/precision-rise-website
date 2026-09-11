async function refreshDashboard() {
    try {
        const response = await fetch('/api/market-data');
        const res = await response.json();

        if (res.status === 'success') {
            const data = res.data;

            // NIFTY
            document.getElementById('nifty-price').innerText = data.indices.nifty.price.toLocaleString('en-IN');
            document.getElementById('nifty-change').innerText = `+${data.indices.nifty.change} (+${data.indices.nifty.p_change}%)`;

            // BANK NIFTY
            document.getElementById('banknifty-price').innerText = data.indices.banknifty.price.toLocaleString('en-IN');
            document.getElementById('banknifty-change').innerText = `+${data.indices.banknifty.change} (+${data.indices.banknifty.p_change}%)`;

            // SENSEX
            document.getElementById('sensex-price').innerText = data.indices.sensex.price.toLocaleString('en-IN');
            document.getElementById('sensex-change').innerText = `+${data.indices.sensex.change} (+${data.indices.sensex.p_change}%)`;

            // Indicators
            document.getElementById('vix-val').innerText = data.indicators.vix;
            document.getElementById('gift-val').innerText = data.indicators.gift_nifty.toLocaleString('en-IN');
            document.getElementById('global-val').innerText = data.indicators.global_sentiment;

            // Options
            document.getElementById('pcr-val').innerText = `${data.options.pcr} (Bullish Bias)`;
            document.getElementById('maxpain-val').innerText = `${data.options.max_pain} Strike`;
            document.getElementById('atm-iv').innerText = `${data.options.atm_iv}%`;
            document.getElementById('exp-move').innerText = `±${data.options.expected_move} Points`;
            document.getElementById('res-val').innerText = `${data.options.call_oi_resistance} Strike`;
            document.getElementById('sup-val').innerText = `${data.options.put_oi_support} Strike`;
            document.getElementById('oi-change').innerText = data.options.oi_change_text;
            document.getElementById('positioning').innerText = data.options.positioning;
        }
    } catch (err) {
        console.log('Terminal Sync Error:', err);
    }
}

// Every 5 seconds auto data update simulation
setInterval(refreshDashboard, 5000);
