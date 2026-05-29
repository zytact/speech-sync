import os
from dotenv import load_dotenv

load_dotenv()

HF_TOKEN = os.getenv("HF_TOKEN")

MODEL_PATH = "best_model.pt"
PARAMS_PATH = "optimised_params.json"