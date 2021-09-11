# standard libraries
import logging


# Third-party libraries
from aiohttp_swagger3 import *
from aiohttp import web
import aiohttp_cors

# Internal modules
from handler import Handler

logger = logging.getLogger(__name__)



class KDuwadi:

    def __init__(self, host= '127.0.0.1', port= 5001):

        # Check env variables
        
        self.host = host
        self.port = port

        self.handler = Handler()
        logger.info('Handler initialized successfully')

        self.app = web.Application()
        logger.info('Initialized PRECISE API successfully')

        self.swagger = SwaggerDocs(
            self.app,
            swagger_ui_settings= SwaggerUiSettings(path="/docs/"),
            title='kDuwadi',
            version = '1.0-alpha',
            description='This API enables REEDS UI',
        )

        #self.swagger.register_media_type_handler()
        self.add_routes()


        self.run_app()

    
    async def get_app(self):
        return self.app
    
    def run_app(self):
        
        self.configure_cors_on_all_routes()

        try:
            web.run_app(self.app, host=self.host, port=self.port)
        except Exception as err:
            logging.error(f"Error starting webserver - {str(err)}")

    
    def add_routes(self):
        
        #self.swagger.register_media_type_handler("multipart/form-data", self.handler.post_precise)
        self.swagger.add_routes([
            web.post('/demorequest', self.handler.handle_demo_request),
            web.post('/letstalk', self.handler.handle_letstalk),
            web.get('/resume', self.handler.get_resume),
            web.get('/health', self.handler.get_health)
        ])
    
    def configure_cors_on_all_routes(self):
        
        """ Configure CORS on all routes. """
        cors = aiohttp_cors.setup(self.app, defaults={
            # Allow all to read all CORS-enabled resources from *
            "*": aiohttp_cors.ResourceOptions(
                expose_headers="*",
                allow_headers="*",
                allow_methods="*"
            )
        })
        for route in list(self.app.router.routes()):
            cors.add(route)

        logger.info('Addes cors on all routes')



if __name__ == '__main__':

    KDuwadi()