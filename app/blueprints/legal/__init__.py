from flask import Blueprint

legal_bp = Blueprint('legal', __name__, url_prefix='/rechtlich')

from . import views