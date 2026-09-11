from flask import Flask, render_template, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/api/market-data', methods=['GET'])
def get_market_data():
    market_data = {
        "indices": {
            "nifty": {"price": 24350.20, "change": 142.50, "p_change": 0.59, "trend": "Bullish"},
            "banknifty": {"price": 52120.80, "change": 45.10, "p_change": 0.09, "trend": "Sideways"},
            "sensex": {"price": 79890.15, "change": 410.30, "p_change": 0.52, "trend": "Bullish"}
        },
        "indicators": {
            "vix": 13.45,
            "vix_change": -2.1,
            "gift_nifty": 24410.00,
            "gift_diff": 60,
            "global_sentiment": "Strong Bullish"
        },
        "options": {
            "pcr": 1.15,
            "max_pain": 24300,
            "atm_iv": 14.2,
            "expected_move": 180,
            "call_oi_resistance": 24500,
            "put_oi_support": 24200,
            "oi_change_text": "Heavy Put Writing at 24,300",
            "positioning": "Long Build-up"
        }
    }
    return jsonify({"status": "success", "data": market_data})

if __name__ == '__main__':
    app.run(debug=True, port=5000)