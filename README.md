🎙️ ToneFixer — Turn Your Text into a Vibe!

ToneFixer is your cool sidekick that rewrites boring text into stylish, funny, or ultra-formal messages — all thanks to the magic of AI! Think of it like a tone-switch button for your sentences.

✨ What’s Inside?

- 🔁 Switch Tones Like a Pro – Casual, formal, funny? Just choose and go!
- 🧠 Powered by Smart AI – Uses models like FLAN-T5 to make your text sound just right.
- 🎨 Stylish Frontend – Built with HTML + Tailwind CSS for clean vibes.
- 🛠️ Fast & Lightweight Backend – Runs on FastAPI or Flask.
- ⚡ Super Easy to Use – Type, choose tone, boom — done!

🛠️ How to Set It Up

Backend (Python + FastAPI)
> cd backend  
> python -m venv venv  
> venv\Scripts\activate  (or `source venv/bin/activate` on macOS/Linux)  
> pip install -r requirements.txt  

Frontend (Tailwind + HTML)
> cd frontend  
> npm install  

🚦 How to Run It

Backend:
> uvicorn main:app --reload  

Frontend:
> Just open `index.html` with Live Server in VS Code

🧪 Test Example

POST /rewrite
{
  "text": "Hi, can we meet today?",
  "tone": "formal"
}

Response:
{
  "rewritten": "Greetings, would it be possible for us to meet today?"
}

🔓 License

MIT — It’s yours, go wild!

👨‍💻 Made with ❤️ by
- Danish Ibrahim Khan
- https://danishk.netlify.app/
