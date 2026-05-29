import logging

from app.core.model_loader import pipeline

logger = logging.getLogger(__name__)

def run_diarization(audio_path):

    logger.info(f"Running diarization on: {audio_path}")

    output = pipeline(audio_path)

    diarization = output.speaker_diarization

    results = []

    for turn, _, speaker in diarization.itertracks(
        yield_label=True
    ):

        results.append({

            "speaker": speaker,

            "start": round(
                turn.start,
                2
            ),

            "end": round(
                turn.end,
                2
            ),

            "duration": round(
                turn.end - turn.start,
                2
            )

        })

    logger.info(
        f"Found {len(results)} segments"
    )

    return results