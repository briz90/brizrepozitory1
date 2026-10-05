# app.py — минимальный Flask-сайт «AI-дайджест для новичков»
#
# Запуск:  python app.py
# Сайт откроется по адресу: http://127.0.0.1:5000

import json
from flask import Flask, render_template, jsonify

app = Flask(__name__)

# Один раз читаем карточки из файла content.json
with open("content.json", encoding="utf-8") as file:
    CARDS = json.load(file)


@app.route("/")
def index():
    """Главная страница: отдаём HTML и передаём в него карточки."""
    return render_template("index.html", cards=CARDS)


@app.route("/api/cards")
def api_cards():
    """JSON с карточками — может пригодиться для JavaScript в будущем."""
    return jsonify(CARDS)


if __name__ == "__main__":
    # debug=True — сайт сам перезапускается после изменений в коде
    app.run(debug=True)
