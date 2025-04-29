from flask import render_template

from app.blueprints.services import services_bp


@services_bp.route('/kfz-anmeldung')
def register():
    return render_template('register.html')


@services_bp.route('/kfz-abmeldung')
def deregister():
    return render_template('deregister.html')


@services_bp.route('/zoll-und-export-kennzeichen')
def export():
    return render_template('export.html')


@services_bp.route('/kurzzeit-und-6-tages-kennzeichen')
def temporary():
    return render_template('temporary.html')