"""import openai
openai.api_key = "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"

def chat(input):
    context = "Albert Einstein was a German-born theoretical physicist who developed the theory of relativity."
    question = f'output the ingredients: {}' #"Where was Albert Einstein born?""
    response = openai.Completion.create(
        engine="gpt-3.5-turbo",
        temperature = 0.6,
        prompt=f"Question answering:\nContext: {context}\nQuestion: {question}",
        max_tokens=50
    )

answer = response.choices[0].text.strip()
print(answer)"""

from flask import Flask, request

app = Flask(__name__)

@app.route('/', methods=['POST'])
def ai_endpoint():
    data = request.json
    some_variable = data.get('value')
    print(some_variable)  # This will print the value received from React

    # Perform any AI-related tasks here

    return "AI results"  # You can return the results as a response

if __name__ == '__main__':
    app.run(debug=True)