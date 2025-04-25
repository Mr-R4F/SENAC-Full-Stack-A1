from flask import Flask, render_template, request
from datetime import datetime

app = Flask(__name__)

def GetUserDateTime():
    return datetime.now().hour

def UserGreeting(dateTime):
    if dateTime < 6:
        return "Boa madrugada"
    elif dateTime < 12:
        return "Bom dia"
    elif dateTime < 18:
        return "Boa tarde"
    else:
        return "Boa noite"

@app.route("/", methods=["GET", "POST"])

def index():
    name = None
    greeting = UserGreeting(GetUserDateTime())

    if request.method == "POST":
        name = request.form.get("name")

    return render_template("index.html", name=name, greeting=greeting)
    
if __name__ == "__main__":
    app.run(debug=True)