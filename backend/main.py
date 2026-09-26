from fastapi import FastAPI

app = FastAPI()


@app.get("/adventure")
def get_adventure():
    return {
        "activity": "Go for a walk",
        "food": "Try a new restaurant",
        "budget": 500
    }