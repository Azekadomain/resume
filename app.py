import webbrowser
from flask import Flask, render_template
import threading

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

def open_browser():
    webbrowser.open("http://127.0.0.1:5000/")

if __name__ == "__main__":
    
    threading.Thread(target=app.run, kwargs={'debug': False, 'use_reloader': False}).start()
    
    open_browser()
