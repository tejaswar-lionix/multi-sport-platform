build:
	docker build -t sport-platform .

test:
	pytest -q

run:
	python manage.py runserver 0.0.0.0:8000
