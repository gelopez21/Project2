import os

API_KEY = os.environ.get('API_KEY') or 'dbc89e494ed6952440e02af5038d2806'

MONGO_URI = os.environ.get('MONGO_URI') or 'mongodb://localhost:27017/stops.collection_stops'

BROKER_URL=os.environ['REDIS_URL']

CELERY_RESULT_BACKEND=os.environ['REDIS_URL']