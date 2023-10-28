from flask import Flask, request, jsonify
from flask_cors import CORS
import together

app = Flask(__name__)
CORS(app)
together.api_key = "2b458de4c24971cf991bcb0ec6fa5c30526ad765d2174b43f212ef6d99ee964b"

@app.route('/api', methods=['GET'])
def get_js_variable():
    js_variable = request.args.get('js_variable')
    ingredients = js_variable
    #print(result)
    #return jsonify(result=result)

    output = together.Complete.create(
        prompt = "<human>: I ONLY have" + request.args.get('js_variable') + "."+ "Can you plan a dish for me using ONLY these ingredients? Please format your response, with an ingredients section with bullet pointed ingredients, directions section with numbered directions, and extra notes!" + "?\n<bot>:", 
        model = "togethercomputer/llama-2-13b-chat", 
        max_tokens = 512,
        temperature = 0,
        top_k = 60,
        top_p = 0.6,
        repetition_penalty = 0,
        stop = ["\n<human>:", "[INST]"]
    )
    print(output['output']['choices'][0]["text"])
    
    return jsonify(message=output['output']['choices'][0]['text'])
    #return jsonify(output=output['output']['choices'][0]['text'])
    

if __name__ == '__main__':
    app.run(debug=True)