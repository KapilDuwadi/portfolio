import logging
import asyncio
from aiohttp import web
import aiohttp
import json
import os
import smtplib, ssl
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

logger = logging.getLogger(__name__)
class Handler:

    def __init__(self):

        logger.info('Initializing handler for precise time series analysis API')
      
    async def get_resume(self, request):
        try:
            f = open(os.path.join(os.path.dirname(__file__),"resume.pdf"), "rb")
            content = f.read()
            f.close()
            filename = 'kduwadi_resume.pdf'
            return web.Response(
                        body=content,
                        headers= {'Content-Type': 'application/octet-stream',
                            'Content-Disposition' : f"attachement; filename={filename}"},
                        status=200
                    )

        except Exception as e:
            return web.Response(text=json.dumps(f"Error occured > {str(e)}"), status=500)

    def send_email(self, message):
        smtp_server = "smtp.gmail.com"
        port = 587  # For starttls
        sender_email = os.getenv("EMAIL")
        
        password = os.getenv("EMAIL_PASSWORD")

        # Create a secure SSL context
        context = ssl.create_default_context()
        # Try to log in to server and send email
        try:
            server = smtplib.SMTP(smtp_server,port)
            server.ehlo() # Can be omitted
            server.starttls(context=context) # Secure the connection
            server.ehlo() # Can be omitted
            server.login(sender_email, password)
            server.sendmail(sender_email, sender_email,message.as_string())
        except Exception as e:
            # Print any error messages to stdout
            print(e)
        finally:
            server.quit() 

    async def handle_letstalk(self, request):
        
        data = await request.json()
        print(data)
        try:

            message = MIMEMultipart("alternative")
            message["Subject"] = "Let's Talk from kduwadi.com"
            
            text = f'''\
                    Full name >> {data['full_name']}\

                    Email >>  {data['email']}\

                    Message >> {data['message_kapil']}\
                    '''

            message.attach(MIMEText(text, "plain"))
            self.send_email(message)
            
            web.Response(text=json.dumps(f"Success"), status=200)
        except Exception as e:
            web.Response(text=json.dumps(f"Error occured > {str(e)}"), status=500)

    async def handle_demo_request(self, request):
        data = await request.json()
        try:
            print(data)
            message = MIMEMultipart("alternative")
            message["Subject"] = "Demo Request from kduwadi.com"
            
            text = f'''\
                    Full name >> {data['full_name']}\

                    Email >>  {data['email']}\

                    Message >> {data['message']}\

                    Project >> {data['project']} \

                    Preferred date >> {data['date']}
                    '''

            message.attach(MIMEText(text, "plain"))
            self.send_email(message)
            
            web.Response(text=json.dumps(f"Success"), status=200)
        except Exception as e:
            web.Response(text=json.dumps(f"Error occured > {str(e)}"), status=500)

