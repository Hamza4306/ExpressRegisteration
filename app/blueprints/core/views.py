from flask import render_template

from app.blueprints.core import core_bp


@core_bp.route('/')
def index():
    return render_template('index.html')


@core_bp.route('/formulare-und-dokumente')
def documents():
    return render_template('documents.html')


@core_bp.route('/partner')
def partner():
    return render_template('partner.html')


@core_bp.route('/kfz-steuer')
def tax():
    return render_template('tax.html')


@core_bp.route('/checkliste')
def checklist():
    return render_template('checklist.html')