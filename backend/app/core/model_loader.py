import json
import torch

from pyannote.audio import Pipeline

from app.core.config import (
    MODEL_PATH,
    PARAMS_PATH
)

from app.core.logger import logger

logger.info("Loading diarization pipeline...")
with open(PARAMS_PATH, "r") as f:
    optimized_params = json.load(f)
pipeline = Pipeline.from_pretrained(
    "pyannote/speaker-diarization-3.1"
)
checkpoint = torch.load(
    MODEL_PATH,
    map_location="cpu",
    weights_only=False
)

pipeline._segmentation.model.load_state_dict(
    checkpoint
)
pipeline.instantiate(
    optimized_params
)

logger.info("Pipeline loaded successfully")