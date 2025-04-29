
from flask import Flask, request, redirect, url_for, flash


def create_app(config_object="app.config"):
    app = Flask(__name__)
    app.url_map.strict_slashes = False
    app.config.from_object(config_object)

    from .blueprints.core import core_bp
    app.register_blueprint(core_bp)

    from .blueprints.services import services_bp
    app.register_blueprint(services_bp)

    from .blueprints.locations import locations_bp
    app.register_blueprint(locations_bp)

    from .blueprints.legal import legal_bp
    app.register_blueprint(legal_bp)

    return app
