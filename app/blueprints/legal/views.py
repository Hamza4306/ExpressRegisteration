from flask import render_template

from app.blueprints.legal import legal_bp


@legal_bp.route('/impressum')
def imprint():
    return render_template('imprint.html')


@legal_bp.route('/datenschutz')
def data_privacy():
    return render_template('data-privacy.html')


@legal_bp.route('/ueber-uns')
def about_us():
    return render_template('about-us.html')