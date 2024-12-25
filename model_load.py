import pickle
import pandas as pd
import numpy as np


def load_model_data(file_path='pickle_models\saved_model.pkl'):
    try:
        with open(file_path, 'rb') as file:
            data = pickle.load(file)
        return data
    except FileNotFoundError:
        raise Exception(f"File not found: {file_path}")
    except Exception as e:
        raise Exception(f"Error loading pickle file: {e}")

data = load_model_data()
reg_model = data["model"]
encdr_country = data["country_encoder"]
encdr_education = data["edu_encoder"]

def predict_data(edu_category, country_category, years_of_exp):
    try:
        X_test = np.array([[edu_category, country_category, years_of_exp]])

        # Transform categorical inputs
        X_test[:, 0] = encdr_education.transform([edu_category])
        X_test[:, 1] = encdr_country.transform([country_category])
        X_test = X_test.astype(float)

        y_test_pred = reg_model.predict(X_test)
        return y_test_pred[0]
    except Exception as e:
        raise Exception(f"Error during prediction: {e}")

