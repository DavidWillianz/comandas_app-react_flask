import os
from flask import Flask, send_from_directory, session
from datetime import timedelta
from flask_cors import CORS
import logging
from settings import PROXY_PORT, PROXY_DEBUG, TEMPO_SESSION, FRONTEND_URL
from funcoes import Funcoes

from mod_funcionario.funcionario import bp_funcionario
from mod_cliente.cliente import bp_cliente
from mod_produto.produto import bp_produto

logging.basicConfig(level=logging.INFO)

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": f"{FRONTEND_URL}"}})

@app.route('/favicon.ico')
def favicon():
    return send_from_directory(
        directory='static',
        path='favicon.ico',
        mimetype='image/vnd.microsoft.icon'
    )

@app.route('/api/teste_token', methods=['POST'])
def teste_token():
    return Funcoes.get_api_token()

app.secret_key = os.urandom(12).hex()
app.permanent_session_lifetime = timedelta(minutes=int(TEMPO_SESSION))

app.config['SESSION_COOKIE_SAMESITE'] = 'None'
app.config['SESSION_COOKIE_SECURE'] = True


@app.before_request
def before_request():
    session.permanent = True

app.register_blueprint(bp_funcionario)
app.register_blueprint(bp_cliente)
app.register_blueprint(bp_produto)

if __name__ == '__main__':
    logging.info(f"Iniciando o servidor Flask na porta: {PROXY_PORT}")
    app.run(host='0.0.0.0', port=PROXY_PORT, debug=PROXY_DEBUG, use_reloader=PROXY_DEBUG)
