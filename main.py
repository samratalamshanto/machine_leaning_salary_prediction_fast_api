from fastapi import FastAPI

from model_load import predict_data


app = FastAPI()

@app.get("/")
def greet():
    return {"msg":"hello world"}

@app.get("/predict")
def getPrediction():
    salary= predict_data("Master’s degree", "Germany", 15)
    return {"salary":salary}