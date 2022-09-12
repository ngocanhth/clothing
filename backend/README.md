# clothing
cd backend
 python -m venv venv
 venv/Scripts/activate

Windows:  venv\Scripts\activate
Linux: source myenv/bin/activate

# Xuất các packages của project ra file requirements.txt

pip freeze > requirements.txt
# Dựng lại các packages của project:
pip install -r requirements.txt

django-admin startproject core .

 python manage.py collectstatic