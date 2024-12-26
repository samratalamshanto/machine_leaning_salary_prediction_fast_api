FROM python:latest
WORKDIR /app
COPY . /app
COPY pickle_models /app/pickle_models
RUN pip install -r requirement.txt