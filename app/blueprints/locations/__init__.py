from flask import Blueprint

locations_bp = Blueprint('locations', __name__, url_prefix='/annahmestellen')

from . import views