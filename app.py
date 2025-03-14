from flask import Flask, request, jsonify
from flask_mail import Mail, Message
from flask_cors import CORS  

app = Flask(__name__)
CORS(app)  


app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = 'mechanochamp@gmail.com'  
app.config['MAIL_PASSWORD'] = 'nsct nwue fcfy phxd'  
app.config['MAIL_DEFAULT_SENDER'] = 'mechanochamp@gmail.com'

mail = Mail(app)

@app.route('/send-email', methods=['POST'])
def send_email():
    try:
        data = request.json
        first_name = data.get("firstName")
        last_name = data.get("lastName", "")
        email = data.get("email")
        subject = data.get("subject", "No Subject")
        message = data.get("message", "")


        msg = Message(
            subject=f"New Contact Form Submission: {subject}",
            recipients=["neerav.aiyappa@gmail.com"],  
            body=f"Name: {first_name} {last_name}\n"
                 f"Email: {email}\n\n"
                 f"Message:\n{message}"
        )

        mail.send(msg)
        return jsonify({"success": True, "message": "Email sent successfully!"}), 200

    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
