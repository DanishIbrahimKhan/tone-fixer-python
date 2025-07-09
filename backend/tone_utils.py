from transformers import pipeline

rephrase = pipeline("text2text-generation", model="google/flan-t5-base")

def rewrite_tone(text: str, tone: str) -> str:
    prompt = (
        f"Please rewrite the following sentence in a '{tone}' tone.\n"
        f"Sentence: \"{text}\"\n"
        f"Rewritten:"
    )
    result = rephrase(prompt, max_length=100, do_sample=True, top_k=50)
    return result[0]['generated_text'].strip()
