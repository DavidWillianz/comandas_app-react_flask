from flask import Blueprint, jsonify, request
from settings import API_ENDPOINT_PRODUTO
from funcoes import Funcoes
import base64

bp_produto = Blueprint('produto', __name__, url_prefix="/api/produto")

@bp_produto.route('/all', methods=['GET'])
def get_produtos():
    response_data, status_code = Funcoes.make_api_request('get', API_ENDPOINT_PRODUTO)
    return jsonify(response_data), status_code

@bp_produto.route('/one', methods=['GET'])
def get_produto():
    id_produto = request.args.get('id_produto')
    if not id_produto:
        return jsonify({"error": Funcoes.PARAMETRO_ID_PRODUTO_OBRIGATORIO}), 400
    response_data, status_code = Funcoes.make_api_request('get', f"{API_ENDPOINT_PRODUTO}{id_produto}")
    return jsonify(response_data), status_code

@bp_produto.route('/', methods=['DELETE'])
def delete_produto():
    id_produto = request.args.get('id_produto')
    print(f"ID do produto a ser deletado: {id_produto}")
    if not id_produto:
        return jsonify({"error": Funcoes.PARAMETRO_ID_PRODUTO_OBRIGATORIO}), 400
    response_data, status_code = Funcoes.make_api_request('delete', f"{API_ENDPOINT_PRODUTO}{id_produto}")
    return jsonify(response_data), status_code

@bp_produto.route('/', methods=['POST'])
def create_produto():
    foto = request.files.get('foto')
    foto_data = foto.read()
    foto_base64 = base64.b64encode(foto_data).decode('utf-8')
    foto_base64 = f"data:{foto.mimetype};base64,{foto_base64}"
    data = {
        "nome": request.form.get('nome'),
        "descricao": request.form.get('descricao'),
        "valor_unitario": request.form.get('valor_unitario'),
        "foto": foto_base64
    }
    response_data, status_code = Funcoes.make_api_request('post', API_ENDPOINT_PRODUTO, data=data)
    return jsonify(response_data), status_code

@bp_produto.route('/', methods=['PUT'])
def update_produto():
    foto = request.files.get('foto')
    if foto:
        foto_data = foto.read()
        foto_base64 = base64.b64encode(foto_data).decode('utf-8')
        foto_base64 = f"data:{foto.mimetype};base64,{foto_base64}"
    else:
        foto_base64 = request.form.get('foto')
    data = {
        "id_produto": request.form.get('id_produto'),
        "nome": request.form.get('nome'),
        "descricao": request.form.get('descricao'),
        "valor_unitario": request.form.get('valor_unitario'),
        "foto": foto_base64
    }
    response_data, status_code = Funcoes.make_api_request('put', f"{API_ENDPOINT_PRODUTO}{data.get('id_produto')}", data=data)
    return jsonify(response_data), status_code