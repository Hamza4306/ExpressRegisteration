from flask import render_template

from app.blueprints.locations import locations_bp


@locations_bp.route('/')
def overview():
    return render_template('overview.html')


@locations_bp.route('/wiesloch')
def wiesloch():
    return render_template('wiesloch.html')


@locations_bp.route('/oberhausen-rheinhausen')
def oberhausen():
    return render_template('oberhausen.html')


@locations_bp.route('/oestringen')
def oestringen():
    return render_template('oestringen.html')


@locations_bp.route('/schwetzingen')
def schwetzingen():
    return render_template('schwetzingen.html')


@locations_bp.route('/sandhausen')
def sandhausen():
    return render_template('sandhausen.html')

@locations_bp.route('/Dossenheim')
def Dossenheim():
    return render_template('Dossenheim.html')