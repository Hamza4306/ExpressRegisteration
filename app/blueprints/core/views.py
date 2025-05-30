from flask import render_template, request, flash, redirect, url_for
import requests

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

@core_bp.route('/register')
def register():
    return render_template('register.html')

@core_bp.route('/deregister')
def deregister():
    return render_template('deregister.html')


@core_bp.route('/contact', methods=['POST'])
def contact():
    data = {
        "Vorname": request.form.get('firstname'),
        "Nachname": request.form.get('lastname'),
        "EMail": request.form.get('email'),
        "Thema": request.form.get('subject'),
        "Nachricht": request.form.get('content')
    }

    try:
        response = requests.post(
            "https://submit-form.com/ztdpxsLqU",
            json=data,
            headers={"Content-Type": "application/json", "Accept": "application/json"}
        )
        response.raise_for_status()
        flash("contact_section.success", "success")
    except Exception:
        flash("contact_section.error", "danger")

    return redirect(request.referrer or url_for('core.index'))
