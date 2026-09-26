import json
import requests
try:
    from .api_key import API_KEY
except ImportError:
    from api_key import API_KEY


def get_weather(latitiude,longitude):
    response = requests.get(
        f"https://api.openweathermap.org/data/2.5/weather?lat={latitiude}&lon={longitude}&units=metric&appid={API_KEY}"
    )
    return response.json()["main"]["temp"]


if __name__ == "__main__":
    print(get_weather("58.5942", "16.1826"))
