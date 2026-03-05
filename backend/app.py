from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/contact", methods=["POST"])
def contact():
    data = request.json

    name = data.get("name")
    email = data.get("email")
    message = data.get("message")

    print(name, email, message)

    return jsonify({"status": "success"})


if __name__ == "__main__":
    app.run(port=5000, debug=True)