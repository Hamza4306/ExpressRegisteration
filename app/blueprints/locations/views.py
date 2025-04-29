from flask import render_template

from app.blueprints.locations import locations_bp


@locations_bp.route('/')
def overview():
    return render_template('overview.html')


@locations_bp.route('/kronau')
def kronau():
    return render_template('kronau.html')


@locations_bp.route('/oberhausen-rheinhausen')
def oberhausen():
    return render_template('oberhausen.html')


@locations_bp.route('/oestringen')
def oestringen():
    return render_template('oestringen.html')


@locations_bp.route('/schwetzingen')
def schwetzingen():
    return render_template('schwetzingen.html')


@locations_bp.route('/odenheim')
def odenheim():
    return render_template('odenheim.html')
